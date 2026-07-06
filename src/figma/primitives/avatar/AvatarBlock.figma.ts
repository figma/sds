// url=<FIGMA_AVATARS_AVATAR_BLOCK>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Avatar/Avatar.tsx
// component=AvatarBlock

import figma from "figma"

const instance = figma.selectedInstance
const title = instance.getString("Title")
const description = instance.getString("Description")
const children = figma.properties.children(["Avatar"])

export default {
  id: "AvatarBlock",
  imports: ['import { AvatarBlock } from "primitives";'],
  example: figma.code`<AvatarBlock title="${title}" description="${description}">${children}</AvatarBlock>`,
  metadata: { nestable: true },
}
