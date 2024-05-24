import { figma } from "@figma/code-connect";
import { PricingCard, ProductInfoCard, TestimonialCard } from "./Cards/Cards";

const FIGMA_URL_PRODUCT_INFO_CARD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7753-4465&t=piSsjqZPlyn7qp8D-11";
const FIGMA_URL_PRICING_CARD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7722-3736&t=piSsjqZPlyn7qp8D-11";
const FIGMA_URL_TESTIMONIAL_CARD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7717-3946&t=piSsjqZPlyn7qp8D-11";

figma.connect(ProductInfoCard, FIGMA_URL_PRODUCT_INFO_CARD, {
  props: {
    asset: figma.children("Image"),
    children: figma.children(["Text Heading", "Text Price", "Text"]),
    actions: figma.children("Button Group"),
  },
  example: ({ actions, children, asset }) => (
    <ProductInfoCard asset={asset}>
      {children}
      {actions}
    </ProductInfoCard>
  ),
});
figma.connect(PricingCard, FIGMA_URL_PRICING_CARD, {
  props: {
    children: figma.children([
      "Text Heading",
      "Text Price",
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
