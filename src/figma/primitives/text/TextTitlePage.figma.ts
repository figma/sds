// url=<FIGMA_TEXT_TEXT_TITLE_PAGE>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Text/Text.tsx
// component=TextTitlePage

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextTitlePage",
  imports: ['import { TextTitlePage } from "primitives";'],
  example: figma.code`<TextTitlePage>${text}</TextTitlePage>`,
  metadata: { nestable: true },
}
