const _FILE_URL = "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy";
const FILE_URL = "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi";

async function run() {
  const exports = [];
  const files = [];
  await Promise.all(
    figma.currentPage
      .findAllWithCriteria({ types: ["COMPONENT_SET"] })
      .map(async (componentSet) => {
        const cleanName =
          "Icon" +
          componentSet.name
            .split(/[^a-zA-Z0-9]+/)
            .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
            .join("");
        const lines = [
          `import figma from "@figma/code-connect";`,
          'import { IconProps, Icon } from "primitives";',
          `export const ${cleanName} = (props: IconProps) => (`,
        ];
        exports.push(`export { ${cleanName} } from "./${cleanName}.tsx";`);
        await Promise.all(
          componentSet.children.map(async (child) => {
            if (child.width === 16) {
              const svg = await child.exportAsync({ format: "SVG_STRING" });
              const cleanSvg = svg
                .replace(
                  /(stroke|fill|line|clip)-(.)/g,
                  (_, p1, p2) => p1 + p2.toUpperCase(),
                )
                .replace(/<svg[^>]+>/, "")
                .replace(/<\/svg>/, "")
                .replace(/stroke="#[^"]+"/g, `stroke="var(--svg-stroke-color)"`)
                .replace(/fill="#[^"]+"/g, `fill="var(--svg-fill-color)"`)
                .replace(/\n/g, "");
              lines.push(`  <Icon {...props}>${cleanSvg}</Icon>`);
            }
            return true;
          }),
        );
        lines.push(");");
        lines.push(
          `figma.connect(${cleanName}, "${FILE_URL}?node-id=${componentSet.id}", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <${cleanName} size={size} /> });`,
        );
        files.push(`["${cleanName}.tsx", ${JSON.stringify(lines.join("\n"))}]`);
      }),
  );

  figma.showUI(
    `<style>body { margin: 0 } textarea { font-family: monospace; white-space: pre; height: 50vh; width: 100vw; }</style>
<textarea>${exports.join("\n")}</textarea>
<textarea>[\n${files.join(",\n")}\n]</textarea>`,
    {
      height: 900,
      width: 1200,
    },
  );
}

run();
