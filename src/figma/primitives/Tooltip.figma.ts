// url=<FIGMA_TOOLTIP_TOOLTIP>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Tooltip/Tooltip.tsx
// component=Tooltip

import figma from "figma"

const body = figma.selectedInstance.getBoolean("Has Body", {
  true: figma.helpers.react.jsxElement(
    '<TextSmall>{figma.string("Body")}</TextSmall>',
  ),
  false: undefined,
})
const title = figma.selectedInstance.getString("Title")
const placement = figma.selectedInstance.getEnum("Placement", {
  Bottom: "bottom",
  Top: "top",
  Right: "right",
  Left: "left",
})

export default {
  id: "Tooltip",
  imports: ['import { TextSmall, TextStrong, Tooltip } from "primitives";'],
  example: figma.code`<Tooltip${figma.helpers.react.renderProp(
    "placement",
    placement,
  )}>
      <TextStrong>${figma.helpers.react.renderChildren(title)}</TextStrong>
      ${figma.helpers.react.renderChildren(body)}
    </Tooltip>`,
  metadata: { nestable: true },
}
