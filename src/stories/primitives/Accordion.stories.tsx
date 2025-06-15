import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, Text, TextHeading } from "primitives";
import "react";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "SDS Primitives/Accordion",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryAccordion: StoryObj<typeof Accordion> = {
  name: "Accordion",
  args: {},
  render: () => (
    <Accordion>
      <AccordionItem title="Item 1">
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </AccordionItem>
      <AccordionItem title="Item 2">
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </AccordionItem>
      <AccordionItem title="Item 3">
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </AccordionItem>
    </Accordion>
  ),
};

export const StoryAccordionItem: StoryObj<typeof AccordionItem> = {
  name: "Accordion Item",
  args: {},
  render: () => (
    <Accordion>
      <AccordionItem title="Complex Content">
        <TextHeading>Heading</TextHeading>
        <Text>
          Answer the frequently asked question in a simple sentence, a longish
          paragraph, or even in a list.
        </Text>
      </AccordionItem>
    </Accordion>
  ),
};
