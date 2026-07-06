import fs from "fs";

// run with node --env-file=.env app.mjs
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;
const URL_BASE = "https://api.figma.com/v1/files";
const URL_BASE_IMAGES = "https://api.figma.com/v1/images";
const BATCH_JSON_PATH = "../../src/figma/icons/Icons.figma.batch.json";
const ICON_SOURCE_BASE = "https://github.com/figma/sds/blob/main/src/ui/icons";
// The name of the variant for each icon you want to export.
// If you dont have variants, you'll need to modify this script.
const ICON_VARIANT_NAME = "Size=16";
// The node ids from root to icon component parent.
const ROOT_TRAVERSE_IDS = ["7809:18809", "522:12152"]; // Page ID > Section ID
// Skipping REST API regenerates outputs from the checked-in icons.json data.
const SKIP_REST_API = process.argv.includes("--skip-rest-api");

/**
 * Get icon data from Figma and write data to disk (unless skipping REST API),
 * then generate the React icons, export index, and Code Connect batch metadata.
 */
async function go() {
  let data;

  if (!SKIP_REST_API) {
    data = await getIconComponents();
  } else {
    data = JSON.parse(fs.readFileSync("./icons.json", "utf8"));
  }

  const icons = [...data].sort((a, b) =>
    a.component < b.component ? -1 : a.component > b.component ? 1 : 0,
  );

  if (!SKIP_REST_API) {
    fs.writeFileSync("./icons.json", `${JSON.stringify(icons, null, 2)}\n`);
  }

  fs.writeFileSync(
    "../../src/ui/icons/index.ts",
    icons
      .map(
        ({ component }) => `export { ${component} } from "./${component}.tsx";`,
      )
      .join("\n"),
  );
  fs.writeFileSync(
    BATCH_JSON_PATH,
    `${JSON.stringify(
      {
        templateFile: "./Icons.figma.batch.ts",
        components: icons.map(
          ({ component, figmaNodeId, hasSizeVariants }) => ({
            url: `<FIGMA_ICONS_BASE>?node-id=${figmaNodeId}`,
            component,
            source: `${ICON_SOURCE_BASE}/${component}.tsx`,
            ...(hasSizeVariants ? { hasSizeVariants: true } : {}),
          }),
        ),
      },
      null,
      2,
    )}\n`,
  );

  // Writing each icon React component file to disk. Additive only, does not delete old icons.
  await Promise.all(
    icons.map(
      ({ component, reactSource }) =>
        new Promise((resolve, reject) => {
          fs.writeFile(
            `../../src/ui/icons/${component}.tsx`,
            reactSource,
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
 * @returns {Promise<Array<{component: string, figmaNodeId: string, hasSizeVariants?: boolean, reactSource: string}>>}
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
 * @returns {Promise<Array<{component: string, figmaNodeId: string, hasSizeVariants?: boolean, reactSource: string}>>}
 */
async function fileRESTResponseToIconComponentsJSON(response) {
  // Starting parent node is the document. Will traverse children to find icons' parent.
  let parentNode = response.document;
  // Traversing from root to the icon parent node (likely a page or section)
  // This constant is an array of ids to follow to get to the icons.
  ROOT_TRAVERSE_IDS.forEach(
    (id) => (parentNode = parentNode.children.find((a) => a.id === id)),
  );
  const exportIdsToMetadata = {};
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
        exportIdsToMetadata[icon.id] = {
          component:
            "Icon" +
            component.name
              .split(/[^a-zA-Z0-9]+/)
              .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
              .join(""),
          figmaNodeId: component.id,
          hasSizeVariants: component.type === "COMPONENT_SET",
        };
      }
    });
  }
  const nodeIds = Object.keys(exportIdsToMetadata);
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
          exportIdsToMetadata[nodeId],
        );
      }
    }),
  );

  if (result.length !== nodeIds.length) {
    throw new Error(
      `Failed to generate ${nodeIds.length - result.length} icon(s)`,
    );
  }

  /**
   * Generate the React source for one icon.
   * @param {string} nodeId
   */
  async function processNodeId(nodeId) {
    // Fetch the S3 url
    const fileResponse = await fetch(images[nodeId], { method: "GET" });
    // Get the raw SVG string from the response
    const svg = await fileResponse.text();
    const { component, figmaNodeId, hasSizeVariants } =
      exportIdsToMetadata[nodeId];
    // Building out an svg React component string...
    const svgString = [
      'import { IconProps, Icon } from "primitives";',
      `export const ${component} = (props: IconProps) => (`,
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
    result.push({
      component,
      figmaNodeId,
      ...(hasSizeVariants ? { hasSizeVariants: true } : {}),
      reactSource: svgString.join("\n"),
    });
  }

  return result;
}
