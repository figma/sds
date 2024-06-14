import { figma } from "@figma/code-connect";
import { Image, Text, TextHeading } from "ui";
import {
  Card,
  PricingCard,
  ProductInfoCard,
  ReviewCard,
  StatsCard,
  TestimonialCard,
} from "./Cards";

figma.connect(Card, "<FIGMA_URL_CARD>", {
  props: {
    asset: figma.enum("Asset Type", {
      Image: <Image alt="Always use alt text" aspectRatio="1-1" size="small" />,
      Icon: figma.instance("Icon"),
    }),
    heading: figma.string("Heading"),
    body: figma.string("Body"),
    direction: figma.enum("Direction", {
      Horizontal: "horizontal",
      Vertical: "vertical",
    }),
    actions: figma.children("Button Group"),
    variant: figma.enum("Variant", {
      Stroke: "stroke",
      Padded: "padded",
    }),
  },
  example: ({ actions, variant, heading, body, asset, direction }) => (
    <Card variant={variant} asset={asset} direction={direction}>
      <TextHeading>{heading}</TextHeading>
      <Text>{body}</Text>
      {actions}
    </Card>
  ),
});

figma.connect(ProductInfoCard, "<FIGMA_URL_CARDS_PRODUCT_INFO_CARD>");
figma.connect(PricingCard, "<FIGMA_URL_CARDS_PRICING_CARD>");
figma.connect(TestimonialCard, "<FIGMA_URL_CARDS_TESTIMONIAL_CARD>");
figma.connect(StatsCard, "<FIGMA_URL_CARDS_STATS_CARD>");
figma.connect(ReviewCard, "<FIGMA_URL_CARDS_REVIEW_CARD>");
