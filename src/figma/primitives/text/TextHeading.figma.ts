// url=<FIGMA_TEXT_TEXT_HEADING>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Text/Text.tsx
// component=TextHeading

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextHeading",
  imports: ['import { TextHeading } from "primitives";'],
  example: figma.code`<TextHeading>${text}</TextHeading>`,
  metadata: { nestable: true },
}
