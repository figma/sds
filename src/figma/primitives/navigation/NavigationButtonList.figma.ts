// url=<FIGMA_NAVIGATION_NAVIGATION_BUTTON_LIST>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Navigation/Navigation.tsx
// component=Navigation

import figma from "figma"

const children = figma.properties.children(["Navigation Button"])
const direction = figma.selectedInstance.getEnum("Direction", {
  Row: "row",
  Column: "column",
})

export default {
  id: "Navigation",
  imports: ['import { Navigation } from "primitives";'],
  example: figma.code`<Navigation direction="${direction}">${children}</Navigation>`,
  metadata: { nestable: true },
}
