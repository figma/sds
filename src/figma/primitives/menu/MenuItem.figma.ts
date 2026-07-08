// url=<FIGMA_MENU_MENU_ITEM>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Menu/Menu.tsx
// component=MenuItem

import figma from "figma"

const icon = figma.selectedInstance.getBoolean("Has Icon", {
  true: figma.selectedInstance.getInstanceSwap("Icon")?.executeTemplate()
    .example,
  false: undefined,
})
const description = figma.selectedInstance.getBoolean("Has Description", {
  true: figma.helpers.react.jsxElement(
    '<MenuDescription>{figma.string("Description")}</MenuDescription>',
  ),
  false: undefined,
})
const shortcut = figma.selectedInstance.getBoolean("Has Shortcut", {
  true: figma.properties.children(["Menu Shortcut"]),
  false: undefined,
})
const label = figma.selectedInstance.getString("Label")

export default {
  id: "MenuItem",
  imports: [
    'import { MenuDescription, MenuItem, MenuLabel } from "primitives";',
  ],
  example: figma.code`<MenuItem>
      ${figma.helpers.react.renderChildren(icon)}
      <MenuLabel>${label}</MenuLabel>
      ${figma.helpers.react.renderChildren(shortcut)}
      ${figma.helpers.react.renderChildren(description)}
    </MenuItem>`,
  metadata: { nestable: true },
}
