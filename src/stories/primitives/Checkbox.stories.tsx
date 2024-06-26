import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxField, CheckboxGroup } from "primitives";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "SDS Primitives/Inputs",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof CheckboxField>;
type StoryGroup = StoryObj<typeof CheckboxGroup>;

export const StoryCheckboxField: Story = {
  name: "Checkbox Field",
  args: {
    isSelected: true,
    isIndeterminate: false,
    isDisabled: false,
  },
  render: (args) => {
    const [{ isSelected }, updateArgs] = useArgs();
    return (
      <CheckboxField
        isDisabled={args.isDisabled}
        isSelected={isSelected}
        isIndeterminate={args.isIndeterminate}
        onChange={() => updateArgs({ isSelected: !isSelected })}
        label="This is a checkbox"
        description="This is a checkbox description"
      />
    );
  },
};

export const StoryCheckboxGruop: StoryGroup = {
  name: "Checkbox Group",
  args: {},
  render: (args) => {
    return (
      <CheckboxGroup
        label="Hello"
        description="I am a description"
        {...args}
        onChange={console.log}
      >
        <CheckboxField value="one">Value one</CheckboxField>
        <CheckboxField value="two">Value two</CheckboxField>
        <CheckboxField value="three">Value three</CheckboxField>
      </CheckboxGroup>
    );
  },
};
