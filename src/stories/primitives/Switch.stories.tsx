import type { Meta, StoryObj } from "@storybook/react";
import { SwitchField, SwitchGroup } from "primitives";

const meta: Meta<typeof SwitchField> = {
  component: SwitchField,
  title: "SDS Primitives/Inputs",
  parameters: { layout: "centered" },
};
export default meta;

export const StorySwitchField: StoryObj<typeof SwitchField> = {
  name: "Switch Field",
  args: {
    isDisabled: false,
  },
  render: (args) => (
    <SwitchField
      {...args}
      label="Enable"
      description="Allow others to embed your event details on their own site."
    />
  ),
};

export const StorySwitchGroup: StoryObj<typeof SwitchGroup> = {
  name: "Switch Group",
  args: {},
  render: (args) => {
    return (
      <SwitchGroup {...args}>
        <SwitchField
          label="Enable"
          description="Allow others to embed your event details on their own site."
        />
        <SwitchField label="Dont you love it" description="Something magical" />
      </SwitchGroup>
    );
  },
};
