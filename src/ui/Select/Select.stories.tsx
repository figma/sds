import type { Meta, StoryObj } from "@storybook/react";
import { SelectField, SelectItem } from "ui";

const meta: Meta<typeof SelectField> = {
  component: SelectField,
  title: "ui/Select",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof SelectField>;

export const Default: Story = {
  render: (args) => (
    <SelectField
      {...args}
      label="Hello there..."
      description="Wowie!"
      defaultSelectedKey="monday"
      placeholder="Select a day"
    >
      <SelectItem textValue="monday">Monday</SelectItem>
      <SelectItem>Tuesday</SelectItem>
      <SelectItem>Wednesday</SelectItem>
      <SelectItem>Thursday</SelectItem>
      <SelectItem>Friday</SelectItem>
      <SelectItem>Saturday</SelectItem>
      <SelectItem>Sunday</SelectItem>
    </SelectField>
  ),
};
