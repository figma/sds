import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertActions, AlertBody, AlertTitle } from "ui/Alert/Alert";
import { Button, ButtonGroup } from "ui/Button/Button";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "ui/Alert",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: { isDismissible: true },
  argTypes: {},
  render: (args) => {
    return (
      <Alert {...args}>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertBody>Hello there! This is a message</AlertBody>
        <AlertActions>
          <ButtonGroup>
            <Button variant="secondary" size="sm">
              Hello
            </Button>
          </ButtonGroup>
        </AlertActions>
      </Alert>
    );
  },
};
