// url=<FIGMA_ACCORDION_ACCORDION>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Accordion/Accordion.tsx
// component=Accordion

import figma from "figma";
const children = figma.properties.children(["Accordion Item"]);

export default {
  id: "Accordion",
  imports: ['import { Accordion } from "primitives";'],
  example: figma.code`<Accordion>${children}</Accordion>`,
  metadata: { nestable: true },
};
