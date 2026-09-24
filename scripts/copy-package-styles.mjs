import { copyFile } from "node:fs/promises";

await Promise.all(
  ["theme", "responsive", "reset", "icons"].map((name) =>
    copyFile(new URL(`../src/${name}.css`, import.meta.url), new URL(`../dist/${name === "theme" ? "tokens" : name}.css`, import.meta.url)),
  ),
);
await copyFile(new URL("../src/package-css.d.ts", import.meta.url), new URL("../dist/types/css.d.ts", import.meta.url));
