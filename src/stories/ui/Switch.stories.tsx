import type { Meta, StoryObj } from "@storybook/react";
import { SwitchField, SwitchGroup } from "ui";

const meta: Meta<typeof SwitchField> = {
  component: SwitchField,
  title: "SDS UI/Switch",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof SwitchField>;

export const Default: Story = {
  args: {
    isDisabled: false,
  },
  render: (args) => {
    return (
      <SwitchGroup>
        <SwitchField
          label="Enable"
          description="Allow others to embed your event details on their own site."
          isDisabled={args.isDisabled}
        />
        <SwitchField
          label="Dont you love it"
          description="Something magical"
          isDisabled={args.isDisabled}
        />
      </SwitchGroup>
    );
  },
};
