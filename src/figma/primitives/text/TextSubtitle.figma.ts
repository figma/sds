// url=<FIGMA_TEXT_TEXT_SUBTITLE>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Text/Text.tsx
// component=TextSubtitle

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextSubtitle",
  imports: ['import { TextSubtitle } from "primitives";'],
  example: figma.code`<TextSubtitle>${text}</TextSubtitle>`,
  metadata: { nestable: true },
}
