// url=<FIGMA_NAVIGATION_NAVIGATION_BUTTON>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Navigation/Navigation.tsx
// component=NavigationButton

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;
const label = instance.getString("Label");
const icon = instance.getBoolean("Has Icon", {
  true: instance.getInstanceSwap("Icon")?.executeTemplate().example,
  false: undefined,
});
const isSelected = instance.getEnum("State", {
  Active: true,
  Default: undefined,
  Hover: undefined,
});

export default {
  id: "NavigationButton",
  imports: ['import { NavigationButton } from "primitives";'],
  example: figma.code`<NavigationButton
      ${rp("icon", icon)}
      ${rp("isSelected", isSelected)}
    >
      ${label}
    </NavigationButton>`,
  metadata: { nestable: true },
};
