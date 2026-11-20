/**
 * Style Dictionary config: builds src/theme.css from tokens/tokens.json
 * (Figma variables, W3C/DTCG format) and tokens/styles.json (Figma text and
 * effect styles).
 *
 * Run with `npm run tokens:build`. To refresh the JSON from Figma first, use
 * `npm run script:tokens:rest`.
 *
 * Every Figma variable can have one value per mode, stored in
 * `$extensions["com.figma.sds"].modes`. Each collection becomes one or more CSS
 * blocks (one per mode), and references between variables are emitted as
 * `var(--sds-…)` rather than resolved values, so modes cascade at runtime.
 */
import fs from "node:fs";

const NAMESPACE = "com.figma.sds";
const TOKEN_PREFIX = "sds-";
const KEY_PREFIX_COLLECTION = "@";
const CONVERT_TO_REM = true;
const STYLES_PATH = "tokens/styles.json";

// One entry per Figma variable collection that is written to CSS, in output
// order. Collection keys are the lower-underscore Figma collection names.
// Collections not listed here (e.g. `responsive`) are not emitted.
const COLLECTIONS = {
  color_primitives: {
    prefix: "color",
  },
  color: {
    prefix: "color",
    // Light mode names. First is the default light mode on :root.
    colorSchemes: ["sds_light"],
    // Dark mode names. First is the default under prefers-color-scheme: dark.
    colorSchemesDark: ["sds_dark"],
    // Stripped from extra mode names when building scheme class names.
    colorSchemeLightRemove: "_light",
    colorSchemeDarkRemove: "_dark",
    // Find/replace applied to CSS values.
    replacements: { color_primitives: "color" },
  },
  size: {
    prefix: "size",
    convertPixelToRem: true,
    replacements: { [`${KEY_PREFIX_COLLECTION}responsive`]: "responsive" },
  },
  typography_primitives: {
    prefix: "typography",
    convertPixelToRem: true,
    replacements: {
      [`${KEY_PREFIX_COLLECTION}responsive`]: "responsive",
      "Extra Bold Italic": "800 italic",
      "Semi Bold Italic": "600 italic",
      "Medium Italic": "500 italic",
      "Regular Italic": "400 italic",
      "Extra Light Italic": "200 italic",
      "Light Italic": "300 italic",
      "Black Italic": "900 italic",
      "Bold Italic": "700 italic",
      "Thin Italic": "100 italic",
    },
  },
  typography: {
    prefix: "typography",
    convertPixelToRem: true,
    replacements: { typography_primitives: "typography" },
  },
};

/** Collection settings for a token, or undefined if it is not emitted. */
function collectionOf(token) {
  const key = token.path[0].replace(KEY_PREFIX_COLLECTION, "");
  return key in COLLECTIONS ? { key, ...COLLECTIONS[key] } : undefined;
}

/**
 * Figma references use variable display names ("{@color_primitives.White.1000}"),
 * which don't match token keys, so Style Dictionary can't resolve them. We emit
 * them as var() ourselves, so stash the raw per-mode values where Style
 * Dictionary won't try to resolve them and give each token an inert $value.
 */
function stashFigmaValues(node) {
  if (node && typeof node === "object") {
    if ("$value" in node) {
      const { modes, ...ext } = node.$extensions?.[NAMESPACE] ?? {};
      node.$extensions = {
        ...node.$extensions,
        [NAMESPACE]: {
          ...ext,
          // Whether the value came from Figma modes (vs. a plain $value).
          hasModes: Boolean(node.$extensions?.[NAMESPACE]),
          modesJSON: encodeURIComponent(JSON.stringify(modes ?? { default: node.$value })),
        },
      };
      node.$value = String(node.$value).replace(/[{}]/g, "");
    } else {
      for (const key in node) if (key.charAt(0) !== "$") stashFigmaValues(node[key]);
    }
  }
  return node;
}

/** Convert a raw Figma value to a CSS value. */
function valueToCSS(property, value, collectionKey, convertPixelToRem, prefix = "") {
  if (value.toString().charAt(0) === "{")
    return `var(--${value
      .replace(`${collectionKey}`, prefix)
      .replace(/[\. ]/g, "-")
      .replace(/^\{/, "")
      .replace(/\}$/, "")})`;
  const valueIsDigits = value.toString().match(/^-?\d+(\.\d+)?$/);
  const isRatio = property.match(/(ratio-)/);
  const isNumeric = valueIsDigits && !property.match(/(weight|ratio-)/) && !isRatio;
  if (isNumeric) {
    return convertPixelToRem ? `${parseInt(value) / 16}rem` : `${value}px`;
  } else if (isRatio) {
    return Math.round(value * 10000) / 10000;
  }
  if (property.match("family-mono")) return `"${value}", monospace`;
  if (property.match("family-sans")) return `"${value}", sans-serif`;
  if (property.match("family-serif")) return `"${value}", serif`;
  return value;
}

