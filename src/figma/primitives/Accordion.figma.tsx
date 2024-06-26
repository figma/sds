import figma from "@figma/code-connect";
import { Accordion, AccordionItem } from "primitives";

figma.connect(Accordion, "<FIGMA_ACCORDION_ACCORDION>", {
  props: {
    children: figma.children("Accordion Item"),
  },
  example: ({ children }) => <Accordion>{children}</Accordion>,
});

figma.connect(AccordionItem, "<FIGMA_ACCORDION_ACCORDION_ITEM>", {
  props: {
    dataSelected: figma.enum("State", {
      Open: "true",
    }),
    title: figma.string("Title"),
    children: figma.string("Content"),
  },
  example: ({ dataSelected, ...props }) => <AccordionItem {...props} />,
});
