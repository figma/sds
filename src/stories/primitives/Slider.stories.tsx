import type { Meta, StoryObj } from "@storybook/react";
import { Slider, SliderField } from "primitives";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "SDS Primitives/Inputs",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof SliderField>;

export const StorySliderField: Story = {
  name: "Slider Field",
  args: {
    label: "Check this out!",
    description: "Isn't this great?",
    isDisabled: false,
    showOutput: true,
    defaultValue: [30, 70],
  },
  render: (args) => {
    return <SliderField {...args} />;
  },
};
