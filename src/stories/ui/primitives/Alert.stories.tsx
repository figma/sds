import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import {
  Alert,
  AlertActions,
  AlertBody,
  AlertTitle,
  Button,
  ButtonGroup,
} from "ui/primitives";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "UI Primitives/Alert",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<
  Omit<ComponentProps<typeof Alert>, "scheme"> & {
    "[type]": "message" | "alert";
  }
> = {
  args: { isDismissible: true, "[type]": "message" },
  argTypes: {
    "[type]": { control: { type: "select" }, options: ["message", "alert"] },
  },
  render: ({ "[type]": _type, ...args }) => {
    const scheme = _type === "message" ? "default" : "danger";
    return (
      <Alert {...args} scheme={scheme}>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertBody>Hello there! This is a message</AlertBody>
        {_type === "message" && (
          <AlertActions>
            <ButtonGroup>
              <Button size="sm">Hello</Button>
            </ButtonGroup>
          </AlertActions>
        )}
      </Alert>
    );
  },
};
