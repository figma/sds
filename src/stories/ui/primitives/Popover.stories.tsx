import type { Meta } from "@storybook/react";
import { IconHelpCircle } from "icons";
import { DialogTrigger, IconButton, Popover, Text } from "ui/primitives";

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: "UI Primitives/Popover",
  parameters: { layout: "centered" },
};

export default meta;

export const Default = (args: any) => (
  <DialogTrigger>
    <IconButton aria-label="Help">
      <IconHelpCircle />
    </IconButton>
    <Popover {...args}>
      <Text>For help accessing your account, please contact support.</Text>
    </Popover>
  </DialogTrigger>
);
