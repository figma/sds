// url=<FIGMA_TEXT_TEXT>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Text/Text.tsx
// component=Text

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "Text",
  imports: ['import { Text } from "primitives";'],
  example: figma.code`<Text>${text}</Text>`,
  metadata: { nestable: true },
}