/** Per-mode CSS declarations for one token: { [mode]: value }. */
function modeValues(token) {
  const collection = collectionOf(token);
  const {
    key,
    prefix,
    replacements = {},
    convertPixelToRem = CONVERT_TO_REM,
  } = collection;
  const collectionKey = `${KEY_PREFIX_COLLECTION}${key}`;
  const ext = token.original.$extensions[NAMESPACE];
  const modes = JSON.parse(decodeURIComponent(ext.modesJSON));
  const withReplacements = (value) => {
    if (typeof value !== "string") return value;
    for (const find in replacements) value = value.replace(find, replacements[find]);
    return value.toLowerCase();
  };
  const result = {};
  for (const mode in modes) {
    result[mode] = withReplacements(
      valueToCSS(
        `--${token.name}`,
        modes[mode],
        collectionKey,
        convertPixelToRem,
        ext.hasModes ? `${TOKEN_PREFIX}${prefix}` : "",
      ),
    );
  }
  return result;
}

/** Group a collection's tokens into { [mode]: [{ property, value }] }. */
function definitionsFor(tokens) {
  const definitions = {};
  for (const token of tokens) {
    const values = modeValues(token);
    for (const mode in values) {
      (definitions[mode] ??= []).push({
        property: `--${token.name}`,
        value: values[mode],
        figmaId: token.original.$extensions?.[NAMESPACE]?.figmaId ?? "UNDEFINED",
        description: token.original.$description || "",
      });
    }
  }
  return definitions;
}

/** Definitions for every emitted collection, in COLLECTIONS order. */
function allDefinitions(dictionary) {
  return Object.keys(COLLECTIONS).map((key) => ({
    key,
    definitions: definitionsFor(
      dictionary.allTokens.filter(
        (token) => token.path[0] === `${KEY_PREFIX_COLLECTION}${key}`,
      ),
    ),
  }));
}

/**
 * A snippet to paste into the Figma console that sets each variable's web code
 * syntax and description to match the generated CSS custom properties.
 */
function codeSyntaxSnippet(collections) {
  const entries = collections
    .map(({ definitions }) =>
      (Object.values(definitions)[0] ?? [])
        .map((l) => `  ["${l.figmaId}", "var(${l.property})", "${l.description}"]`)
        .sort()
        .join(",\n"),
    )
    .sort()
    .join(",\n");
  return `Promise.all([
${entries},
].map(async ([variableId, webSyntax, description]) => {
  const variable = await figma.variables.getVariableByIdAsync(variableId);
  if (variable) {
    variable.setVariableCodeSyntax("WEB", webSyntax);
    variable.description = description;
  }
  return;
})).then(() => console.log("DONE!")).catch(console.error)`;
}

function drawCSSPropLines(lines = [], indent = "  ") {
  return (
    [...lines]
      .sort((a, b) => (a.property > b.property ? 1 : -1))
      .map((l) => `${indent}${l.property}: ${l.value}`)
      .join(";\n") + ";"
  );
}

/** CSS lines for one collection, handling light/dark color schemes. */
function collectionCSS(key, settings, definitions) {
  const lines = [];
  if (settings.colorSchemes) {
    settings.colorSchemes.forEach((scheme, i) => {
      lines.push(
        i === 0
          ? `/* ${key}: ${scheme} (default) */\n:root {`
          : `/* ${key}: ${scheme} */\n.${TOKEN_PREFIX}scheme-${key}-${scheme.replace(settings.colorSchemeLightRemove, "")} {`,
        drawCSSPropLines(definitions[scheme], "  "),
        "}",
      );
    });
    if (settings.colorSchemesDark) {
      lines.push("@media (prefers-color-scheme: dark) {");
      settings.colorSchemesDark.forEach((scheme, i) => {
        lines.push(
          i === 0
            ? `  /* ${key}: ${scheme} (default) */\n  :root {`
            : `  /* ${key}: ${scheme} */\n  .${TOKEN_PREFIX}scheme-${key}-${scheme.replace(settings.colorSchemeDarkRemove, "")} {`,
          drawCSSPropLines(definitions[scheme], "    "),
          "  }",
        );
      });
      lines.push("}");
    }
  } else {
    Object.keys(definitions).forEach((mode, i) => {
      lines.push(
        i === 0
          ? `/* ${key}: ${mode} (default) */\n:root {`
          : `/* ${key}: ${mode} */\n.${TOKEN_PREFIX}theme-${key}-${mode} {`,
        drawCSSPropLines(definitions[mode], "  "),
        "}",
      );
    });
  }
  return lines;
}

