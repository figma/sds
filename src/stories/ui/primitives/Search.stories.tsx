import type { Meta, StoryObj } from "@storybook/react";
import { Search } from "ui/primitives";

const meta: Meta<typeof Search> = {
  component: Search,
  title: "UI Primitives/Search",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Search>;

export const Default: Story = {
  args: {},
  render: (args) => <Search {...args} />,
};
