import type { Meta, StoryObj } from "@storybook/react";
import { Accordion, AccordionItem, Text, TextHeading } from "primitives";
import "react";

const meta: Meta<typeof Accordion> = {
  component: Accordion,
  title: "SDS Primitives/Accordion",
  parameters: { layout: "centered" },
};
export default meta;

export const AccordionStory: StoryObj<typeof Accordion> = {
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

export const AccordionItemStory: StoryObj<typeof AccordionItem> = {
  args: {},
  render: () => (
    <Accordion>
      <AccordionItem title="Complex Content" hasChildItems={false}>
        <TextHeading>Heading</TextHeading>
        <Text>
          Answer the frequently asked question in a simple sentence, a longish
          paragraph, or even in a list.
        </Text>
      </AccordionItem>
    </Accordion>
  ),
};
