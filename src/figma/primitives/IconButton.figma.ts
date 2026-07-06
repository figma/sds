// url=<FIGMA_BUTTONS_ICON_BUTTON>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/IconButton/IconButton.tsx
// component=IconButton

import figma from "figma";

const instance = figma.selectedInstance;
const variant = instance.getEnum("Variant", {
  Primary: "primary",
  Neutral: "neutral",
  Subtle: "subtle",
});
const icon = instance.getInstanceSwap("Icon")?.executeTemplate().example;
const isDisabled = instance.getEnum("State", {
  Disabled: true,
});
const size = instance.getEnum("Size", {
  Small: "small",
});

export default {
  id: "IconButton",
  imports: ['import { IconButton } from "primitives";'],
  example: figma.code`<IconButton aria-label="Write a nice description of the action." onPress={() => { }}${variant ? ` variant="${variant}"` : ""}${size ? ` size="${size}"` : ""}${isDisabled ? " isDisabled" : ""}>
      ${icon}
    </IconButton>`,
  metadata: { nestable: true },
};
