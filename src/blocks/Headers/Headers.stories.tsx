import { Meta, StoryObj } from "@storybook/react";
import { Flex, Section } from "ui";
import { StandardHeader } from "./Headers";

const meta: Meta<typeof StandardHeader> = {
  component: StandardHeader,
  title: "blocks/Headers",
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
