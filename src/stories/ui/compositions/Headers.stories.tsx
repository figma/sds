import { Meta, StoryObj } from "@storybook/react";
import { Header } from "ui/compositions";
import { Flex, Section } from "ui/layout";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "UI Compositions/Headers",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof Header> = {
  render: () => (
    <>
      <Header />
      <Section>
        <Flex container>Something</Flex>
      </Section>
    </>
  ),
};
