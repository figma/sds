// url=<FIGMA_INPUTS_RADIO_GROUP>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Radio/Radio.tsx
// component=RadioGroup

import figma from "figma";

const children = figma.properties.children(["Radio Field"]);

export default {
  id: "RadioGroup",
  imports: ['import { RadioGroup } from "primitives";'],
  example: figma.code`<RadioGroup>${children}</RadioGroup>`,
  metadata: { nestable: true },
};
