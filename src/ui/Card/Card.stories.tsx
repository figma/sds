import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity } from "icons";
import "react";
import { ComponentProps } from "react";
import { Button, ButtonGroup } from "ui/Button/Button";
import { Card } from "ui/Card/Card";
import { Grid, GridItem } from "ui/Grid/Grid";
import { Image } from "ui/Image/Image";
import { Text, TextHeading } from "ui/Text/Text";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "ui/Card",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<
  ComponentProps<typeof Card> & {
    "[asset]": "none" | "icon" | "image";
    "[interaction]": boolean;
  }
>;

export const Default: Story = {
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
            src="https://picsum.photos/500"
          />
        ) : undefined
      }
      interaction={
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
        <Button variant="secondary">Hello there!</Button>
      </ButtonGroup>
    </Card>
  ),
};

export const Bulk: StoryObj<typeof Card> = {
  render: () => (
    <Grid gap="xl" auto direction="column">
      <Grid gap="lg" auto>
        {[1, 2, 3, 4].map((i) => (
          <GridItem key={i} size="minor">
            <Card asset={<IconActivity size="32" />}>
              <TextHeading>Subheading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
              <ButtonGroup>
                <Button variant="secondary">Some action</Button>
              </ButtonGroup>
            </Card>
          </GridItem>
        ))}
        {[1, 2, 3, 4].map((i) => (
          <GridItem key={i} size="minor">
            <Card
              variant="padded"
              asset={
                <Image alt="Accessibility!" src="https://picsum.photos/500" />
              }
            >
              <TextHeading>Subheading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
              <ButtonGroup>
                <Button variant="secondary">Some action</Button>
              </ButtonGroup>
            </Card>
          </GridItem>
        ))}
      </Grid>
    </Grid>
  ),
};
