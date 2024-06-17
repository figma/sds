import * as figmaJSON from "../../figma.config.json" with { type: "json" };

// run with node --env-file=.env app.mjs
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const URL_BASE = "https://api.figma.com/v1/files";
const FILE_KEY = "J0KLPKXiONDRssXD1AX9Oi";

const urls = figmaJSON.default.codeConnect.documentUrlSubstitutions;

const resourceMap = {
  "<FIGMA_URL_ACCORDION>": ["https://figma.github.io/sds/storybook"],
  "<FIGMA_URL_ACCORDION_ITEM>": ["https://figma.github.io/sds/storybook"],
};

run();

async function run() {
  const devResources = await getDevResources();
  console.log(devResources);
  // await Promise.all(devResources.map(({ id }) => deleteDevResource(id)));
  console.log("DONE!");
}

async function deleteDevResource(id) {
  try {
    const fileResponse = await fetch(
      `${URL_BASE}/${FILE_KEY}/dev_resources/${id}`,
      {
        method: "DELETE",
        headers: { "X-FIGMA-TOKEN": TOKEN },
      },
    );
    return await fileResponse.json();
  } catch (e) {
    throw e;
  }
}
async function getDevResources() {
  try {
    const fileResponse = await fetch(`${URL_BASE}/${FILE_KEY}/dev_resources`, {
      method: "GET",
      headers: { "X-FIGMA-TOKEN": TOKEN },
    });
    const data = await fileResponse.json();
    return await fileRESTResponseToJSON(data);
  } catch (e) {
    throw e;
  }
}

async function fileRESTResponseToJSON(data) {
  return data.dev_resources;
}
// TODO: get all node ids from code connect json,
// TODO: make dev resources request to update / remove for all nodes
