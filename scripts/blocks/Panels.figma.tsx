import { figma } from "@figma/code-connect"; import { Flex, FlexItem, Section } from "../../ui";

// Panels: Image Panel
figma.connect(Section, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2164:15467", { props: { children: figma.children(["Variant=Default","Variant=Swap","Variant=Images","Variant=Image"]) }, example: ({ children }) => (<Section><Flex direction="row" wrap container>{children}</Flex></Section>) })