import * as figmaJSON from "../../figma.config.json" with { type: "json" };
import { devResources } from "./devResources.mjs";

// run with node --env-file=.env app.mjs
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const FILE_KEY = process.env.FIGMA_FILE_KEY;
const URL_BASE = "https://api.figma.com/v1/files";
const DEV_RESOURCES_URL_BASE = "https://api.figma.com/v1/dev_resources";
// To avoid rate limiting, how many to delete at a time (new urls replace old ones)
const BATCH_DELETE_SIZE = 10;
// To avoid rate limiting, how long to wait between batch cycles (in ms).
const BATCH_SLEEP_MS = 2000;

/**
 * Grabbing component urls from the existing Code Connect configuration to get the component node ids.
 * This assumes every component we manage dev resources for will exist in our Code Connect config.
 * If this becomes untrue, we can store the node ids differently.
 * This approach reuses the existing configuration to reduce complexity.
 */
const figmaUrls = figmaJSON.default.codeConnect.documentUrlSubstitutions;

/**
 * Creating a map of constant keys to node ids. Node ids are being parsed from urls in figma.config.json
 * Keys in ./devResources.mjs should have corresponding url described in /figma.config.json
 */
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

/**
 * Running the process
 */
run();

/**
 * Gets all existing dev resources for the file and loads configuration from devResources.mjs.
 *   Detects what should be deleted, what should change, and what should be created.
 *   IMPORTANT: Does not use update endpoint, only deletes and creates.
 * @returns {Promise<void>}
 */
async function run() {
  // All existing dev resources in the file (including the ones we aren't tracking) keyed by node id.
  const existingDevResources = (await getDevResources()).reduce(
    (into, curr) => {
      into[curr.node_id] = into[curr.node_id] || [];
      into[curr.node_id].push(curr);
      return into;
    },
    {},
  );

  const creates = [];
  const deletes = [];
  let deleteCount = 0;
  let createCount = 0;
  let possibleCreateCount = 0;
  // For each item in our dev resource definitions file
  for (let key in devResources) {
    // Transform the array of dev resources we want to see into an object keyed by url
    const resources = devResources[key].reduce((into, resource) => {
      possibleCreateCount++;
      into[resource.url] = {
        ...resource,
        node_id: urlKeyToNodeId[key],
        file_key: FILE_KEY,
      };
      return into;
    }, {});
    // Find existing resources for this node (from batch request)
    const existing = existingDevResources[urlKeyToNodeId[key]];
    if (existing) {
      // For each existing resource
      for (let item of existing) {
        const found = resources[item.url];
        if (found && found.name === item.name) {
          // If it matches, remove it from the list of things we're creating
          delete resources[item.url];
        } else {
          // It doesn't match, queue it for deletion
          deleteCount++;
          deletes.push(item.id);
        }
      }
    }
    // Add any remaining resources to list of creates
    for (let url in resources) {
      createCount++;
      creates.push(resources[url]);
    }
  }
  // Await deletion (batches of requests). DELETE is per resource, no batch endpoint. :/
  await deleteDevResources(deletes);
  // Await creation (single request). POST cvasn be many resources at once! :)
  await createDevResources(creates);
  // Log the report
  console.log(
    `Possible: ${possibleCreateCount} • New: ${createCount} • Deleted: ${deleteCount}`,
  );
  // We're done!
  return;
}

/**
 * Creates multiple dev resources in a single POST request.
 * @link https://www.figma.com/developers/api#post-dev-resources-endpoint
 * @param {Array<{name: string, url: string, file_key: string, node_id: string}>} dev_resources - DevResourcesCreate[] payload
 * @returns {Promise<any>}
 */
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

/**
 * Async sleep function. Waits n milliseconds to resolve.
 * @param {number} ms - Milliseconds to sleep
 * @returns {Promise<void>}
 */
function sleep(ms = 1000) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Deleting multiple dev resources in a batched operation.
 * To avoid rate limiting, we do this in batches with a delay between requests.
 * This is only an issue when you are replacing a lot of dev resources.
 * One scenario this occurs is when you are changing the storybook root url.
 * Change the global batch constants at the top of the file.
 * @param {string[]} devResourceIds - An array of devResource id's to delete
 * @returns {Promise<void>}
 */
async function deleteDevResources(devResourceIds) {
  const batchSize = BATCH_DELETE_SIZE;
  const totalSize = devResourceIds.length;

  async function loop() {
    try {
      const ids = devResourceIds.splice(0, batchSize);
      const remaining = devResourceIds.length;
      console.log(
        `Deleting ${ids.length} out of ${remaining} (${totalSize} total)`,
      );
      await Promise.all(ids.map(deleteDevResource));
      if (remaining) {
        console.log(`Sleeping...`);
        await sleep(BATCH_SLEEP_MS);
        return loop();
      } else {
        return;
      }
    } catch (e) {
      throw e;
    }
  }

  try {
    await loop();
  } catch (e) {
    throw e;
  }
}

/**
 * Deletes a dev resource by id
 * @link https://www.figma.com/developers/api#delete-dev-resources-endpoint
 * @param {string} id dev resource id to delete
 * @returns {Promise<any>}
 */
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

/**
 * Get dev resources for the specified file.
 * File key is configured in the cosntant at the top of the file.
 * @link https://www.figma.com/developers/api#get-dev-resources-endpoint
 * @returns {Array<{id: string, name: string, url: string, file_key: string, node_id: string}>}
 */
async function getDevResources() {
  try {
    const fileResponse = await fetch(`${URL_BASE}/${FILE_KEY}/dev_resources`, {
      method: "GET",
      headers: { "X-FIGMA-TOKEN": TOKEN },
    });
    const data = await fileResponse.json();
    return data.dev_resources;
  } catch (e) {
    throw e;
  }
}
