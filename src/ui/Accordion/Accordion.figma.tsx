import figma from "@figma/code-connect";
import { Accordion, AccordionItem } from "./Accordion";

figma.connect(
  Accordion,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7753-4779&t=KZPvI7iHa8LdRxX1-11",
  {
    props: {
      children: figma.children("Accordion Item"),
      showTitle: figma.boolean("Show Title"),
    },
    example: ({ children }) => <Accordion>{children}</Accordion>,
  },
);
figma.connect(
  AccordionItem,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7753-4634&t=KZPvI7iHa8LdRxX1-11",
  {
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
  },
);
