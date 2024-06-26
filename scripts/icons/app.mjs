import fs from "fs";

// run with node --env-file=.env app.mjs
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;
const URL_BASE = "https://api.figma.com/v1/files";
const URL_BASE_IMAGES = "https://api.figma.com/v1/images";
const ICON_VARIANT_NAME = "Size=16";
const ROOT_TRAVERSE_IDS = ["7809:18809", "522:12152"]; // Page ID > Section ID

const SKIP_REST_API = process.argv.includes("--skip-rest-api");

async function go() {
  if (!SKIP_REST_API) {
    const data = await getIconComponents();
    fs.writeFileSync(
      "./Icons.figma.txt",
      `import figma from "@figma/code-connect";\nimport {${data.imports.sort().join(", ")}} from "icons";`,
    );
    fs.writeFileSync("./icons-index.txt", data.exports.sort().join("\n"));
    fs.writeFileSync("./icons.json", JSON.stringify(data.files, null, 2));
  }

  const json = JSON.parse(fs.readFileSync("./icons.json"));
  fs.copyFileSync("./icons-index.txt", "../../src/ui/icons/index.ts");
  const figmaStarter = fs.readFileSync("./Icons.figma.txt");
  fs.writeFileSync(
    "../../src/figma/icons/Icons.figma.tsx",
    `${figmaStarter}\n${json.map((a) => a[2]).join("\n")}`,
  );
  await Promise.all(
    json.map(
      ([fileName, fileContents]) =>
        new Promise((resolve, reject) => {
          fs.writeFile(`../../src/ui/icons/${fileName}`, fileContents, (err) =>
            err ? reject(err) : resolve(),
          );
        }),
    ),
  );

  console.log("DONE!");
}

go();

async function getIconComponents() {
  try {
    const fileResponse = await fetch(`${URL_BASE}/${FILE_KEY}`, {
      method: "GET",
      headers: { "X-FIGMA-TOKEN": TOKEN },
    });
    const data = await fileResponse.json();
    return await fileRESTResponseToIconComponentsJSON(data);
  } catch (e) {
    throw e;
  }
}
async function getSVGImages(nodeIds) {
  try {
    const fileResponse = await fetch(
      `${URL_BASE_IMAGES}/${FILE_KEY}?format=svg&ids=${nodeIds.join(",")}`,
      {
        method: "GET",
        headers: { "X-FIGMA-TOKEN": TOKEN },
      },
    );
    return await fileResponse.json();
  } catch (e) {
    throw e;
  }
}

async function fileRESTResponseToIconComponentsJSON(response) {
  let parentNode = response.document;
  ROOT_TRAVERSE_IDS.forEach(
    (id) => (parentNode = parentNode.children.find((a) => a.id === id)),
  );
  const idsToNameAndComponentSetId = {};
  if (parentNode) {
    parentNode.children.forEach((component) => {
      if (component.type === "COMPONENT_SET") {
        const child = component.children.find(
          (child) => child.name === ICON_VARIANT_NAME,
        );
        if (child) {
          idsToNameAndComponentSetId[child.id] = [
            "Icon" +
              component.name
                .split(/[^a-zA-Z0-9]+/)
                .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
                .join(""),
            component.id,
          ];
        }
      }
    });
  }
  const nodeIds = Object.keys(idsToNameAndComponentSetId);
  const { images } = await getSVGImages(nodeIds);

  console.log("Sleeping for ten seconds to wait for images to exist...");
  await new Promise((resolve) => setTimeout(resolve, 10000));
  console.log("Proceeding....");

  const res = { files: [], exports: [], imports: [] };
  const fails = [];
  await Promise.all(
    nodeIds.map(async (nodeId) => {
      try {
        await processNodeId(nodeId);
      } catch (e) {
        fails.push(nodeId);
        console.log("Failed once:", nodeId);
      }
    }),
  );
  console.log(`Retrying ${fails.length} failure(s)...`);
  await Promise.all(
    fails.map(async (nodeId) => {
      try {
        await processNodeId(nodeId);
      } catch (e) {
        console.error(e);
        console.log(
          "Failed again:",
          nodeId,
          images[nodeId],
          ...idsToNameAndComponentSetId[nodeId],
        );
      }
    }),
  );

  async function processNodeId(nodeId) {
    const fileResponse = await fetch(images[nodeId], { method: "GET" });
    const svg = await fileResponse.text();
    const [name, componentSetId] = idsToNameAndComponentSetId[nodeId];
    const figmaString = [];
    const svgString = [
      'import { IconProps, Icon } from "primitives";',
      `export const ${name} = (props: IconProps) => (`,
    ];
    res.imports.push(name);
    res.exports.push(`export { ${name} } from "./${name}.tsx";`);
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
    svgString.push(`  <Icon {...props}>${cleanSvg}</Icon>`);
    svgString.push(");");
    figmaString.push(
      `figma.connect(${name}, "<FIGMA_ICONS_BASE>?node-id=${componentSetId}", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <${name} size={size} /> });`,
    );
    res.files.push([
      `${name}.tsx`,
      svgString.join("\n"),
      figmaString.join("\n"),
    ]);
  }

  return res;
}
