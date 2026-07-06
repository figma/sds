// url=<FIGMA_CARDS_CARD>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Cards/Cards.tsx
// component=Card

import figma from "figma"

const asset = figma.selectedInstance.getEnum("Asset Type", {
  Image: figma.helpers.react.jsxElement(
    '<Image alt="Always use alt text" aspectRatio="1-1" size="small" />',
  ),
  Icon: figma.selectedInstance.getInstanceSwap("Icon")?.executeTemplate()
    .example,
})
const heading = figma.selectedInstance.getString("Heading")
const body = figma.selectedInstance.getString("Body")
const direction = figma.selectedInstance.getEnum("Direction", {
  Horizontal: "horizontal",
  Vertical: "vertical",
})
const actions = figma.properties.children(["Button Group"])
const variant = figma.selectedInstance.getEnum("Variant", {
  Stroke: "stroke",
})

export default {
  id: "Card",
  imports: [
    'import { Card } from "compositions";',
    'import { Image, Text, TextHeading } from "primitives";',
  ],
  example: figma.code`<Card${figma.helpers.react.renderProp(
    "asset",
    asset,
  )}${figma.helpers.react.renderProp(
    "direction",
    direction,
  )}${figma.helpers.react.renderProp("variant", variant)}>
      <TextHeading>${figma.helpers.react.renderChildren(heading)}</TextHeading>
      <Text>${figma.helpers.react.renderChildren(body)}</Text>
      ${figma.helpers.react.renderChildren(actions)}
    </Card>`,
  metadata: { nestable: true },
}
