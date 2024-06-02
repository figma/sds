import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity, IconArrowLeft } from "icons";
import { Flex, FlexItem } from "ui/layout";
import { Button, ButtonGroup } from "ui/primitives";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "UI Primitives/Button",
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
    <Flex alignPrimary="center">
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
    </Flex>
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
      <Flex direction="column" gap="md">
        {["default", "purple", "blue", "teal"].map((theme) => (
          <div key={theme} className={`sds-scheme-color-${theme}`}>
            <Flex alignPrimary="center" gap="md">
              <FlexItem>
                <Button {...props}>
                  {children}
                  <IconActivity />
                </Button>
              </FlexItem>
              <FlexItem>
                <Button {...props} variant="secondary">
                  {children}
                  <IconActivity />
                </Button>
              </FlexItem>
              <FlexItem>
                <Button {...props} variant="stroke">
                  {children}
                  <IconActivity />
                </Button>
              </FlexItem>
              <FlexItem>
                <Button {...props} variant="subtle">
                  {children}
                  <IconActivity />
                </Button>
              </FlexItem>
            </Flex>
          </div>
        ))}
      </Flex>
    );
  },
};
