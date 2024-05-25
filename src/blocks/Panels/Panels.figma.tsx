import { figma } from "@figma/code-connect";
import { Flow, Layout, LayoutItem } from "ui";

// Image Panel: Default
figma.connect(
  Layout,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2164-15467&t=qJR3PLmBgMwoBka4-11",
  {
    variant: { Variant: "Default" },
    props: {
      image: figma.children("Image"),
      text: figma.children(["Text Content Heading", "Text"]),
    },
    example: ({ image, text }) => (
      <Layout alignPrimary="center" gap="xl">
        <LayoutItem size="half">{image}</LayoutItem>
        <LayoutItem size="half">
          <Flow gap="xl">{text}</Flow>
        </LayoutItem>
      </Layout>
    ),
  },
);
// Image Panel: Swap
figma.connect(
  Layout,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2164-15467&t=qJR3PLmBgMwoBka4-11",
  {
    variant: { Variant: "Swap" },
    props: {
      image: figma.children("Image"),
      text: figma.children(["Text Content Heading", "Text"]),
    },
    example: ({ image, text }) => (
      <Layout alignPrimary="center" gap="xl">
        <LayoutItem size="half">
          <Flow gap="xl">{text}</Flow>
        </LayoutItem>
        <LayoutItem size="half">{image}</LayoutItem>
      </Layout>
    ),
  },
);
// Image Panel: Images
figma.connect(
  Layout,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2164-15467&t=qJR3PLmBgMwoBka4-11",
  {
    variant: { Variant: "Images" },
    props: {
      image: figma.children("Image"),
    },
    example: ({ image }) => (
      <Layout alignPrimary="center" gap="xl">
        {image}
      </Layout>
    ),
  },
);
// Image Panel: Image Full
figma.connect(
  Layout,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2164-15467&t=qJR3PLmBgMwoBka4-11",
  {
    variant: { Variant: "Image Full" },
    props: {
      image: figma.children("Image"),
    },
    example: ({ image }) => (
      <Layout alignPrimary="center" gap="xl">
        <LayoutItem size="full">{image}</LayoutItem>
      </Layout>
    ),
  },
);
