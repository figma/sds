import type { Meta, StoryObj } from "@storybook/react";
import { SimpleButton } from "primitives";

const meta: Meta<typeof SimpleButton> = {
  component: SimpleButton,
  title: "SDS Primitives/SimpleButton",
  parameters: { layout: "centered" },
};
export default meta;

export const StorySimpleButton: StoryObj<typeof SimpleButton> = {
  name: "SimpleButton",
  args: {
    children: "Hello world",
    size: "small",
    onClick: () => {},
  },
  argTypes: {
    size: {
      control: { type: "select" },
    },
    children: {
      control: { type: "text" },
    },
  },
  render: ({ children, ...args }) => <SimpleButton {...args}>{children}</SimpleButton>,
};