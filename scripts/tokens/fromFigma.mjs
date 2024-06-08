// run with node --env-file=.env app.mjs
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const _URL_BASE = "https://api.staging.figma.com/v1/files";
const URL_BASE = "https://api.figma.com/v1/files";
const KEY_PREFIX_COLLECTION = "@";

export async function getFileStyles(fileKey) {
  try {
    const fileResponse = await fetch(`${URL_BASE}/${fileKey}`, {
      method: "GET",
      headers: { "X-FIGMA-TOKEN": TOKEN },
    });
    const data = await fileResponse.json();
    return fileRESTResponseToStylesJSON(data);
  } catch (e) {
    throw e;
  }
}

export async function getFileVariables(fileKey, nameSpace) {
  try {
    const fileResponse = await fetch(`${URL_BASE}/${fileKey}/variables/local`, {
      method: "GET",
      headers: { "X-FIGMA-TOKEN": TOKEN },
    });
    const data = await fileResponse.json();
    return variablesRESTResponseToVariablesJSON(data, nameSpace);
  } catch (e) {
    throw e;
  }
}

function fileRESTResponseToStylesJSON(response) {
  const styles = response.styles;
  for (let styleId in styles) {
    if (styles[styleId].remote) {
      delete styles[styleId];
    }
  }
  traverseChildrenForStyles(styles, response.document, {
    foundCount: 0,
    needToFind: Object.keys(styles).length,
  });
  return Object.values(styles).filter(({ remote }) => !remote);

  function traverseChildrenForStyles(styles, node, finder) {
    if (finder.foundCount >= finder.needToFind) return;
    if (node.styles) {
      for (let styleType in node.styles) {
        const styleId = node.styles[styleType];
        if (styles[styleId] && !styles[styleId].type) {
          finder.foundCount++;
          if (styleType === "text") {
            const { fontSize, fontFamily, fontWeight, fontStyle } =
              node.boundVariables;
            styles[styleId] = {
              type: "TEXT",
              name: styles[styleId].name,
              fontSize: fontSize ? fontSize[0] : node.fontSize,
              fontFamily: fontFamily ? fontFamily[0] : node.fontFamily,
              fontWeight: fontWeight ? fontWeight[0] : node.fontWeight,
              fontStyle: fontStyle
                ? fontStyle[0]
                : node.style.italic
                  ? "italic"
                  : "normal",
            };
          } else if (styleType === "effect") {
            styles[styleId].type = "EFFECT";
            styles[styleId].effects = node.effects;
          } else if (styleType === "FILL") {
            styles[styleId].type = "FILL";
            styles[styleId].fills = node.fills;
          }
        }
      }
    }
    if (node.children) {
      node.children.forEach((child) =>
        traverseChildrenForStyles(styles, child, finder),
      );
    }
  }
}

function variablesRESTResponseToVariablesJSON(response, nameSpace) {
  const collections = Object.values(response.meta.variableCollections).filter(
    (c) => !c.remote,
  );
  const object = {};
  const { idToKey } = uniqueKeyIdMaps(collections, "id", KEY_PREFIX_COLLECTION);

  collections.forEach(
    (collection) =>
      (object[idToKey[collection.id]] = restAPICollectionResponseToJSON(
        nameSpace,
        idToKey,
        response.meta.variables,
        collection,
      )),
  );

  return object;

  /* Creating maps of any nodes where the names have an incrementing suffix if duplicates */
  function uniqueKeyIdMaps(nodesWithNames, idKey, prefix = "") {
    const idToKey = {};
    const keyToId = {};
    nodesWithNames.forEach((node) => {
      const key = sanitizeName(node.name);
      let int = 2;
      let uniqueKey = `${prefix}${key}`;
      while (keyToId[uniqueKey]) {
        uniqueKey = `${prefix}${key}_${int}`;
        int++;
      }
      keyToId[uniqueKey] = node[idKey];
      idToKey[node[idKey]] = uniqueKey;
    });
    return { idToKey, keyToId };
  }

  function sanitizeName(name) {
    return name
      .replace(/[^a-zA-Z0-9 ]/g, "")
      .replace(/^ +/, "")
      .replace(/ +$/, "")
      .replace(/ +/g, "_")
      .toLowerCase();
  }

  /* REST API Node conversion to JSON */

  function restAPICollectionResponseToJSON(
    nameSpace,
    collectionIdToKeyMap,
    variables,
    { name, modes, variableIds, id: figmaId },
  ) {
    const collection = {};
    const { idToKey, keyToId } = uniqueKeyIdMaps(modes, "modeId");
    const modeKeys = Object.values(idToKey);
    collection.$extensions = {
      [nameSpace]: { figmaId, modes: modeKeys },
    };
    variableIds.forEach((variableId) => {
      const { name, resolvedType, valuesByMode } = variables[variableId];
      const value = valuesByMode[keyToId[modeKeys[0]]];
      const fontWeight =
        resolvedType === "FLOAT" &&
        Boolean(name.match(/\/?weight/i)) &&
        "fontWeight";
      const fontFamily =
        resolvedType === "STRING" &&
        Boolean(name.match(/\/?family/i)) &&
        "fontFamily";
      if (
        (value !== undefined &&
          ["COLOR", "FLOAT", "STRING"].includes(resolvedType)) ||
        fontFamily
      ) {
        let obj = collection;
        name.split("/").forEach((groupName) => {
          const safeName = groupName
            .split(/[^\da-zA-Z]+/)
            .join("-")
            .toLowerCase();
          obj[safeName] = obj[safeName] || {};
          obj = obj[safeName];
        });
        obj.$type =
          resolvedType === "COLOR"
            ? "color"
            : resolvedType === "FLOAT"
              ? fontWeight || "number"
              : fontFamily || "unknown";
        obj.$value = restAPIValueToJSON(
          value,
          resolvedType,
          collectionIdToKeyMap,
          variables,
        );
        obj.$extensions = {
          [nameSpace]: {
            figmaId: variableId,
            modes: modeKeys.reduce((into, modeKey) => {
              into[modeKey] = restAPIValueToJSON(
                valuesByMode[keyToId[modeKey]],
                resolvedType,
                collectionIdToKeyMap,
                variables,
              );
              return into;
            }, {}),
          },
        };
      }
    });
    return collection;
  }

  function restAPIValueToJSON(
    value,
    resolvedType,
    collectionIdToKeyMap,
    variables,
  ) {
    if (value.type === "VARIABLE_ALIAS") {
      const variable = variables[value.id];
      if (!variable) {
        console.log(value);
        return "UNKNOWN";
      }
      const prefix = collectionIdToKeyMap[variable.variableCollectionId];
      return `{${prefix}.${variable.name.replace(/\//g, ".")}}`;
    }
    return resolvedType === "COLOR" ? rgbToHex(value) : value;

    function rgbToHex({ r, g, b, a }) {
      const toHex = (value) => {
        const hex = Math.round(value * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };

      const hex = [toHex(r), toHex(g), toHex(b)];
      if (a !== 1) {
        hex.push(toHex(a));
      }
      return `#${hex.join("")}`;
    }
  }
}
