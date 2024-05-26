import { figma } from "@figma/code-connect";
import { Flex, FlexItem } from "../../ui";

// Image Panel: Default
figma.connect(
  Flex,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2164-15467&t=qJR3PLmBgMwoBka4-11",
  {
    variant: { Variant: "Default" },
    props: {
      image: figma.children("Image"),
      text: figma.children(["Text Content Heading", "Text"]),
    },
    example: ({ image, text }) => (
      <Flex container type="half" wrap alignPrimary="center" gap="xxl">
        <FlexItem size="half">{image}</FlexItem>
        <FlexItem size="half">
          <Flex direction="column" gap="xl">
            {text}
          </Flex>
        </FlexItem>
      </Flex>
    ),
  },
);
// Image Panel: Swap
figma.connect(
  Flex,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2164-15467&t=qJR3PLmBgMwoBka4-11",
  {
    variant: { Variant: "Swap" },
    props: {
      image: figma.children("Image"),
      text: figma.children(["Text Content Heading", "Text"]),
    },
    example: ({ image, text }) => (
      <Flex container type="half" wrap alignPrimary="center" gap="xxl">
        <FlexItem size="half">
          <Flex direction="column" gap="xl">
            {text}
          </Flex>
        </FlexItem>
        <FlexItem size="half">{image}</FlexItem>
      </Flex>
    ),
  },
);
// Image Panel: Images
figma.connect(
  Flex,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2164-15467&t=qJR3PLmBgMwoBka4-11",
  {
    variant: { Variant: "Images" },
    props: {
      image: figma.children("Image"),
    },
    example: ({ image }) => (
      <Flex container type="half" alignPrimary="center" gap="xxl">
        {image}
      </Flex>
    ),
  },
);
// Image Panel: Image
figma.connect(
  Flex,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2164-15467&t=qJR3PLmBgMwoBka4-11",
  {
    variant: { Variant: "Image" },
    props: {
      image: figma.children("Image"),
    },
    example: ({ image }) => (
      <Flex container alignPrimary="center">
        <FlexItem size="full">{image}</FlexItem>
      </Flex>
    ),
  },
);
