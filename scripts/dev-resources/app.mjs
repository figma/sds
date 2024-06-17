import * as figmaJSON from "../../figma.config.json" with { type: "json" };

// run with node --env-file=.env app.mjs
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;
const URL_BASE = "https://api.figma.com/v1/files";
const DEV_RESOURCES_URL_BASE = "https://api.figma.com/v1/dev_resources";
const FILE_KEY = "J0KLPKXiONDRssXD1AX9Oi";

const figmaUrls = figmaJSON.default.codeConnect.documentUrlSubstitutions;

const STORYBOOK_URL_BASE =
  "https://studious-happiness-n8g71ww.pages.github.io/storybook/";

const storybookPaths = {
  "<FIGMA_URL_ACCORDION>":
    "?path=/story/sds-primitives-accordion--accordion-story",
  "<FIGMA_URL_ACCORDION_ITEM>":
    "?path=/story/sds-primitives-accordion--accordion-item-story",
  "<FIGMA_URL_AVATAR>": "?path=/story/sds-primitives-",
  "<FIGMA_URL_AVATAR_BLOCK>": "",
  "<FIGMA_URL_AVATAR_GROUP>": "",
  "<FIGMA_URL_BUTTON>": "",
  "<FIGMA_URL_BUTTON_DANGER>": "",
  "<FIGMA_URL_BUTTON_GROUP>": "",
  "<FIGMA_URL_CARD>": "",
  "<FIGMA_URL_CHECKBOX>": "",
  "<FIGMA_URL_CHECKBOX_FIELD>": "",
  "<FIGMA_URL_CHECKBOX_GROUP>": "",
  "<FIGMA_URL_DIALOG>": "",
  "<FIGMA_URL_DESCRIPTION>": "",
  "<FIGMA_URL_LABEL>": "",
  "<FIGMA_URL_LEGEND>": "",
  "<FIGMA_URL_ERROR_MESSAGE>": "",
  "<FIGMA_URL_FIELD_GROUP>": "",
  "<FIGMA_URL_FIELDSET>": "",
  "<FIGMA_URL_FOOTER>": "",
  "<FIGMA_URL_FORM_LOG_IN>": "",
  "<FIGMA_URL_FORM_CONTACT>": "",
  "<FIGMA_URL_FORM_REGISTER>": "",
  "<FIGMA_URL_FORM_NEWSLETTER>": "",
  "<FIGMA_URL_FORM_FORGOT_PASSWORD>": "",
  "<FIGMA_URL_FORM_SHIPPING>": "",
  "<FIGMA_URL_HEADER>": "",
  "<FIGMA_URL_HEADER_AUTH>": "",
  "<FIGMA_URL_ICON_BUTTON>": "",
  "<FIGMA_URL_INPUT>": "",
  "<FIGMA_URL_INPUT_FIELD>": "",
  "<FIGMA_URL_LOGO>": "",
  "<FIGMA_URL_MENU_MENU>": "",
  "<FIGMA_URL_MENU_HEADING>": "",
  "<FIGMA_URL_MENU_SHORTCUT>": "",
  "<FIGMA_URL_MENU_ITEM>": "",
  "<FIGMA_URL_MENU_HEADER>": "",
  "<FIGMA_URL_MENU_SEPARATOR>": "",
  "<FIGMA_URL_NAVIGATION>": "",
  "<FIGMA_URL_NAVIGATION_ITEM>": "",
  "<FIGMA_URL_NOTIFICATION>": "",
  "<FIGMA_URL_PAGINATION>": "",
  "<FIGMA_URL_RADIO>": "",
  "<FIGMA_URL_RADIOFIELD>": "",
  "<FIGMA_URL_RADIOGROUP>": "",
  "<FIGMA_URL_SEARCH>": "",
  "<FIGMA_URL_SELECT>": "",
  "<FIGMA_URL_SELECT_FIELD>": "",
  "<FIGMA_URL_SLIDER>": "",
  "<FIGMA_URL_SLIDER_FIELD>": "",
  "<FIGMA_URL_SWITCH_GROUP>": "",
  "<FIGMA_URL_SWITCH_FIELD>": "",
  "<FIGMA_URL_SWITCH>": "",
  "<FIGMA_URL_TAB>": "",
  "<FIGMA_URL_TABS>": "",
  "<FIGMA_URL_TAG>": "",
  "<FIGMA_URL_TAG_TOGGLE>": "",
  "<FIGMA_URL_TAG_TOGGLE_GROUP>": "",
  "<FIGMA_URL_TEXT_AREA>": "",
  "<FIGMA_URL_TEXT_AREA_FIELD>": "",
  "<FIGMA_URL_TOOLTIP>": "",
  "<FIGMA_URL_CARDS_PRODUCT_INFO_CARD>":
    "?path=/story/sds-compositions-cards--block-product-info-card",
  "<FIGMA_URL_CARDS_PRICING_CARD>":
    "?path=/story/sds-compositions-cards--block-pricing-card",
  "<FIGMA_URL_CARDS_TESTIMONIAL_CARD>":
    "?path=/story/sds-compositions-cards--block-testimonial-card",
  "<FIGMA_URL_CARDS_STATS_CARD>":
    "?path=/story/sds-compositions-cards--block-stats-card",
  "<FIGMA_URL_CARDS_REVIEW_CARD>":
    "?path=/story/sds-compositions-cards--block-review-card",
};

const devResourceUrls = {
  "<FIGMA_URL_ACCORDION>": [{ name: "Storybook" }],
  "<FIGMA_URL_ACCORDION_ITEM>": [{ name: "Storybook" }],
  "<FIGMA_URL_CARDS_PRODUCT_INFO_CARD>": [{ name: "Storybook" }],
  "<FIGMA_URL_CARDS_PRICING_CARD>": [{ name: "Storybook" }],
  "<FIGMA_URL_CARDS_TESTIMONIAL_CARD>": [{ name: "Storybook" }],
  "<FIGMA_URL_CARDS_STATS_CARD>": [{ name: "Storybook" }],
  "<FIGMA_URL_CARDS_REVIEW_CARD>": [{ name: "Storybook" }],
};

const urlKeyToNodeId = {};
for (let key in devResourceUrls) {
  devResourceUrls[key].forEach((item) => {
    if (item.name === "Storybook") {
      item.url = `${STORYBOOK_URL_BASE}${storybookPaths[key]}`;
    }
  });

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
  const devResources = (await getDevResources()).reduce((into, curr) => {
    into[curr.node_id] = into[curr.node_id] || [];
    into[curr.node_id].push(curr);
    return into;
  }, {});

  const creates = [];
  let deleteCount = 0;
  let createCount = 0;
  let possibleCreateCount = 0;
  for (let key in devResourceUrls) {
    const resources = devResourceUrls[key].reduce((into, resource) => {
      possibleCreateCount++;
      into[resource.url] = {
        ...resource,
        node_id: urlKeyToNodeId[key],
        file_key: FILE_KEY,
      };
      return into;
    }, {});
    const existing = devResources[urlKeyToNodeId[key]];
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
