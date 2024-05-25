import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity } from "icons";
import { IconButton } from "ui";

const meta: Meta<typeof IconButton> = {
  component: IconButton,
  title: "ui/IconButton",
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
    <Layout alignPrimary="center">
      <IconButton {...props}>
        <IconActivity />
      </IconButton>
    </Layout>
  ),
};

export const All: Story = {
  args: {
    isDisabled: false,
  },
  render: ({ ...props }) => (
    <Layout direction="column">
      {["default", "purple", "blue", "teal"].map((theme) => (
        <div key={theme} className={`sds-theme-${theme}`}>
          <Layout alignPrimary="center">
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
          </Layout>
        </div>
      ))}
    </Layout>
  ),
};
