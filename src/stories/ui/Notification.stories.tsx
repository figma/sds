import type { Meta, StoryObj } from "@storybook/react";
import { IconInfo } from "icons";
import { ComponentProps } from "react";
import { Button, DestructiveButton, Notification, Text, TextStrong } from "ui";

const meta: Meta<typeof Notification> = {
  component: Notification,
  title: "SDS UI/Notification",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<
  Omit<ComponentProps<typeof Notification>, "variant"> & {
    "[type]": "message" | "alert";
  }
> = {
  args: { isDismissible: true, "[type]": "message" },
  argTypes: {
    "[type]": { control: { type: "select" }, options: ["message", "alert"] },
  },
  render: ({ "[type]": _type, ...args }) => {
    const variant = _type === "message" ? "message" : "alert";
    return (
      <Notification {...args} variant={variant} icon={<IconInfo size="20" />}>
        <TextStrong>Notification Title</TextStrong>
        <Text>Hello there! This is a message</Text>
        {_type === "message" ? (
          <Button size="small">Hello</Button>
        ) : (
          <DestructiveButton size="small">Hello</DestructiveButton>
        )}
      </Notification>
    );
  },
};
