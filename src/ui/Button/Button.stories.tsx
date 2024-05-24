import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity, IconArrowLeft } from "icons";
import { Button, ButtonGroup } from "ui/Button/Button";
import { Grid, GridItem } from "ui/Grid/Grid";

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
      <Grid auto direction="column" gap="md">
        {["default", "purple", "blue", "teal"].map((theme) => (
          <div key={theme} className={`sds-scheme-color-${theme}`}>
            <Grid auto alignPrimary="center" gap="md">
              <GridItem>
                <Button {...props}>
                  {children}
                  <IconActivity />
                </Button>
              </GridItem>
              <GridItem>
                <Button {...props} variant="secondary">
                  {children}
                  <IconActivity />
                </Button>
              </GridItem>
              <GridItem>
                <Button {...props} variant="stroke">
                  {children}
                  <IconActivity />
                </Button>
              </GridItem>
              <GridItem>
                <Button {...props} variant="subtle">
                  {children}
                  <IconActivity />
                </Button>
              </GridItem>
            </Grid>
          </div>
        ))}
      </Grid>
    );
  },
};
