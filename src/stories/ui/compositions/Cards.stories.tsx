import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity } from "icons";
import { ComponentProps } from "react";
import {
  Card,
  PricingCard,
  ProductInfoCard,
  TestimonialCard,
} from "ui/compositions";
import { Flex } from "ui/layout";
import { Button, ButtonGroup, Image, Text, TextHeading } from "ui/primitives";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "UI Compositions/Cards",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<
  ComponentProps<typeof Card> & {
    "[asset]": "none" | "icon" | "image";
    "[interaction]": boolean;
  }
> = {
  args: {
    direction: "vertical",
    variant: "default",
    "[asset]": "none",
    "[interaction]": false,
  },
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "padded", "stroke"],
    },
    "[asset]": {
      control: { type: "select" },
      options: ["none", "icon", "image"],
    },
  },
  render: ({ "[asset]": _asset, "[interaction]": _interaction, ...args }) => (
    <Card
      {...args}
      asset={
        _asset === "icon" ? (
          <IconActivity size="32" />
        ) : _asset === "image" ? (
          <Image
            alt="A nice image"
            aspectRatio="1-1"
            size="small"
            src="https://placehold.co/500"
          />
        ) : undefined
      }
      interactionProps={
        _interaction
          ? {
              "aria-label": "Visit something nice about this card",
              href: "https://google.com",
            }
          : undefined
      }
    >
      <TextHeading>This is a card</TextHeading>
      <Text>
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </Text>
      <ButtonGroup align="start">
        <Button variant="neutral">Hello there!</Button>
      </ButtonGroup>
    </Card>
  ),
};

export const BlockPricingCard: StoryObj<typeof PricingCard> = {
  render: () => (
    <Flex
      container
      wrap
      gap="400"
      type="quarter"
      alignPrimary="center"
      direction="row"
    >
      {[1, 2, 3, 4].map((i) => (
        <PricingCard
          key={i}
          heading="Look at these low rates!"
          action="Buy this"
          price={5 * (5 - i)}
          onAction={() => {}}
          items={["Item 1", "Item 2", "Item 3"]}
        />
      ))}
    </Flex>
  ),
};

export const BlockProductInfoCard: StoryObj<typeof ProductInfoCard> = {
  render: () => (
    <Flex container wrap type="half" gap="400" direction="row">
      <ProductInfoCard
        asset={<Image alt="Accessibility!" src="https://placehold.co/300" />}
        heading="Product"
        price={5}
        action="Buy this"
        onAction={() => {}}
      />
      <ProductInfoCard
        asset={<Image alt="Accessibility!" src="https://placehold.co/300" />}
        heading="Product"
        price={5}
        action="Buy this"
        onAction={() => {}}
      />
    </Flex>
  ),
};

export const BlockTestimonialCard: StoryObj<typeof TestimonialCard> = {
  render: () => (
    <Flex
      container
      wrap
      type="third"
      alignPrimary="stretch"
      gap="400"
      direction="row"
    >
      <TestimonialCard
        heading="“Something splendid”"
        src="https://placehold.co/200"
        username="fullname421"
        name="Full Name"
      />
      <TestimonialCard
        heading="“Something splendid”"
        src="https://placehold.co/200"
        username="fullname421"
        name="Full Name"
      />
      <TestimonialCard
        heading="“Something splendid”"
        src="https://placehold.co/200"
        username="fullname421"
        name="Full Name"
      />
    </Flex>
  ),
};
