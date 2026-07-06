// url=<FIGMA_CARDS_PRICING_CARD>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Cards/Cards.tsx
// component=PricingCard

import figma from "figma"

const instance = figma.selectedInstance

const headingLayer = instance.findInstance("Text Heading")
const heading = headingLayer.type !== "ERROR" ? headingLayer.getString("Text") : undefined

const buttonLayer = instance.findInstance("Button")
const action = buttonLayer.type !== "ERROR" ? {
  label: buttonLayer.getString("Label"),
  variant: buttonLayer.getEnum("Variant", {
    Primary: "primary",
    Neutral: "neutral",
    Subtle: "subtle",
  }),
  icon: buttonLayer.getInstanceSwap("Icon End")?.executeTemplate().example,
} : undefined

const priceLayer = instance.findInstance("Text Price")
const textPrice = priceLayer.type !== "ERROR" ? {
  price: priceLayer.getString("Price"),
  currency: priceLayer.getString("Currency"),
  label: priceLayer.getString("Label"),
  size: priceLayer.getEnum("Size", {
    Large: "large",
    Small: "small",
  }),
} : undefined

const list = figma.properties.children(["Text List"])
const variant = instance.getEnum("Variant", {
  Stroke: "stroke",
  Brand: "brand",
})

export default {
  id: "PricingCard",
  imports: ['import { PricingCard } from "compositions";'],
  example: figma.code`<PricingCard heading="${heading}" action="${action?.label}"${action?.icon ? ` actionIcon={${action.icon}}` : ""} actionVariant="${action?.variant}" onAction={() => { }} listSlot={${list}} interval="month" sku="example_sku" price="${textPrice?.price}" priceCurrency="${textPrice?.currency}" priceLabel="${textPrice?.label}" size="${textPrice?.size}" variant="${variant}"/>`,
  metadata: { nestable: true },
}
