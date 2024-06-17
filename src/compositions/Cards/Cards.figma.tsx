import { figma } from "@figma/code-connect";
import { ButtonProps, Image, Text, TextHeading } from "primitives";
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
  example: ({ actions, heading, body, ...props }) => (
    <Card {...props}>
      <TextHeading>{heading}</TextHeading>
      <Text>{body}</Text>
      {actions}
    </Card>
  ),
});

// TODO: CC NESTED PROPS document these
figma.connect(PricingCard, "<FIGMA_URL_CARDS_PRICING_CARD>", {
  props: {
    textHeading: figma.nestedProps("Text Heading", {
      text: figma.string("Text"),
    }),
    action: figma.nestedProps<{
      label: string;
      variant: ButtonProps["variant"];
    }>("Button", {
      label: figma.string("Label"),
      variant: figma.enum("Variant", {
        Primary: "primary",
        Neutral: "neutral",
        Subtle: "subtle",
      }),
    }),
    textPrice: figma.nestedProps("Text Price", {
      price: figma.string("Price"),
    }),
    items: figma.nestedProps("Text List Item", {
      text: figma.string("Text"),
    }),
  },
  example: ({ textHeading, textPrice, items, action, ...props }) => (
    <PricingCard
      heading={textHeading.text}
      action={action.label}
      actionVariant={action.variant}
      onAction={() => {}}
      items={[items.text]}
      price={textPrice.price}
      {...props}
    />
  ),
});
figma.connect(ProductInfoCard, "<FIGMA_URL_CARDS_PRODUCT_INFO_CARD>");
figma.connect(ReviewCard, "<FIGMA_URL_CARDS_REVIEW_CARD>");
figma.connect(StatsCard, "<FIGMA_URL_CARDS_STATS_CARD>");
figma.connect(TestimonialCard, "<FIGMA_URL_CARDS_TESTIMONIAL_CARD>");
