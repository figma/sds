import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity } from "icons";
import { Flex } from "ui/layout";
import { IconButton } from "ui/primitives";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "UI Primitives/IconButton",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    isDisabled: false,
  },
  argTypes: {
    size: {
      control: { type: "select" },
    },
    variant: {
      control: { type: "select" },
    },
  },
  render: ({ ...props }) => (
    <IconButton {...props}>
      <IconActivity />
    </IconButton>
  ),
};

export const All: Story = {
  args: {
    isDisabled: false,
  },
  render: ({ ...props }) => (
    <Flex direction="column" gap="lg">
      {["default", "purple", "blue", "teal"].map((theme) => (
        <div key={theme} className={`sds-scheme-color-${theme}`}>
          <Flex alignPrimary="center" gap="lg">
            <IconButton {...props}>
              <IconActivity />
            </IconButton>
            <IconButton {...props} variant="secondary">
              <IconActivity />
            </IconButton>
            <IconButton {...props} variant="stroke">
              <IconActivity />
            </IconButton>
            <IconButton {...props} variant="subtle">
              <IconActivity />
            </IconButton>
          </Flex>
        </div>
      ))}
    </Flex>
  ),
};
