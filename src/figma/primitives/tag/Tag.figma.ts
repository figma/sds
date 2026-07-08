// url=<FIGMA_TAGS_TAG>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Tag/Tag.tsx
// component=Tag

import figma from "figma"

const onRemove = figma.selectedInstance.getBoolean("Removable", {
  true: figma.helpers.react.function("() => {}"),
  false: undefined,
})
const label = figma.selectedInstance.getString("Label")
const variant = figma.selectedInstance.getEnum("Variant", {
  Secondary: "secondary",
})
const scheme = figma.selectedInstance.getEnum("Scheme", {
  Danger: "danger",
  Positive: "positive",
  Warning: "warning",
  Neutral: "neutral",
})

export default {
  id: "Tag",
  imports: ['import { Tag } from "primitives";'],
  example: figma.code`<Tag${onRemove ? " onRemove={() => {}}" : ""}${variant ? ` variant="${variant}"` : ""}${scheme ? ` scheme="${scheme}"` : ""}>${label}</Tag>`,
  metadata: { nestable: true },
}
