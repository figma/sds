import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity } from "icons";
import { Grid, IconButton } from "ui";

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
    <Grid alignPrimary="center">
      <IconButton {...props}>
        <IconActivity />
      </IconButton>
    </Grid>
  ),
};

export const All: Story = {
  args: {
    isDisabled: false,
  },
  render: ({ ...props }) => (
    <Grid auto direction="column">
      {["default", "purple", "blue", "teal"].map((theme) => (
        <div key={theme} className={`sds-theme-${theme}`}>
          <Grid alignPrimary="center">
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
          </Grid>
        </div>
      ))}
    </Grid>
  ),
};
