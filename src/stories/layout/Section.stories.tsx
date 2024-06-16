import type { Meta, StoryObj } from "@storybook/react";
import { Flex, Section } from "layout";
import { TextContentTitle } from "ui";

const meta: Meta<typeof Section> = {
  component: Section,
  title: "SDS Layout/Section",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof Section> = {
  args: {
    padding: "1600",
    variant: "subtle",
  },
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["800", "1600", "4000"],
    },
    variant: {
      control: { type: "select" },
      options: ["subtle", "brand", "stroke", "secondary"],
    },
  },
  render: (args) => (
    <>
      <Section {...args}>
        <Flex container alignPrimary="center" gap="600">
          Hello there
        </Flex>
      </Section>
      <Section {...args}>
        <Flex container alignPrimary="center" gap="600">
          Hello there
        </Flex>
      </Section>
      <Section {...args}>
        <Flex container alignPrimary="center" gap="600">
          Hello there
        </Flex>
      </Section>
      <Section
        variant="image"
        src="https://placehold.co/2000x1200/f0f0f0/ddd?text=SDS"
        padding="4000"
      >
        <Flex container alignPrimary="center" gap="600">
          <TextContentTitle align="center" title="Title" subtitle="Subtitle" />
        </Flex>
      </Section>
    </>
  ),
};
