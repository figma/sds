import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity } from "icons";
import "react";
import { ComponentProps } from "react";
import { Button, ButtonGroup } from "ui/Button/Button";
import { Card } from "ui/Card/Card";
import { Image } from "ui/Image/Image";
import { Text, TextSubtitle } from "ui/Text/Text";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "ui/Card",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<
  ComponentProps<typeof Card> & {
    "[media]": "none" | "icon" | "image";
    "[interaction]": boolean;
  }
>;

export const Default: Story = {
  args: {
    direction: "vertical",
    variant: "default",
    "[media]": "none",
    "[interaction]": false,
  },
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "padded"],
    },
    "[media]": {
      control: { type: "select" },
      options: ["none", "icon", "image"],
    },
  },
  render: ({ "[media]": _media, "[interaction]": _interaction, ...args }) => (
    <Card
      {...args}
      media={
        _media === "icon" ? (
          <IconActivity size="32" />
        ) : _media === "image" ? (
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
      <TextSubtitle>Subtitle</TextSubtitle>
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
