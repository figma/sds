const KEY_PREFIX_COLLECTION = `@`;
const NAMESPACE = "org.sds";

exportToJSON();

function recurseVariables(variable, list) {
  const variables = Array.isArray(variable) ? variable : [variable];
  variables.forEach((variable) => {
    if (!variable || !variable.id) return;
    const { name, variableCollectionId, resolvedType, valuesByMode } =
      figma.variables.getVariableById(variable.id);
    const collection =
      figma.variables.getVariableCollectionById(variableCollectionId);
    const modes = collection.modes;
    const isSingleMode = modes.length === 1;
    const item = {
      token: [
        `${KEY_PREFIX_COLLECTION}${sanitizeName(collection.name)}`,
        name,
      ].join("/"),
      collection: collection.name,
      name,
      type: resolvedType,
    };
    if (!isSingleMode) {
      item.modes = {};
    }
    const modeIds = Object.keys(valuesByMode);
    modeIds.forEach((modeId) => {
      const mode = isSingleMode
        ? "Default"
        : modes.find((mode) => mode.modeId === modeId).name;
      let value = valuesByMode[modeId];
      if (value.type === "VARIABLE_ALIAS") {
        const variable = figma.variables.getVariableById(value.id);
        const v = {};
        recurseVariables(variable, v);
        if (isSingleMode) {
          item.value = v;
        } else {
          item.modes[mode] = v;
        }
      } else {
        if (resolvedType === "COLOR") {
          value = rgbToHex(value);
        }
        if (isSingleMode) {
          item.value = value;
        } else {
          item.modes[mode] = value;
        }
      }
    });
    if (Array.isArray(list)) {
      list.push(item);
    } else {
      for (let key in item) {
        list[key] = item[key];
      }
    }
  });
}

async function exportToJSON() {
  const collections = figma.variables.getLocalVariableCollections();
  const object = {};
  const { idToKey } = uniqueKeyIdMaps(collections, "id", KEY_PREFIX_COLLECTION);

  collections.forEach(
    (collection) =>
      (object[idToKey[collection.id]] = collectionAsJSON(idToKey, collection)),
  );

  const effects = await getEffects();

  figma.showUI(
    [
      "<style>body { margin: 0 } textarea { width: 100%; height: 50vh; overlow-y: auto; }</style>",
      `<textarea>${JSON.stringify(object, null, 2)}</textarea><textarea>${effects}</textarea>`,
    ].join("\n"),
    {
      width: 700,
      height: 700,
    },
  );
}

function collectionAsJSON(
  collectionIdToKeyMap,
  { name, modes, variableIds, id: figmaId },
) {
  const collection = {};
  const { idToKey, keyToId } = uniqueKeyIdMaps(modes, "modeId");
  const modeKeys = Object.values(idToKey);
  collection.$extensions = {
    [NAMESPACE]: { figmaId, modes: modeKeys },
  };
  variableIds.forEach((variableId) => {
    const { name, resolvedType, valuesByMode, description } =
      figma.variables.getVariableById(variableId);
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
      obj.$value = valueToJSON(value, resolvedType, collectionIdToKeyMap);
      obj.$description = description || "";
      obj.$extensions = {
        [NAMESPACE]: {
          figmaId: variableId,
          modes: modeKeys.reduce((into, modeKey) => {
            into[modeKey] = valueToJSON(
              valuesByMode[keyToId[modeKey]],
              resolvedType,
              collectionIdToKeyMap,
            );
            return into;
          }, {}),
        },
      };
    }
  });
  return collection;
}

function valueToJSON(value, resolvedType, collectionIdToKeyMap) {
  if (value.type === "VARIABLE_ALIAS") {
    const variable = figma.variables.getVariableById(value.id);
    const prefix = collectionIdToKeyMap[variable.variableCollectionId];
    return `{${prefix}.${variable.name.replace(/\//g, ".")}}`;
  }
  return resolvedType === "COLOR" ? rgbToHex(value) : value;
}

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

function RGBAToHexA(rgba, forceRemoveAlpha = false) {
  return (
    "#" +
    rgba
      .replace(/^rgba?\(|\s+|\)$/g, "") // Get's rgba / rgb string values
      .split(",") // splits them at ","
      .filter((string, index) => !forceRemoveAlpha || index !== 3)
      .map((string) => parseFloat(string)) // Converts them to numbers
      .map((number, index) => (index === 3 ? Math.round(number * 255) : number)) // Converts alpha to 255 number
      .map((number) => number.toString(16)) // Converts numbers to hex
      .map((string) => (string.length === 1 ? "0" + string : string)) // Adds 0 when length of one number is 1
      .join("")
  ); // Puts the array to togehter to a string
}

function colorToHex({ r, g, b, a }) {
  return RGBAToHexA(
    `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)}, ${a})`,
  );
}

async function getEffects() {
  const payload = [];
  (await figma.getLocalEffectStylesAsync()).forEach(
    ({ type, name, effects }) => {
      const newEffects = effects
        .filter((a) => a.visible)
        .map((effect) => {
          const variables = {};
          for (let property in effect.boundVariables) {
            variables[property] = figma.variables.getVariableById(
              effect.boundVariables[property].id,
            ).name;
          }
          const hex = colorToHex(effect.color);
          return { ...effect, hex, variables };
        });
      payload.push(JSON.stringify({ type, name, effects: newEffects }));
    },
  );
  (await figma.getLocalPaintStylesAsync()).forEach(({ type, name, paints }) => {
    const newPaints = paints
      .filter((a) => a.visible)
      .map((paint) => {
        const variables = {};
        for (let property in paint.boundVariables) {
          variables[property] = figma.variables.getVariableById(
            paint.boundVariables[property].id,
          ).name;
        }
        return { ...paint, variables };
      });
    payload.push(JSON.stringify({ type, name, paints: newPaints }));
  });
  (await figma.getLocalTextStylesAsync()).forEach(
    ({
      type,
      name,
      fontSize,
      textDecoration,
      fontName,
      letterSpacing,
      lineHeight,
      leadingTrim,
      paragraphIndent,
      paragraphSpacing,
      listSpacing,
      handingPunctiation,
      handlingList,
      textCase,
      boundVariables,
    }) => {
      const variables = {};
      for (let property in boundVariables) {
        variables[property] = figma.variables.getVariableById(
          boundVariables[property].id,
        ).name;
      }
      payload.push(
        JSON.stringify({
          type,
          name,
          fontSize,
          textDecoration,
          fontName,
          letterSpacing,
          lineHeight,
          leadingTrim,
          paragraphIndent,
          paragraphSpacing,
          listSpacing,
          handingPunctiation,
          handlingList,
          textCase,
          boundVariables,
          variables,
        }),
      );
    },
  );
  return `[${payload.join(",\n")}]`;
}
