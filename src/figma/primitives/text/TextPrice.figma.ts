// url=<FIGMA_TEXT_TEXT_PRICE>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Text/Text.tsx
// component=TextPrice

import figma from "figma"

const label = figma.selectedInstance.getString("Label")
const size = figma.selectedInstance.getEnum("Size", {
  Small: "small",
})
const currency = figma.selectedInstance.getString("Currency")
const price = figma.selectedInstance.getString("Price")

export default {
  id: "TextPrice",
  imports: ['import { TextPrice } from "primitives";'],
  example: figma.code`<TextPrice${figma.helpers.react.renderProp(
    "label",
    label,
  )}${size ? ` size="${size}"` : ""}${figma.helpers.react.renderProp(
    "currency",
    currency,
  )}${figma.helpers.react.renderProp("price", price)}/>`,
  metadata: { nestable: true },
}
