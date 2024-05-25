import type { Meta, StoryObj } from "@storybook/react";
import { Flex, Section } from "ui";

const meta: Meta<typeof Section> = {
  component: Section,
  title: "ui/Section",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof Section> = {
  args: {
    padding: "md",
    variant: "subtle",
  },
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    variant: {
      control: { type: "select" },
      options: ["subtle", "brand", "stroke", "secondary"],
    },
  },
  render: (args) => (
    <>
      <Section {...args}>
        <Flex container alignPrimary="center" gap="xl">
          Hello there
        </Flex>
      </Section>
      <Section {...args} variant="secondary">
        <Flex container alignPrimary="center" gap="xl">
          Hello there
        </Flex>
      </Section>
      <Section {...args}>
        <Flex container alignPrimary="center" gap="xl">
          Hello there
        </Flex>
      </Section>
    </>
  ),
};
