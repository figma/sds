import type { Meta, StoryObj } from "@storybook/react";
import { placeholder } from "images";
import { Description, Label, ListBox, ListBoxItem } from "primitives";

const meta: Meta<typeof ListBox> = {
  component: ListBox,
  title: "SDS Primitives/ListBox",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof ListBox>;

export const StoryListBox: Story = {
  name: "List Box",
  args: { layout: "stack", orientation: "vertical" },
  argTypes: {
    layout: { options: ["stack", "grid"], control: { type: "select" } },
    orientation: {
      options: ["vertical", "horizontal"],
      control: { type: "select" },
    },
  },
  render: (args) => {
    return (
      <ListBox {...args}>
        <ListBoxItem>Aardvark</ListBoxItem>
        <ListBoxItem>Cat</ListBoxItem>
        <ListBoxItem>Dog</ListBoxItem>
        <ListBoxItem>Kangaroo</ListBoxItem>
        <ListBoxItem>Koala</ListBoxItem>
        <ListBoxItem>Penguin</ListBoxItem>
        <ListBoxItem>Snake</ListBoxItem>
        <ListBoxItem textValue="Turtle">
          <Label>Turtle</Label>
        </ListBoxItem>
        <ListBoxItem textValue="Admin">
          <img slot="image" src={placeholder} />
          <Label>Admin</Label>
          <Description>Full access</Description>
        </ListBoxItem>
      </ListBox>
    );
  },
};
