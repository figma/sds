// url=<FIGMA_TEXT_TEXT_TITLE_HERO>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Text/Text.tsx
// component=TextTitleHero

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextTitleHero",
  imports: ['import { TextTitleHero } from "primitives";'],
  example: figma.code`<TextTitleHero>${text}</TextTitleHero>`,
  metadata: { nestable: true },
}
