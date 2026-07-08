// url=<FIGMA_TAGS_TAG_TOGGLE_GROUP>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Tag/Tag.tsx
// component=TagToggleGroup

import figma from "figma"

const children = figma.properties.children(["Tag Toggle"])

export default {
  id: "TagToggleGroup",
  imports: [
    'import { Label, TagToggleGroup, TagToggleList } from "primitives";',
  ],
  example: figma.code`<TagToggleGroup>
      <Label>Label this!</Label>
      <TagToggleList>${children}</TagToggleList>
    </TagToggleGroup>`,
  metadata: { nestable: true },
}
