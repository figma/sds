#!/usr/bin/env node
// Builds the Figma <-> code map for this repo from figma.config.json and the
// Code Connect templates in src/figma. Prints JSON to stdout.
//
// Usage: node .claude/skills/sync-figma/scripts/map-components.mjs [filter...]
//   filter: optional case-insensitive substrings matched against the component
//   name, Code Connect file path or source path (e.g. "button" "tag").

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const configPath = path.join(root, "figma.config.json");
if (!fs.existsSync(configPath)) {
  console.error("figma.config.json not found. Run this from the repo root.");
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const subs = config.codeConnect?.documentUrlSubstitutions ?? {};
const filters = process.argv.slice(2).map((f) => f.toLowerCase());

const GITHUB_PREFIX = /^https:\/\/github\.com\/[^/]+\/[^/]+\/blob\/[^/]+\//;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

function parseFigmaUrl(url) {
  if (!url) return {};
  const m = url.match(/figma\.com\/design\/([^/?]+)(?:\/branch\/([^/?]+))?/);
  const node = url.match(/node-id=([^&]+)/);
  return {
    fileKey: m ? m[2] ?? m[1] : undefined,
    nodeId: node ? decodeURIComponent(node[1]).replace("-", ":") : undefined,
  };
}

const storyFiles = walk(path.join(root, "src/stories")).filter((f) =>
  /\.stories\.tsx?$/.test(f),
);
const storySources = storyFiles.map((f) => [f, fs.readFileSync(f, "utf8")]);

function storiesFor(component) {
  if (!component) return [];
  const re = new RegExp(`\\b${component}\\b`);
  return storySources
    .filter(([, src]) => re.test(src))
    .map(([f]) => path.relative(root, f));
}

const ccFiles = walk(path.join(root, "src/figma")).filter((f) =>
  /\.figma\.ts$/.test(f),
);

const rows = ccFiles.map((file) => {
  const src = fs.readFileSync(file, "utf8");
  const header = (key) =>
    src.match(new RegExp(`^//\\s*${key}=(.+)$`, "m"))?.[1].trim();
  const placeholder = header("url");
  const url = subs[placeholder] ?? placeholder;
  const sourceUrl = header("source");
  const component = header("component");
  const sourcePath = sourceUrl?.replace(GITHUB_PREFIX, "");
  const sourceExists = sourcePath
    ? fs.existsSync(path.join(root, sourcePath))
    : false;
  const cssFile =
    sourcePath && sourceExists
      ? fs
          .readdirSync(path.dirname(path.join(root, sourcePath)))
          .filter((f) => f.endsWith(".css"))
          .map((f) => path.join(path.dirname(sourcePath), f))
      : [];
  return {
    component,
    // "template-only": composition templates with no single source component
    // (attribution was removed deliberately, see PR #53). Sync the template's
    // example code, not a component implementation.
    kind: sourcePath ? "component" : "template-only",
    codeConnectFile: path.relative(root, file),
    placeholder,
    figmaUrl: url,
    ...parseFigmaUrl(url),
    sourcePath,
    sourceExists,
    cssFiles: cssFile,
    stories: storiesFor(component),
    problems: [
      !placeholder && "missing // url= header",
      placeholder?.startsWith("<") && !subs[placeholder] &&
        `placeholder ${placeholder} not in figma.config.json`,
      sourcePath && !sourceExists && `source file not found: ${sourcePath}`,
    ].filter(Boolean),
  };
});

const filtered = filters.length
  ? rows.filter((r) =>
      filters.some((f) =>
        [r.component, r.codeConnectFile, r.sourcePath]
          .filter(Boolean)
          .some((v) => v.toLowerCase().includes(f)),
      ),
    )
  : rows;

const usedPlaceholders = new Set(rows.map((r) => r.placeholder));
const unusedSubstitutions = Object.keys(subs).filter(
  (k) => !usedPlaceholders.has(k) && k !== "<FIGMA_ICONS_BASE>",
);

const fileKeys = [...new Set(rows.map((r) => r.fileKey).filter(Boolean))];

console.log(
  JSON.stringify(
    {
      fileKeys,
      count: filtered.length,
      components: filtered.sort((a, b) =>
        a.codeConnectFile.localeCompare(b.codeConnectFile),
      ),
      unusedSubstitutions,
    },
    null,
    2,
  ),
);