/** CSS lines for Figma text and effect styles, referencing variables by id. */
function stylesCSS(styles, variablesById) {
  const effectDefs = [];
  const text = [];

  const valueFromPossibleVariable = (item = "") => {
    if (typeof item === "object") {
      const variable = variablesById[item.id];
      return variable ? `var(${variable.property})` : JSON.stringify(item);
    } else if (item.match(/^[1-9]00$/)) {
      const variable = Object.values(variablesById).find(({ value }) => value === item);
      return variable ? `var(${variable.property})` : item;
    }
    return item;
  };

  const sanitizeName = (name) =>
    name.replace(/[^a-zA-Z0-9 ]/g, " ").trim().replace(/ +/g, "-").toLowerCase();

  const formatEffect = ({ type, ...effect }) => {
    if (type === "DROP_SHADOW" || type === "INNER_SHADOW") {
      const { radius, offset: { x, y }, spread, hex, boundVariables } = effect;
      const numbers = [
        boundVariables.offsetX ? valueFromPossibleVariable(boundVariables.offsetX) : `${x}px`,
        boundVariables.offsetY ? valueFromPossibleVariable(boundVariables.offsetY) : `${y}px`,
        boundVariables.radius ? valueFromPossibleVariable(boundVariables.radius) : `${radius}px`,
        boundVariables.spread ? valueFromPossibleVariable(boundVariables.spread) : `${spread}px`,
        boundVariables.color ? valueFromPossibleVariable(boundVariables.color) : `${hex}px`,
      ];
      return `${type === "INNER_SHADOW" ? "inset " : ""}${numbers.join(" ")}`;
    } else if (type === "LAYER_BLUR" || type === "BACKGROUND_BLUR") {
      const { radius, boundVariables } = effect;
      return `blur(${boundVariables.radius ? valueFromPossibleVariable(boundVariables.radius) : `${radius}px`})`;
    }
  };

  styles.forEach(({ type, ...style }) => {
    if (type === "TEXT") {
      const { name, fontSize, fontFamily, fontWeight, fontStyle = "normal" } = style;
      const css = [fontStyle, fontWeight, fontSize, fontFamily]
        .map(valueFromPossibleVariable)
        .join(" ");
      const safeName = name
        .replace(/^[^a-zA-Z0-9]+/, "")
        .replace(/[^a-zA-Z0-9]+/g, "-")
        .toLowerCase();
      text.push(`--${TOKEN_PREFIX}font-${safeName}: ${css};`);
    } else if (type === "EFFECT") {
      const safeName = sanitizeName(style.name);
      const shadows = [];
      const filters = [];
      const backdropFilters = [];
      style.effects.forEach((effect) => {
        if (!effect.visible) return;
        if (effect.type.match("SHADOW")) shadows.push(formatEffect(effect));
        if (effect.type.match("LAYER_BLUR")) filters.push(formatEffect(effect));
        if (effect.type.match("BACKGROUND_BLUR")) backdropFilters.push(formatEffect(effect));
      });
      if (shadows.length)
        effectDefs.push(`--${TOKEN_PREFIX}effects-shadows-${safeName}: ${shadows.join(", ")};`);
      if (filters.length)
        effectDefs.push(`--${TOKEN_PREFIX}effects-filter-${safeName}: ${filters[0]};`);
      if (backdropFilters.length)
        effectDefs.push(`--${TOKEN_PREFIX}effects-backdrop-filter-${safeName}: ${backdropFilters[0]};`);
    }
  });

  return ["/* styles */", ":root {", "  " + [...text, ...effectDefs].join("\n  "), "}"];
}

export default {
  source: ["tokens/tokens.json"],
  usesDtcg: true,
  preprocessors: ["sds/figma-values"],
  log: { verbosity: "default" },
  hooks: {
    preprocessors: {
      "sds/figma-values": (dictionary) => stashFigmaValues(dictionary),
    },
    transforms: {
      "sds/name": {
        type: "name",
        // --sds-<collection prefix>-<token path without collection>
        transform: (token) => {
          const collection = collectionOf(token);
          const prefix = collection ? collection.prefix : token.path[0].replace(KEY_PREFIX_COLLECTION, "");
          return [`${TOKEN_PREFIX}${prefix}`, ...token.path.slice(1)].join("-");
        },
      },
    },
    formats: {
      "sds/theme-css": ({ dictionary }) => {
        const lines = [
          "/*",
          " * This file is automatically generated by Style Dictionary",
          " * from tokens/tokens.json and tokens/styles.json. Do not edit it by hand.",
          " * Run `npm run tokens:build` to regenerate it.",
          " */",
        ];
        const variablesById = {};
        for (const { key, definitions } of allDefinitions(dictionary)) {
          lines.push(...collectionCSS(key, COLLECTIONS[key], definitions));
          // Styles reference variables by Figma id; any mode gives the property name.
          for (const item of Object.values(definitions)[0] ?? []) variablesById[item.figmaId] = item;
        }
        const styles = JSON.parse(fs.readFileSync(STYLES_PATH, "utf8"));
        lines.push(...stylesCSS(styles, variablesById));
        return lines.join("\n");
      },
      "sds/figma-code-syntax": ({ dictionary }) =>
        codeSyntaxSnippet(allDefinitions(dictionary)),
    },
  },
  platforms: {
    css: {
      transforms: ["sds/name"],
      buildPath: "src/",
      files: [{ destination: "theme.css", format: "sds/theme-css" }],
    },
    figma: {
      transforms: ["sds/name"],
      buildPath: "scripts/tokens/",
      files: [
        {
          destination: "tokenVariableSyntaxAndDescriptionSnippet.js",
          format: "sds/figma-code-syntax",
        },
      ],
    },
  },
};
