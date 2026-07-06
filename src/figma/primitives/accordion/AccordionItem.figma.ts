// url=<FIGMA_ACCORDION_ACCORDION_ITEM>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Accordion/Accordion.tsx
// component=AccordionItem

import figma from "figma";
const title = figma.selectedInstance.getString("Title");
const children = figma.selectedInstance.getString("Content");

export default {
  id: "AccordionItem",
  imports: ['import { AccordionItem } from "primitives";'],
  example: figma.code`<AccordionItem title="${title}" children="${children}"/>`,
  metadata: { nestable: true },
};
