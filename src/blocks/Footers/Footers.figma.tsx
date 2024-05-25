import { figma } from "@figma/code-connect";
import { Flex } from "ui";
import { StandardFooter } from "./Footers";

const FIGMA_URL_STANDARD_FOOTER =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7717-4142&t=nZCpXAWLyKWF2wPs-11";

figma.connect(StandardFooter, FIGMA_URL_STANDARD_FOOTER, {
  props: {
    left: figma.children(["Logo", "Button Group"]),
    lists: figma.children(["Text Link List"]),
  },
  example: ({ lists, left }) => (
    <StandardFooter>
      <Flex gap="xl">
        <Flex direction="column" gap="lg">
          {left}
        </Flex>
        {lists}
      </Flex>
    </StandardFooter>
  ),
});
