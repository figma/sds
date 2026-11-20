/**
 * Fetches Figma variables and styles via the REST API and writes them to
 * tokens/tokens.json and tokens/styles.json.
 *
 * CSS generation lives in Style Dictionary (style-dictionary.config.mjs).
 * `npm run script:tokens:rest` runs this script followed by `npm run tokens:build`.
 */
import fs from "fs";
import { getFileStyles, getFileVariables } from "./fromFigma.mjs";

const FILE_KEY = process.env.FIGMA_FILE_KEY;
const TOKENS_DIR = "../../tokens";
// Extension namespace for the w3c token file
const NAMESPACE = "com.figma.sds";

initialize();

async function initialize() {
  const stylesJSON = await getFileStyles(FILE_KEY);
  fs.writeFileSync(
    `${TOKENS_DIR}/styles.json`,
    JSON.stringify(stylesJSON, null, 2),
  );
  const tokensJSON = await getFileVariables(FILE_KEY, NAMESPACE);
  fs.writeFileSync(
    `${TOKENS_DIR}/tokens.json`,
    JSON.stringify(tokensJSON, null, 2),
  );
  console.log("Wrote tokens/tokens.json and tokens/styles.json");
}
