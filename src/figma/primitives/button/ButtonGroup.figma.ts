// url=<FIGMA_BUTTONS_BUTTON_GROUP>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Button/Button.tsx
// component=ButtonGroup

import figma from "figma";
const instance = figma.selectedInstance;

const align = instance.getEnum("Align", {
  Center: "center",
  End: "end",
  Justify: "justify",
  Stack: "stack",
});
const children = figma.properties.children(["Button"]);

export default {
  id: "ButtonGroup",
  imports: ['import { ButtonGroup } from "primitives";'],
  example: figma.code`<ButtonGroup${align ? ` align="${align}"` : ""}>${children}</ButtonGroup>`,
  metadata: { nestable: true },
};
