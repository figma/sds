// url=<FIGMA_CARDS_PRODUCT_INFO_CARD>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Cards/Cards.tsx
// component=ProductInfoCard

import figma from "figma";

const instance = figma.selectedInstance;

const textLayer = instance.findInstance("Text");
const heading =
  textLayer.type !== "ERROR" ? textLayer.getString("Text") : undefined;

const priceLayer = instance.findInstance("Text Strong");
const price =
  priceLayer.type !== "ERROR" ? priceLayer.getString("Text") : undefined;

const descriptionLayer = instance.findInstance("Text Small");
const description =
  descriptionLayer.type !== "ERROR"
    ? descriptionLayer.getString("Text")
    : undefined;

export default {
  id: "ProductInfoCard",
  imports: [
    'import { ProductInfoCard } from "compositions";',
    'import { Image } from "primitives";',
    'import { placeholder } from "images";',
  ],
  example: figma.code`<ProductInfoCard asset={<Image src={placeholder} size="medium" aspectRatio="natural" alt="Always describe images"/>} rating={4.5} heading="${heading}" price="${price}" description="${description}"/>`,
  metadata: { nestable: true },
};
