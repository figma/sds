// url=<FIGMA_NAVIGATION_NAVIGATION_PILL>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Navigation/Navigation.tsx
// component=NavigationPill

import figma from "figma"

const label = figma.selectedInstance.getString("Label")
const isSelected = figma.selectedInstance.getEnum("State", {
  Active: true,
  Default: undefined,
  Hover: undefined,
})

export default {
  id: "NavigationPill",
  imports: ['import { NavigationPill } from "primitives";'],
  example: figma.code`<NavigationPill${isSelected ? " isSelected" : ""}>${label}</NavigationPill>`,
  metadata: { nestable: true },
}
