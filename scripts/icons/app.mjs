import fs from "fs";

// run with node --env-file=.env app.mjs
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const _URL_BASE = "https://api.staging.figma.com/v1/files";
const _FILE_URL_BASE = "https://staging.figma.com/design/";
const _FILE_KEY = "YfiqA0yWMXuLJAzkZNpBdy";
const URL_BASE = "https://api.figma.com/v1/files";
const URL_BASE_IMAGES = "https://api.figma.com/v1/images";
const FILE_URL_BASE = "https://figma.com/design/";
const FILE_KEY = "J0KLPKXiONDRssXD1AX9Oi";
const FILE_URL = `${FILE_URL_BASE}${FILE_KEY}`;
const PAGE_NAME = "Icons";
const ICON_VARIANT_NAME = "Size=16";

const SKIP_REST_API = process.argv.includes("--skip-rest-api");

async function go() {
  if (!SKIP_REST_API) {
    const data = await getIconComponents();
    fs.writeFileSync("./icons-index.txt", data.exports.sort().join("\n"));
    fs.writeFileSync("./icons.json", JSON.stringify(data.files, null, 2));
  }

  const json = JSON.parse(fs.readFileSync("./icons.json"));
  fs.copyFileSync("./icons-index.txt", "../../src/icons/index.ts");
  await Promise.all(
    json.map(
      ([fileName, fileContents]) =>
        new Promise((resolve, reject) => {
          fs.writeFile(`../../src/icons/${fileName}`, fileContents, (err) =>
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
  const page = response.document.children.find(
    (page) => page.name === PAGE_NAME,
  );
  const idsToNameAndComponentSetId = {};
  if (page) {
    page.children.forEach((component) => {
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

  const res = { files: [], exports: [] };
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
    const svgString = [
      `import figma from "@figma/code-connect";`,
      'import { IconProps, Icon } from "ui/primitives";',
      `export const ${name} = (props: IconProps) => (`,
    ];
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
    svgString.push(
      `figma.connect(${name}, "${FILE_URL}?node-id=${componentSetId}", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <${name} size={size} /> });`,
    );
    res.files.push([`${name}.tsx`, svgString.join("\n")]);
  }

  return res;
}
