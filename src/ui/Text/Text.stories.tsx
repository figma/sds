import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextCode, TextLink, TextStrong } from "ui";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "ui/Text",
};
export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <Text>
        This feature is only available to users on the{" "}
        <TextStrong>Business Plan</TextStrong>. To upgrade, visit your{" "}
        <TextLink href="#">billing settings</TextLink>. Your api key is{" "}
        <TextCode>fig_123456789</TextCode>.
      </Text>
    );
  },
};
