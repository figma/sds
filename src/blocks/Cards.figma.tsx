import { figma } from "@figma/code-connect";
import {
  BasicCard,
  PricingCard,
  ProductInfoCard,
  TestimonialCard,
} from "./Cards";

const FIGMA_URL_BASIC_CARD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=113-12732&t=piSsjqZPlyn7qp8D-11";
const FIGMA_URL_PRODUCT_INFO_CARD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7753-4465&t=piSsjqZPlyn7qp8D-11";
const FIGMA_URL_PRICING_CARD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7722-3736&t=piSsjqZPlyn7qp8D-11";
const FIGMA_URL_TESTIMONIAL_CARD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7717-3946&t=piSsjqZPlyn7qp8D-11";

figma.connect(BasicCard, FIGMA_URL_BASIC_CARD, {
  props: {
    media: figma.children(["Image", "Icon"]),
    heading: figma.children("Text Heading"),
    body: figma.children("Text"),
    actions: figma.children("Button Group"),
    variant: figma.enum("Variant", {
      Stroke: "stroke",
    }),
  },
  example: ({ actions, variant, heading, body, media }) => (
    <BasicCard variant={variant} media={media}>
      {heading}
      {body}
      {actions}
    </BasicCard>
  ),
});
figma.connect(ProductInfoCard, FIGMA_URL_PRODUCT_INFO_CARD, {
  props: {
    media: figma.children("Image"),
    children: figma.children([
      "Text Heading",
      "Text Subheading",
      "Text Title Page",
      "Text",
    ]),
    actions: figma.children("Button Group"),
  },
  example: ({ actions, children, media }) => (
    <ProductInfoCard media={media}>
      {children}
      {actions}
    </ProductInfoCard>
  ),
});
figma.connect(PricingCard, FIGMA_URL_PRICING_CARD, {
  props: {
    children: figma.children([
      "Text Heading",
      "Text Title Page",
      "Text Small",
      "Text List",
      "Button Group",
    ]),
  },
  example: ({ children }) => <PricingCard>{children}</PricingCard>,
});
figma.connect(TestimonialCard, FIGMA_URL_TESTIMONIAL_CARD, {
  props: { children: figma.children(["Text Heading", "Avatar Block"]) },
  example: ({ children }) => <TestimonialCard>{children}</TestimonialCard>,
});
