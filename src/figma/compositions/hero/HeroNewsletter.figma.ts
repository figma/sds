// url=<FIGMA_SECTIONS_HERO_NEWSLETTER>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Sections/Heroes.tsx
// component=Hero

import figma from "figma"

const children = figma.properties.children([
  "Text Content Title",
  "Form Newsletter",
])

export default {
  id: "Hero",
  imports: ['import { Hero } from "compositions";'],
  example: figma.code`<Hero variant="subtle">${children}</Hero>`,
  metadata: { nestable: true },
}
