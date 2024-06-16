import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  PricingCard,
  ProductInfoCard,
  ReviewCard,
  StatsCard,
  TestimonialCard,
} from "compositions";
import {
  IconActivity,
  IconClock,
  IconCode,
  IconCompass,
  IconSmile,
} from "icons";
import { Flex } from "layout";
import { Button, ButtonGroup, Image, Text, TextHeading } from "primitives";
import { ComponentProps } from "react";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "SDS Compositions/Cards",
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
            src="https://placehold.co/500/f0f0f0/ddd?text=SDS"
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
    <Flex container wrap type="quarter" gap="400" direction="row">
      <ProductInfoCard
        asset={
          <Image
            alt="Accessibility!"
            src="https://placehold.co/300/f0f0f0/ddd?text=SDS"
          />
        }
        heading="Product"
        price={5}
        description="Wow do we have a cool thing for you. What an amazing thing."
      />
      <ProductInfoCard
        asset={
          <Image
            alt="Accessibility!"
            src="https://placehold.co/300/f0f0f0/ddd?text=SDS"
          />
        }
        heading="Product"
        price={5}
        description="Wow do we have a cool thing for you. What an amazing thing."
      />
      <ProductInfoCard
        asset={
          <Image
            alt="Accessibility!"
            src="https://placehold.co/300/f0f0f0/ddd?text=SDS"
          />
        }
        heading="Product"
        price={5}
        description="Wow do we have a cool thing for you. What an amazing thing."
      />
      <ProductInfoCard
        asset={
          <Image
            alt="Accessibility!"
            src="https://placehold.co/300/f0f0f0/ddd?text=SDS"
          />
        }
        heading="Product"
        price={5}
        description="Wow do we have a cool thing for you. What an amazing thing."
      />
    </Flex>
  ),
};

export const BlockReviewCard: StoryObj<typeof StatsCard> = {
  render: () => (
    <Flex
      container
      wrap
      type="quarter"
      alignPrimary="stretch"
      gap="400"
      direction="row"
    >
      <ReviewCard
        stars={4}
        title="This rocks"
        body="Cannot believe how amazing this experience was"
        name="Charlie Brown"
        date="June 2024"
        src="https://placehold.co/200/f0f0f0/ddd?text=SDS"
      />
      <ReviewCard
        stars={5}
        title="This rocks"
        body="Cannot believe how amazing this experience was"
        name="Charlie Brown"
        date="June 2024"
        src="https://placehold.co/200/f0f0f0/ddd?text=SDS"
      />
      <ReviewCard
        stars={5}
        title="This rocks"
        body="Cannot believe how amazing this experience was"
        name="Charlie Brown"
        date="June 2024"
        src="https://placehold.co/200/f0f0f0/ddd?text=SDS"
      />
      <ReviewCard
        stars={4}
        title="This rocks"
        body="Cannot believe how amazing this experience was"
        name="Charlie Brown"
        date="June 2024"
        src="https://placehold.co/200/f0f0f0/ddd?text=SDS"
      />
    </Flex>
  ),
};

export const BlockStatsCard: StoryObj<typeof StatsCard> = {
  render: () => (
    <Flex
      container
      wrap
      type="quarter"
      alignPrimary="stretch"
      gap="400"
      direction="row"
    >
      <StatsCard
        icon={<IconClock size="40" />}
        stat="400"
        description="SDS Hours"
      />
      <StatsCard
        icon={<IconCode size="40" />}
        stat="15.3k"
        description="Lines of TypeScript"
      />
      <StatsCard
        icon={<IconSmile size="40" />}
        stat="8M"
        description="Smiles"
      />
      <StatsCard
        icon={<IconCompass size="40" />}
        stat="120.4k"
        description="Directions"
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
        src="https://placehold.co/200/f0f0f0/ddd?text=SDS"
        username="fullname421"
        name="Full Name"
      />
      <TestimonialCard
        heading="“Something splendid”"
        src="https://placehold.co/200/f0f0f0/ddd?text=SDS"
        username="fullname421"
        name="Full Name"
      />
      <TestimonialCard
        heading="“Something splendid”"
        src="https://placehold.co/200/f0f0f0/ddd?text=SDS"
        username="fullname421"
        name="Full Name"
      />
    </Flex>
  ),
};
