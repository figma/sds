import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("dist/types");
const aliases = {
  compositions: "ui/compositions/index",
  data: "data/index",
  hooks: "ui/hooks/index",
  icons: "ui/icons/index",
  images: "ui/images/index",
  layout: "ui/layout/index",
  primitives: "ui/primitives/index",
  utils: "ui/utils/index",
};

async function resolve(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await resolve(filename);
    } else if (entry.name.endsWith(".d.ts")) {
      const source = await readFile(filename, "utf8");
      const result = source.replace(/(from ["'])([^"']+)(["'])/g, (match, prefix, specifier, suffix) => {
        const target = aliases[specifier];
        if (!target) return match;
        let relative = path.relative(path.dirname(filename), path.join(root, target));
        if (!relative.startsWith(".")) relative = `./${relative}`;
        return `${prefix}${relative}${suffix}`;
      });
      if (source !== result) await writeFile(filename, result);
    }
  }
}

await resolve(root);
