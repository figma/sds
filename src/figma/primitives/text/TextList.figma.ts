// url=<FIGMA_TEXT_TEXT_LIST>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Text/Text.tsx
// component=TextList

import figma from "figma"

const children = figma.properties.children(["Text List Item"])
const title = figma.selectedInstance.getBoolean("Has Title", {
  true: figma.properties.children(["Text Strong"]),
  false: undefined,
})
const density = figma.selectedInstance.getEnum("Density", {
  Default: "default",
  Tight: "tight",
})

export default {
  id: "TextList",
  imports: ['import { TextList } from "primitives";'],
  example: figma.code`<TextList${figma.helpers.react.renderProp(
    "title",
    title,
  )} density="${density}">${children}</TextList>`,
  metadata: { nestable: true },
}
