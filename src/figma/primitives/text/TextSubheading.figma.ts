// url=<FIGMA_TEXT_TEXT_SUBHEADING>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Text/Text.tsx
// component=TextSubheading

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextSubheading",
  imports: ['import { TextSubheading } from "primitives";'],
  example: figma.code`<TextSubheading>${text}</TextSubheading>`,
  metadata: { nestable: true },
}
