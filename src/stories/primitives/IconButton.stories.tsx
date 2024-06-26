import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity } from "icons";
import { DestructiveIconButton, IconButton } from "primitives";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "SDS Primitives/Buttons",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryIconButton: StoryObj<typeof IconButton> = {
  name: "Icon Button",
  args: {
    variant: "primary",
    size: "medium",
    isDisabled: false,
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "neutral", "subtle"],
    },
  },
  render: ({ ...args }) => (
    <IconButton {...args}>
      <IconActivity />
    </IconButton>
  ),
};

export const StoryDestructiveIconButton: StoryObj<
  typeof DestructiveIconButton
> = {
  name: "Destructive Icon Button",
  args: {
    variant: "danger-primary",
    size: "medium",
    isDisabled: false,
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
    variant: {
      control: { type: "select" },
      options: ["danger-primary", "danger-subtle"],
    },
  },
  render: ({ ...args }) => (
    <DestructiveIconButton {...args}>
      <IconActivity />
    </DestructiveIconButton>
  ),
};
