import type { Meta, StoryObj } from "@storybook/react";
import { IconInfo } from "icons";
import {
  Button,
  ButtonDanger,
  Notification,
  Text,
  TextStrong,
} from "primitives";
import { ComponentProps } from "react";

const meta: Meta<typeof Notification> = {
  component: Notification,
  title: "SDS Primitives/Notification",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryNotification: StoryObj<
  Omit<ComponentProps<typeof Notification>, "variant"> & {
    "[type]": "message" | "alert";
  }
> = {
  name: "Notification",
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
          <ButtonDanger size="small">Hello</ButtonDanger>
        )}
      </Notification>
    );
  },
};
