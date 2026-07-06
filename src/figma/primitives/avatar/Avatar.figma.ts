// url=<FIGMA_AVATARS_AVATAR>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Avatar/Avatar.tsx
// component=Avatar

import figma from "figma"

const instance = figma.selectedInstance
const square = instance.getEnum("Shape", { Square: true })
const size = instance.getEnum("Size", { Large: "large", Small: "small" })
const initials = instance.getEnum("Type", { Initial: instance.getString("Initials") })
const src = instance.getEnum("Type", { Image: true })

export default {
  id: "Avatar",
  imports: [
    'import { Avatar } from "primitives";',
    'import { placeholder } from "images";',
  ],
  example: figma.code`<Avatar${square ? " square" : ""}${initials ? ` initials="${initials}"` : ""}${size ? ` size="${size}"` : ""}${src ? " src={placeholder}" : ""}/>`,
  metadata: { nestable: true },
}
