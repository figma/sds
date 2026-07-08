// url=<FIGMA_MENU_MENU_HEADER>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Menu/Menu.tsx
// component=MenuHeader

import figma from "figma"

const header = figma.properties.children(["Text Strong"])
const subhead = figma.properties.children(["Text Small"])

export default {
  id: "MenuHeader",
  imports: ['import { MenuHeader } from "primitives";'],
  example: figma.code`<MenuHeader>
      ${subhead}
      ${header}
    </MenuHeader>`,
  metadata: { nestable: true },
}
