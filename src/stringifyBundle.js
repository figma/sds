import fs from 'fs';

const bundlePath = './dist/figmaCodeLayers.bundle.dev.js';
const bundleContent = fs.readFileSync(bundlePath, 'utf8');
const stringContent = JSON.stringify(bundleContent)
fs.writeFileSync("js.txt", stringContent);