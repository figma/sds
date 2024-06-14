import { Meta, StoryObj } from "@storybook/react";
import { Footer, Header } from "compositions";
import { Flex, Section } from "layout";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "SDS Compositions/Pages",
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
      <Footer />
    </>
  ),
};
