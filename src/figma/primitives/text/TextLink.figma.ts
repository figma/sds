// url=<FIGMA_TEXT_TEXT_LINK>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Text/Text.tsx
// component=TextLink

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextLink",
  imports: ['import { TextLink } from "primitives";'],
  example: figma.code`<TextLink href="#">${text}</TextLink>`,
  metadata: { nestable: true },
}
