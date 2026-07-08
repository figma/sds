// url=<FIGMA_TEXT_TEXT_SMALL>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Text/Text.tsx
// component=TextSmall

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextSmall",
  imports: ['import { TextSmall } from "primitives";'],
  example: figma.code`<TextSmall>${text}</TextSmall>`,
  metadata: { nestable: true },
}
