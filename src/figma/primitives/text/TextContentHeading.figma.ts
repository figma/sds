// url=<FIGMA_TEXT_TEXT_CONTENT_HEADING>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Text/Text.tsx
// component=TextContentHeading

import figma from "figma"

const align = figma.selectedInstance.getEnum("Align", {
  Center: "center",
})
const heading = figma.selectedInstance.getString("Heading")
const subheading = figma.selectedInstance.getString("Subheading")

export default {
  id: "TextContentHeading",
  imports: ['import { TextContentHeading } from "primitives";'],
  example: figma.code`<TextContentHeading${align ? ` align="${align}"` : ""}${figma.helpers.react.renderProp(
    "heading",
    heading,
  )}${figma.helpers.react.renderProp("subheading", subheading)}/>`,
  metadata: { nestable: true },
}
