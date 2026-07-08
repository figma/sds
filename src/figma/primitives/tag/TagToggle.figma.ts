// url=<FIGMA_TAGS_TAG_TOGGLE>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Tag/Tag.tsx
// component=TagToggle

import figma from "figma"

const label = figma.selectedInstance.getString("Label")
const iconStart = figma.selectedInstance
  .getInstanceSwap("Icon")
  ?.executeTemplate().example

export default {
  id: "TagToggle",
  imports: ['import { TagToggle } from "primitives";'],
  example: figma.code`<TagToggle${figma.helpers.react.renderProp("id", label)}${figma.helpers.react.renderProp("iconStart", iconStart)}>
      ${label}
    </TagToggle>`,
  metadata: { nestable: true },
}
