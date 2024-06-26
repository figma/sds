import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "primitives";

const meta: Meta<typeof Link> = {
  component: Link,
  title: "SDS Primitives/Link",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Link>;

export const StoryLink: Story = {
  name: "Link",
  args: { children: "Hello world!", href: "https://www.figma.com" },
  render: (args) => <Link href={args.href}>{args.children}</Link>,
};
