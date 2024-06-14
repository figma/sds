import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity, IconArrowLeft } from "icons";
import { Button, DestructiveButton } from "ui";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "SDS UI/Button",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: "Hello world",
    variant: "primary",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "neutral", "subtle"],
    },
  },
  render: ({ children, ...props }) => (
    <Button {...props}>
      <IconArrowLeft />
      {children}
      <IconActivity />
    </Button>
  ),
};

export const Destructive: StoryObj<typeof DestructiveButton> = {
  args: {
    children: "Hello world",
    variant: "danger-primary",
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
    size: {
      control: { type: "select" },
    },
    variant: {
      control: { type: "select" },
      options: ["danger-primary", "danger-subtle"],
    },
  },
  render: ({ children, ...props }) => (
    <DestructiveButton {...props}>
      <IconArrowLeft />
      {children}
      <IconActivity />
    </DestructiveButton>
  ),
};
