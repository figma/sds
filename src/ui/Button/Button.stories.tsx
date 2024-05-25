import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity, IconArrowLeft } from "icons";
import { Button, ButtonGroup } from "ui/Button/Button";

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
    <Layout alignPrimary="center">
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
    </Layout>
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
      <Layout direction="column" gap="md">
        {["default", "purple", "blue", "teal"].map((theme) => (
          <div key={theme} className={`sds-scheme-color-${theme}`}>
            <Layout alignPrimary="center" gap="md">
              <LayoutItem>
                <Button {...props}>
                  {children}
                  <IconActivity />
                </Button>
              </LayoutItem>
              <LayoutItem>
                <Button {...props} variant="secondary">
                  {children}
                  <IconActivity />
                </Button>
              </LayoutItem>
              <LayoutItem>
                <Button {...props} variant="stroke">
                  {children}
                  <IconActivity />
                </Button>
              </LayoutItem>
              <LayoutItem>
                <Button {...props} variant="subtle">
                  {children}
                  <IconActivity />
                </Button>
              </LayoutItem>
            </Layout>
          </div>
        ))}
      </Layout>
    );
  },
};
