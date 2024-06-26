import * as figmaJSON from "../../figma.config.json" with { type: "json" };
import { devResources } from "./devResources.mjs";

// run with node --env-file=.env app.mjs
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;
const URL_BASE = "https://api.figma.com/v1/files";
const DEV_RESOURCES_URL_BASE = "https://api.figma.com/v1/dev_resources";

const figmaUrls = figmaJSON.default.codeConnect.documentUrlSubstitutions;

const urlKeyToNodeId = {};
for (let key in devResources) {
  if (figmaUrls[key] && figmaUrls[key].includes(FILE_KEY)) {
    urlKeyToNodeId[key] = new URLSearchParams(figmaUrls[key].split("?")[1])
      .get("node-id")
      .replace("-", ":");
  } else {
    urlKeyToNodeId[key] = "UNKNOWN or DIFFERENT_FILE";
  }
}

run();

async function run() {
  const existingDevResources = (await getDevResources()).reduce(
    (into, curr) => {
      into[curr.node_id] = into[curr.node_id] || [];
      into[curr.node_id].push(curr);
      return into;
    },
    {},
  );

  const creates = [];
  let deleteCount = 0;
  let createCount = 0;
  let possibleCreateCount = 0;
  for (let key in devResources) {
    const resources = devResources[key].reduce((into, resource) => {
      possibleCreateCount++;
      into[resource.url] = {
        ...resource,
        node_id: urlKeyToNodeId[key],
        file_key: FILE_KEY,
      };
      return into;
    }, {});
    const existing = existingDevResources[urlKeyToNodeId[key]];
    if (existing) {
      for (let item of existing) {
        const found = resources[item.url];
        if (found && found.name === item.name) {
          delete resources[item.url];
        } else {
          deleteCount++;
          await deleteDevResource(item.id);
        }
      }
    }
    for (let url in resources) {
      createCount++;
      creates.push(resources[url]);
    }
  }
  await createDevResources(creates);
  console.log(
    `Possible: ${possibleCreateCount} • New: ${createCount} • Deleted: ${deleteCount}`,
  );
}

async function createDevResources(dev_resources) {
  try {
    const fileResponse = await fetch(DEV_RESOURCES_URL_BASE, {
      method: "POST",
      headers: { "X-FIGMA-TOKEN": TOKEN, "Content-Type": "application/json" },
      body: JSON.stringify({ dev_resources }),
    });
    return await fileResponse.json();
  } catch (e) {
    throw e;
  }
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
