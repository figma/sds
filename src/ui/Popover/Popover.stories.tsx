import type { Meta } from "@storybook/react";
import { IconHelpCircle } from "icons";
import { DialogTrigger } from "ui/Dialog/Dialog";
import { IconButton } from "ui/IconButton/IconButton";
import { Grid } from "ui/Layout/Layout";
import { Text } from "ui/Text/Text";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
  component: Popover,
  title: "ui/Popover",
  parameters: { layout: "centered" },
};

export default meta;

export const Default = (args: any) => (
  <Grid alignPrimary="center">
    <DialogTrigger>
      <IconButton aria-label="Help">
        <IconHelpCircle />
      </IconButton>
      <Popover {...args}>
        <Text>For help accessing your account, please contact support.</Text>
      </Popover>
    </DialogTrigger>
  </Grid>
);
