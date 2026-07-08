// url=<FIGMA_MENU_MENU>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Menu/Menu.tsx
// component=Menu

import figma from "figma"

const children = figma.properties.children([
  "Menu Header",
  "Menu Separator",
  "Menu Section",
  "Menu Item",
])

export default {
  id: "Menu",
  imports: ['import { Menu } from "primitives";'],
  example: figma.code`<Menu>${children}</Menu>`,
  metadata: { nestable: true },
}
