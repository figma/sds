import * as figmaJSON from "../../figma.config.json" with { type: "json" };

const urls = figmaJSON.default.codeConnect.documentUrlSubstitutions;

const resourceMap = {
  "<FIGMA_URL_ACCORDION>": ["https://figma.github.io/sds/storybook"],
  "<FIGMA_URL_ACCORDION_ITEM>": ["https://figma.github.io/sds/storybook"],
};

// TODO: get all node ids from code connect json,
// TODO: make dev resources request to update / remove for all nodes
