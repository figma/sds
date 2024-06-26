import type { Meta, StoryObj } from "@storybook/react";
import { IconMenu } from "icons";
import {
  MenuButton,
  MenuDescription,
  MenuItem,
  MenuLabel,
  MenuSeparator,
  MenuShortcut,
} from "primitives";

const meta: Meta<typeof MenuButton> = {
  component: MenuButton,
  title: "SDS Primitives/Menu",
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof MenuButton>;

export const StoryMenu: Story = {
  name: "Menu",
  args: { placement: "bottom left" },
  render: (args) => {
    return (
      <MenuButton {...args} label="Open menu" icon={<IconMenu />}>
        <MenuItem>New…</MenuItem>
        <MenuItem isDisabled>Open…</MenuItem>
        <MenuSeparator />
        <MenuItem>
          <MenuLabel>Save</MenuLabel>
          <MenuShortcut>⌘S</MenuShortcut>
        </MenuItem>
        <MenuItem>
          <MenuLabel>Delete</MenuLabel>
          <MenuDescription>Delete this thing forever</MenuDescription>
          <MenuShortcut>⇧⌘⌫</MenuShortcut>
        </MenuItem>
        <MenuItem>Save as…</MenuItem>
        <MenuItem>Rename…</MenuItem>
        <MenuSeparator />
        <MenuItem>Page setup…</MenuItem>
        <MenuItem>Print…</MenuItem>
      </MenuButton>
    );
  },
};
