import figma from "@figma/code-connect";
import { Text, TextCode, TextLink, TextStrong } from "./Text";

const FIGMA_URL_TEXT =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:407";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-8546"
const FIGMA_URL_STRONG =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:409";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-8545"
const FIGMA_URL_TEXTLINK =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:411";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-8544"
const FIGMA_URL_CODE =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:414";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=17-8543"

figma.connect(Text, FIGMA_URL_TEXT, {
  props: {
    text: figma.string("Text"),
  },
  example: ({ text }) => <Text>{text}</Text>,
});

figma.connect(TextStrong, FIGMA_URL_STRONG, {
  props: {
    text: figma.string("Text"),
  },
  example: ({ text }) => (
    <Text>
      <TextStrong>{text}</TextStrong>
    </Text>
  ),
});

figma.connect(TextLink, FIGMA_URL_TEXTLINK, {
  props: {
    text: figma.string("Text"),
    href: figma.string("href"),
  },
  example: ({ href, text }) => (
    <Text>
      <TextLink href={href}>{text}</TextLink>
    </Text>
  ),
});

figma.connect(TextCode, FIGMA_URL_CODE, {
  props: {
    text: figma.string("Text"),
  },
  example: ({ text }) => (
    <Text>
      <TextCode>{text}</TextCode>
    </Text>
  ),
});
