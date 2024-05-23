import type { Meta, StoryObj } from "@storybook/react";
import { TextAreaField } from "ui";

const meta: Meta<typeof TextAreaField> = {
  component: TextAreaField,
  title: "ui/TextArea",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof TextAreaField>;

export const Default: Story = {
  args: {
    label: "I am a field",
    description: "I am a description",
    isDisabled: false,
    placeholder: "Text goes here",
    value:
      "Post-ironic tofu artisan gatekeep YOLO, portland vape meditation polaroid tumeric cardigan shabby chic marfa normcore cupping. Normcore fam flexitarian marxism, selfies lyft before they sold out hexagon YOLO freegan actually. Fixie praxis williamsburg cronut meh forage, big mood vape jawn tattooed crucifix chillwave VHS swag. Intelligentsia big mood fam succulents photo booth. Enamel pin bicycle rights vexillologist tote bag, heirloom quinoa cardigan solarpunk shabby chic gorpcore. Tote bag cred disrupt same, ascot organic kinfolk messenger bag viral twee. Crucifix Brooklyn lo-fi letterpress fingerstache try-hard +1 chillwave scenester DSA tacos pok pok tote bag yes plz tonx. Heirloom four dollar toast schlitz la croix. Marfa offal bespoke williamsburg banh mi tousled celiac twee roof party. Master cleanse chia copper mug, solarpunk disrupt chambray pork belly trust fund succulents VHS bespoke. Ramps small batch retro, green juice messenger bag cray waistcoat skateboard selvage seitan neutra.",
    isRequired: false,
  },
  render: ({ ...args }) => <TextAreaField {...args} />,
};
