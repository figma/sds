import { Meta, StoryObj } from "@storybook/react";
import { StandardHeader } from "ui/components";
import { Flex, Section } from "ui/layout";

const meta: Meta<typeof StandardHeader> = {
  component: StandardHeader,
  title: "UI Components/Headers",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof StandardHeader> = {
  render: () => (
    <>
      <StandardHeader />
      <Section>
        <Flex container>Something</Flex>
      </Section>
    </>
  ),
};
