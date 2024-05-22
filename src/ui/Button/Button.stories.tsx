import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity, IconArrowLeft } from "icons";
import { Button, ButtonGroup } from "ui/Button/Button";
import { Grid } from "ui/Grid/Grid";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "ui/Button",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Hello world",
    isDisabled: false,
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
    },
  },
  render: ({ children, ...props }) => (
    <Grid alignPrimary="center">
      <ButtonGroup>
        <Button {...props}>
          <IconArrowLeft />
          {children}
          <IconActivity />
        </Button>
        <Button {...props} href="#">
          <IconArrowLeft />
          {children} (Link)
          <IconActivity />
        </Button>
      </ButtonGroup>
    </Grid>
  ),
};

export const All: Story = {
  args: {
    children: "Hello",
    isDisabled: false,
  },
  argTypes: {
    children: {
      control: { type: "text" },
    },
  },
  render: ({ children, ...props }) => {
    return (
      <Grid direction="column">
        {["default", "purple", "blue", "teal"].map((theme) => (
          <Grid>
            <div key={theme} className={`sds-scheme-color-${theme}`}>
              <Grid alignPrimary="center">
                <Button {...props}>
                  {children}
                  <IconActivity />
                </Button>
                <Button {...props} variant="secondary">
                  {children}
                  <IconActivity />
                </Button>
                <Button {...props} variant="stroke">
                  {children}
                  <IconActivity />
                </Button>
                <Button {...props} variant="subtle">
                  {children}
                  <IconActivity />
                </Button>
              </Grid>
            </div>
          </Grid>
        ))}
      </Grid>
    );
  },
};
