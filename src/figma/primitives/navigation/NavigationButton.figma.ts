// url=<FIGMA_NAVIGATION_NAVIGATION_BUTTON>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Navigation/Navigation.tsx
// component=NavigationButton

import figma from "figma"

const label = figma.selectedInstance.getString("Label")
const icon = figma.selectedInstance.getBoolean("Has Icon", {
  true: figma.selectedInstance.getInstanceSwap("Icon")?.executeTemplate()
    .example,
  false: undefined,
})
const isSelected = figma.selectedInstance.getEnum("State", {
  Active: true,
  Default: undefined,
  Hover: undefined,
})

export default {
  id: "NavigationButton",
  imports: ['import { NavigationButton } from "primitives";'],
  example: figma.code`<NavigationButton${figma.helpers.react.renderProp(
    "icon",
    icon,
  )}${isSelected ? " isSelected" : ""}>${label}</NavigationButton>`,
  metadata: { nestable: true },
}
