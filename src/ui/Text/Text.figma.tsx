import figma from "@figma/code-connect";
import { Text } from "./Text";

const FIGMA_URL_BODY_BASE =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2087-8487&m=dev";

figma.connect(Text, FIGMA_URL_BODY_BASE, {
  props: {
    text: figma.string("Text"),
  },
  example: ({ text }) => <Text>{text}</Text>,
});
