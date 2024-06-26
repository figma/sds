import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "primitives";

const meta: Meta<typeof InputField> = {
  component: InputField,
  title: "SDS Primitives/Inputs",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof InputField>;

export const StoryInputField: Story = {
  name: "Input Field",
  args: {
    label: "I am a field",
    description: "I am a description",
    isDisabled: false,
    placeholder: "I am a placeholder",
    isRequired: false,
    type: "email",
  },
  render: (args) => <InputField {...args} />,
};
