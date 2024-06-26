import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioField, RadioGroup } from "primitives";

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: "SDS Primitives/Inputs",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof RadioField>;
type StoryGroup = StoryObj<typeof RadioGroup>;

export const StoryRadioField: Story = {
  name: "Radio Field",
  args: {},
  render: (args) => {
    return (
      <RadioGroup>
        <RadioField
          {...args}
          value="hello"
          label="This is a radio"
          description="This is a radio description"
        />
      </RadioGroup>
    );
  },
};

export const StoryRadioGroup: StoryGroup = {
  name: "Radio Group",
  args: {},
  render: (args) => (
    <RadioGroup
      label="Hello"
      description="I am a description"
      {...args}
      onChange={console.log}
    >
      <RadioField value="one">Value one</RadioField>
      <RadioField value="two">Value two</RadioField>
      <RadioField value="three">Value three</RadioField>
    </RadioGroup>
  ),
};
