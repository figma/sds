// url=<FIGMA_INPUTS_CHECKBOX_GROUP>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Checkbox/Checkbox.tsx
// component=CheckboxGroup

import figma from "figma";

const children = figma.properties.children(["Checkbox Field"]);

export default {
  id: "CheckboxGroup",
  imports: ['import { CheckboxGroup } from "primitives";'],
  example: figma.code`<CheckboxGroup>${children}</CheckboxGroup>`,
  metadata: { nestable: true },
};
