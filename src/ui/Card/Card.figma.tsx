import { figma } from "@figma/code-connect";
import { Card } from "./Card";

const FIGMA_URL_BASIC_CARD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2142-11380&t=OLOZiI4mAFpUQIOw-11";
figma.connect(Card, FIGMA_URL_BASIC_CARD, {
  props: {
    asset: figma.children(["Image", "Icon"]),
    heading: figma.children("Text Heading"),
    body: figma.children("Text"),
    direction: figma.enum("Direction", {
      Horizontal: "horizontal",
      Vertical: "vertical",
    }),
    actions: figma.children("Button Group"),
    variant: figma.enum("Variant", {
      Stroke: "stroke",
    }),
  },
  example: ({ actions, variant, heading, body, asset, direction }) => (
    <Card variant={variant} asset={asset} direction={direction}>
      {heading}
      {body}
      {actions}
    </Card>
  ),
});
