import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity } from "icons";
import { DestructiveIconButton, IconButton } from "ui";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "SDS UI/IconButton",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof IconButton> = {
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

export const Destructive: StoryObj<typeof DestructiveIconButton> = {
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
