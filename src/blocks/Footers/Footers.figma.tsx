import { figma } from "@figma/code-connect";
import { Flex, FlexItem } from "../../ui";
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
      <Flex container type="quarter" wrap gap="xl">
        <FlexItem size="minor">
          <Flex direction="column" gap="lg">
            {left}
          </Flex>
        </FlexItem>
        {lists}
      </Flex>
    </StandardFooter>
  ),
});
