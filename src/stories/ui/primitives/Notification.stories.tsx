import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import {
  Button,
  ButtonGroup,
  Notification,
  NotificationActions,
  NotificationBody,
  NotificationTitle,
} from "ui/primitives";

const meta: Meta<typeof Notification> = {
  component: Notification,
  title: "UI Primitives/Notification",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<
  Omit<ComponentProps<typeof Notification>, "scheme"> & {
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
      <Notification {...args} scheme={scheme}>
        <NotificationTitle>Notification Title</NotificationTitle>
        <NotificationBody>Hello there! This is a message</NotificationBody>
        {_type === "message" && (
          <NotificationActions>
            <ButtonGroup>
              <Button size="sm">Hello</Button>
            </ButtonGroup>
          </NotificationActions>
        )}
      </Notification>
    );
  },
};
