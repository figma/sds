import type { Meta, StoryObj } from "@storybook/react";
import { Grid, Link } from "ui";

const meta: Meta<typeof Link> = {
  component: Link,
  title: "ui/Link",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: { children: "Hello world!", href: "https://www.example.org" },
  render: (args) => (
    <Grid alignPrimary="center">
      <Link href={args.href}>{args.children}</Link>
    </Grid>
  ),
};
