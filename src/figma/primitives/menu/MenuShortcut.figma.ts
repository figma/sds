// url=<FIGMA_MENU_MENU_SHORTCUT>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Menu/Menu.tsx
// component=MenuShortcut

import figma from "figma"

const shortcut = figma.selectedInstance.getString("Shortcut")

export default {
  id: "MenuShortcut",
  imports: ['import { MenuShortcut } from "primitives";'],
  example: figma.code`<MenuShortcut>${shortcut}</MenuShortcut>`,
  metadata: { nestable: true },
}
