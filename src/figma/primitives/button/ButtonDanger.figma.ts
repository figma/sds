// url=<FIGMA_BUTTONS_BUTTON_DANGER>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Button/Button.tsx
// component=Button

import figma from "figma";

const instance = figma.selectedInstance;

const variant = instance.getEnum("Variant", {
  Subtle: "danger-subtle",
});
const label = instance.getString("Label");
const iconStartSwap = instance.getInstanceSwap("Icon Start");
const iconStart = instance.getBoolean("Has Icon Start", {
  true: iconStartSwap?.executeTemplate().example,
});
const iconEndSwap = instance.getInstanceSwap("Icon End");
const iconEnd = instance.getBoolean("Has Icon End", {
  true: iconEndSwap?.executeTemplate().example,
});
const size = instance.getEnum("Size", {
  Small: "small",
});
const isDisabled = instance.getEnum("State", {
  Disabled: true,
});

export default {
  id: "Button",
  imports: ['import { ButtonDanger } from "primitives";'],
  example: figma.code`<ButtonDanger onPress={() => { }}${variant ? ` variant="${variant}"` : ""}${size ? ` size="${size}"` : ""}${isDisabled ? " isDisabled" : ""}>
      ${iconStart}
      ${label}
      ${iconEnd}
    </ButtonDanger>`,
  metadata: { nestable: true },
};
