import { useArgs } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "layout";
import { Checkbox, CheckboxField, CheckboxGroup } from "primitives";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: "SDS Primitives/Checkbox",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof CheckboxField>;
type StoryGroup = StoryObj<typeof CheckboxGroup>;

export const Default: Story = {
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

export const Group: StoryGroup = {
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

export const Indeterminate: Story = {
  render: () => {
    const options = ["One with a very long name indeed.", "Two", "Three"];
    const [selected, setSelected] = useState<string[]>([]);
    return (
      <Flex direction="column" gap="200">
        <CheckboxField
          isSelected={selected.length > 0}
          isIndeterminate={selected.length !== options.length}
          onChange={() =>
            setSelected(selected.length !== options.length ? options : [])
          }
        >
          Select all
        </CheckboxField>

        {options.map((option) => (
          <CheckboxField
            key={option}
            name={option}
            description="Howdy, sailor"
            label={option}
            isSelected={selected.includes(option)}
            onChange={(selected) =>
              setSelected((pending) =>
                selected
                  ? [...pending, option]
                  : pending.filter((item) => item !== option),
              )
            }
          />
        ))}
      </Flex>
    );
  },
};
