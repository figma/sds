// url=<FIGMA_AVATARS_AVATAR_GROUP>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Avatar/Avatar.tsx
// component=AvatarGroup

import figma from "figma"

const instance = figma.selectedInstance
const spacing = instance.getEnum("Spacing", {
  Overlap: "negative-200",
  Spaced: "100",
})
const children = figma.properties.children(["Avatar"])

export default {
  id: "AvatarGroup",
  imports: ['import { AvatarGroup } from "primitives";'],
  example: figma.code`<AvatarGroup${spacing ? ` spacing="${spacing}"` : ""} max={3}>
      ${children}
    </AvatarGroup>`,
  metadata: { nestable: true },
}
