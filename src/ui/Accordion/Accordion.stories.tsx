import type { Meta, StoryObj } from "@storybook/react";
import "react";
import { Accordion, AccordionItem } from "ui/Accordion/Accordion";
import { Text, TextSubtitle } from "ui/Text/Text";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "ui/Accordion",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {},
  render: () => (
    <Accordion>
      <AccordionItem title="Your files">
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </AccordionItem>
      <AccordionItem title="Shared with you">
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </AccordionItem>
      <AccordionItem title="Last item" hasChildItems={false}>
        <TextSubtitle>Subtitle</TextSubtitle>
        <Text>
          Answer the frequently asked question in a simple sentence, a longish
          paragraph, or even in a list.
        </Text>
      </AccordionItem>
    </Accordion>
  ),
};
