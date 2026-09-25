import { copyFile } from "node:fs/promises";

const styles = ["styles", "tokens", "responsive", "reset", "icons"];
await Promise.all(
  styles.filter((name) => name !== "styles").map((name) =>
    copyFile(new URL(`../src/${name === "tokens" ? "theme" : name}.css`, import.meta.url), new URL(`../dist/${name}.css`, import.meta.url)),
  ),
);
await Promise.all(
  styles.map((name) =>
    copyFile(new URL("../src/package-css.d.ts", import.meta.url), new URL(`../dist/${name}.css.d.ts`, import.meta.url)),
  ),
);
