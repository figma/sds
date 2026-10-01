import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "primitives";

const meta: Meta<typeof Logo> = {
  component: Logo,
  title: "SDS Primitives/Logo",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryLogo: StoryObj<typeof Logo> = {
  name: "Logo",
  render: () => <Logo href="#" />,
};
