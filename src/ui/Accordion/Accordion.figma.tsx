import figma from "@figma/code-connect";
import { Accordion, AccordionItem } from "./Accordion";

figma.connect(Accordion, "<FIGMA_URL_ACCORDION>", {
  props: {
    children: figma.children("Accordion Item"),
  },
  example: ({ children }) => <Accordion>{children}</Accordion>,
});

figma.connect(AccordionItem, "<FIGMA_URL_ACCORDION_ITEM>", {
  props: {
    isSelected: figma.enum("State", {
      Closed: false,
      Open: true,
    }),
    title: figma.string("Title"),
    content: figma.string("Content"),
  },
  example: ({ title, content }) => (
    <AccordionItem title={title}>{content}</AccordionItem>
  ),
});
