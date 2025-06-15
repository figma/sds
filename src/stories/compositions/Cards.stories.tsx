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
import { placeholder } from "images";
import { Flex } from "layout";
import { Button, ButtonGroup, Image, Text, TextHeading } from "primitives";
import { ComponentProps } from "react";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "SDS Compositions/Cards",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryCard: StoryObj<
  ComponentProps<typeof Card> & {
    "[asset]": "none" | "icon" | "image";
    "[interaction]": boolean;
  }
> = {
  name: "Card",
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
            src={placeholder}
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

export const StoryPricingCard: StoryObj<typeof PricingCard> = {
  name: "Pricing Card",
  render: () => (
    <Flex
      container
      wrap
      gap="400"
      type="third"
      alignPrimary="center"
      direction="row"
    >
      {[1, 2, 3].map((i) => (
        <PricingCard
          key={i}
          variant={i === 2 ? "brand" : undefined}
          heading="Wow Tier"
          action="Buy this"
          price={(5 * (5 - i)).toString()}
          priceCurrency="$"
          size="large"
          sku={`sku-${i}`}
          interval="month"
          onAction={() => {}}
          actionVariant={i === 2 ? "neutral" : undefined}
          list={["List item 1", "List item 2", "List item 3"]}
        />
      ))}
      {[1, 2, 3].map((i) => (
        <PricingCard
          key={i}
          variant={i === 2 ? "brand" : undefined}
          heading="Wow Tier"
          action="Buy this"
          price={(5 * (5 - i)).toString()}
          priceCurrency="$"
          size="small"
          sku={`sku-${i}`}
          interval="year"
          onAction={() => {}}
          actionVariant={i === 2 ? "neutral" : undefined}
          list={["List item 1", "List item 2", "List item 3"]}
        />
      ))}
    </Flex>
  ),
};

export const StoryProductInfoCard: StoryObj<typeof ProductInfoCard> = {
  name: "Product Info Card",
  render: () => (
    <Flex container wrap type="quarter" gap="400" direction="row">
      <ProductInfoCard
        asset={<Image alt="Accessibility!" src={placeholder} />}
        heading="Product"
        price="5"
        rating={4.7}
        description="Wow do we have a cool thing for you. What an amazing thing."
      />
      <ProductInfoCard
        asset={<Image alt="Accessibility!" src={placeholder} />}
        heading="Product"
        price="5"
        rating={4.7}
        description="Wow do we have a cool thing for you. What an amazing thing."
      />
      <ProductInfoCard
        asset={<Image alt="Accessibility!" src={placeholder} />}
        heading="Product"
        price="5"
        rating={4.7}
        description="Wow do we have a cool thing for you. What an amazing thing."
      />
      <ProductInfoCard
        asset={<Image alt="Accessibility!" src={placeholder} />}
        heading="Product"
        price="5"
        rating={4.7}
        description="Wow do we have a cool thing for you. What an amazing thing."
      />
    </Flex>
  ),
};

export const StoryReviewCard: StoryObj<typeof StatsCard> = {
  name: "Review Card",
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
        src={placeholder}
      />
      <ReviewCard
        stars={5}
        title="This rocks"
        body="Cannot believe how amazing this experience was"
        name="Charlie Brown"
        date="June 2024"
        src={placeholder}
      />
      <ReviewCard
        stars={5}
        title="This rocks"
        body="Cannot believe how amazing this experience was"
        name="Charlie Brown"
        date="June 2024"
        src={placeholder}
      />
      <ReviewCard
        stars={4}
        title="This rocks"
        body="Cannot believe how amazing this experience was"
        name="Charlie Brown"
        date="June 2024"
        src={placeholder}
      />
    </Flex>
  ),
};

export const StoryStatsCard: StoryObj<typeof StatsCard> = {
  name: "Stats Card",
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

export const StoryTestimonialCard: StoryObj<typeof TestimonialCard> = {
  name: "Testimonial Card",
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
        src={placeholder}
        username="fullname421"
        name="Full Name"
      />
      <TestimonialCard
        heading="“Something splendid”"
        src={placeholder}
        username="fullname421"
        name="Full Name"
      />
      <TestimonialCard
        heading="“Something splendid”"
        src={placeholder}
        username="fullname421"
        name="Full Name"
      />
    </Flex>
  ),
};
