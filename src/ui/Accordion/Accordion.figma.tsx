import figma from "@figma/code-connect";
import { Accordion, AccordionItem } from "./Accordion";

const FIGMA_URL_ACCORDION =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7753-4779&t=KZPvI7iHa8LdRxX1-11";
const FIGMA_URL_ACCORDION_ITEM =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7753-4634&t=KZPvI7iHa8LdRxX1-11";

figma.connect(Accordion, FIGMA_URL_ACCORDION, {
  props: {
    children: figma.children("Accordion Item"),
  },
  example: ({ children }) => <Accordion>{children}</Accordion>,
});
figma.connect(AccordionItem, FIGMA_URL_ACCORDION_ITEM, {
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
