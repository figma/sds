// url=<FIGMA_TEXT_TEXT_CONTENT_TITLE>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Text/Text.tsx
// component=TextContentTitle

import figma from "figma"

const align = figma.selectedInstance.getEnum("Align", {
  Center: "center",
})
const title = figma.selectedInstance.getString("Title")
const subtitle = figma.selectedInstance.getString("Subtitle")

export default {
  id: "TextContentTitle",
  imports: ['import { TextContentTitle } from "primitives";'],
  example: figma.code`<TextContentTitle${align ? ` align="${align}"` : ""}${figma.helpers.react.renderProp(
    "title",
    title,
  )}${figma.helpers.react.renderProp("subtitle", subtitle)}/>`,
  metadata: { nestable: true },
}
