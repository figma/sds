import fs from "fs";

// run with node --env-file=.env app.mjs
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;
const URL_BASE = "https://api.figma.com/v1/files";
const URL_BASE_IMAGES = "https://api.figma.com/v1/images";
// The name of the variant for each icon you want to export.
// If you dont have variants, you'll need to modify this script.
const ICON_VARIANT_NAME = "Size=16";
// The node ids from root to icon component parent.
const ROOT_TRAVERSE_IDS = ["7809:18809", "522:12152"]; // Page ID > Section ID
// Skipping REST API allows you to run this script using ./icons.json, icons-index.txt, and Icons.figma.txt in their current state.
const SKIP_REST_API = process.argv.includes("--skip-rest-api");

/**
 * Get icon data from Figma and write data to disk (unless skipping REST API)
 * Create Code Connect docs (single file), create icon React component files, and create index file export.
 */
async function go() {
  // Writing the data files to disk based on icons in Figma.
  // Storing data to disk allows us to parse it later, independent of REST API requests if we want to change the output.
  if (!SKIP_REST_API) {
    // Get icon data from Figma
    const data = await getIconComponents();
    const names = data.map((a) => a[0]).sort();
    // Write Figma code connect file import statement to disk (".txt" extension prevents unnecessary parsing)
    // This file is not complete yet and only includes the imports. We will write the actual docs to it later.
    fs.writeFileSync(
      "./Icons.figma.txt",
      `import figma from "@figma/code-connect";\nimport {${names.join(", ")}} from "icons";`,
    );
    // Write index export file to disk (".txt" extension prevents unnecessary parsing)
    fs.writeFileSync(
      "./icons-index.txt",
      names.map((n) => `export { ${n} } from "./${n}.tsx";`).join("\n"),
    );
    // Write icon component JSON data file to disk (used for both code connect docs and React component file gen)
    fs.writeFileSync("./icons.json", JSON.stringify(data, null, 2));
  }

  // Parse the JSON icon component data
  const json = JSON.parse(fs.readFileSync("./icons.json"));
  // Copy the index file over to the src and change extension to TypeScript.
  fs.copyFileSync("./icons-index.txt", "../../src/ui/icons/index.ts");
  // Loading up the Figma file with the imports already written to it
  const figmaStarter = fs.readFileSync("./Icons.figma.txt");
  // Writing the official Code Connect Figma doc with the Code Connect from the JSON data appended to it.
  fs.writeFileSync(
    "../../src/figma/icons/Icons.figma.tsx",
    `${figmaStarter}\n${json.map((a) => a[2]).join("\n")}`,
  );
  // Writing each Icon React component file to disk. Additive only, does not delete old icons.
  await Promise.all(
    json.map(
      ([fileName, fileContents]) =>
        new Promise((resolve, reject) => {
          fs.writeFile(
            `../../src/ui/icons/${fileName}.tsx`,
            fileContents,
            (err) => (err ? reject(err) : resolve()),
          );
        }),
    ),
  );

  console.log("DONE!");
}

go();

/**
 * Getting all file data from Figma, then parsing it into icon component data
 * @link https://www.figma.com/developers/api#get-files-endpoint
 * @returns {Promise<string[][]>}
 */
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

/**
 * Getting image urls from figma for each icon component
 * @link https://www.figma.com/developers/api#get-images-endpoint
 * @param {string[]} nodeIds - array of node ids to export as svg.
 * @returns {{err: string, images: Map<string, string>, status: number}}
 */
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

/**
 * Traverse a Figma file response for all icons, get their svg image data,
 *   and transform it into the data we're storing locally.
 * @param {{document: Node}} response Figma GET file response
 * @returns {Promise<string[][]>} - Array<[IconName, IconSVGString, IconCodeConnectString]>
 */
async function fileRESTResponseToIconComponentsJSON(response) {
  // Starting parent node is the document. Will traverse children to find icons' parent.
  let parentNode = response.document;
  // Traversing from root to the icon parent node (likely a page or section)
  // This constant is an array of ids to follow to get to the icons.
  ROOT_TRAVERSE_IDS.forEach(
    (id) => (parentNode = parentNode.children.find((a) => a.id === id)),
  );
  const idsToNameAndComponentSetId = {};
  if (parentNode) {
    // For each child of the parent node, find the icons (variant or main component)
    parentNode.children.forEach((component) => {
      // The icon. Is either a child of a component set or the component itself.
      // Any other node type we ignore.
      const icon =
        component.type === "COMPONENT_SET"
          ? component.children.find((child) => child.name === ICON_VARIANT_NAME)
          : component.type === "COMPONENT"
            ? component
            : null;
      if (icon) {
        idsToNameAndComponentSetId[icon.id] = [
          "Icon" +
            component.name
              .split(/[^a-zA-Z0-9]+/)
              .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
              .join(""),
          component.id,
        ];
      }
    });
  }
  const nodeIds = Object.keys(idsToNameAndComponentSetId);
  // SVG export for all the icon nodes we found.
  const { images } = await getSVGImages(nodeIds);

  // Waiting a bit for the images to exist on S3. Rarely, it can take a second.
  console.log("Sleeping for ten seconds to wait for images to exist...");
  await new Promise((resolve) => setTimeout(resolve, 10000));
  console.log("Proceeding....");

  // We ultimately write three files to disk. Our result holds the data.
  const result = [];
  // We occasionally fail due to assets not existing on S3.
  // We store those here and revisit a second time.
  const fails = [];
  // Initial attempt to get all node images
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
  // Second attempt for failed attempts.
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

  /**
   * Get the component name, svg code strings, and code connect doc strings
   * @param {string} nodeId
   */
  async function processNodeId(nodeId) {
    // Fetch the S3 url
    const fileResponse = await fetch(images[nodeId], { method: "GET" });
    // Get the raw SVG string from the response
    const svg = await fileResponse.text();
    // Get the name and component set node id
    const [name, componentSetId] = idsToNameAndComponentSetId[nodeId];
    const figmaString = [];
    // Building out an svg React component string...
    const svgString = [
      'import { IconProps, Icon } from "primitives";',
      `export const ${name} = (props: IconProps) => (`,
    ];
    // Clean the raw SVG response up (SVG children only, <svg> tag handled by wrapping Icon component)
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
    // Wrap the cleaned svg in our Icon component (paths only)
    svgString.push(`  <Icon {...props}>${cleanSvg}</Icon>`);
    svgString.push(");");
    // Code Connect doc code
    figmaString.push(
      `figma.connect(${name}, "<FIGMA_ICONS_BASE>?node-id=${componentSetId}", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <${name} size={size} /> });`,
    );
    // Add the strings for this component into our result.
    result.push([name, svgString.join("\n"), figmaString.join("\n")]);
  }

  return result;
}
