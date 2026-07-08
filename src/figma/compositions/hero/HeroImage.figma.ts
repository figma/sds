// url=<FIGMA_SECTIONS_HERO_IMAGE>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Sections/Heroes.tsx
// component=Hero

import figma from "figma"

const children = figma.properties.children([
  "Text Content Title",
  "Button Group",
])

export default {
  id: "Hero",
  imports: [
    'import { Hero } from "compositions";',
    'import { placeholder } from "images";',
  ],
  example: figma.code`<Hero variant="image" src={placeholder}>
      ${children}
    </Hero>`,
  metadata: { nestable: true },
}
