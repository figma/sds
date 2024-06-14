import type { Meta, StoryObj } from "@storybook/react";
import {
  Label,
  Slider,
  SliderField,
  SliderOutput,
  SliderThumb,
  SliderTrack,
} from "ui";

const meta: Meta<typeof Slider> = {
  component: Slider,
  title: "SDS UI/Slider",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof SliderField>;
type SliderStory = StoryObj<typeof Slider>;

export const Default: Story = {
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
export const Raw: SliderStory = {
  args: {
    isDisabled: false,
    defaultValue: 30,
  },
  render: (args) => {
    return (
      <Slider {...args}>
        <Label>Something special</Label>
        <SliderOutput />
        <SliderTrack>
          <SliderThumb />
        </SliderTrack>
      </Slider>
    );
  },
};
