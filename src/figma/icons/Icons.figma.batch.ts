import figma from "figma";

const component = figma.batch.component;
const size = figma.batch.hasSizeVariants
  ? figma.selectedInstance.getEnum("Size", {
      "20": "20",
      "24": "24",
      "32": "32",
      "40": "40",
      "48": "48",
    })
  : undefined;

export default {
  id: component,
  imports: [`import { ${component} } from "icons";`],
  example: figma.code`<${component}${size ? ` size="${size}"` : ""} />`,
  metadata: { nestable: true },
};
