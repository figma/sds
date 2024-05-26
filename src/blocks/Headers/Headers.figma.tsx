import { figma } from "@figma/code-connect";
import { Flex, FlexItem } from "../../ui";
import { StandardHeader, VerticalHeader } from "./Headers";

const FIGMA_URL_STANDARD_HEADER =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7717-3642&t=nZCpXAWLyKWF2wPs-11";
const FIGMA_URL_VERTICAL_HEADER =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=7722-3364&t=nZCpXAWLyKWF2wPs-11";

figma.connect(StandardHeader, FIGMA_URL_STANDARD_HEADER, {
  props: {
    logo: figma.children("Logo"),
    children: figma.children(["Navigation", "Button Group"]),
  },
  example: ({ children, logo }) => (
    <StandardHeader>
      <Flex container>
        <FlexItem size="minor">{logo}</FlexItem>
        <FlexItem size="major">
          <Flex gap="xl" alignPrimary="end">
            {children}
          </Flex>
        </FlexItem>
      </Flex>
    </StandardHeader>
  ),
});

figma.connect(VerticalHeader, FIGMA_URL_VERTICAL_HEADER, {
  props: {
    logo: figma.children("Logo"),
    children: figma.children("Navigation"),
  },
  example: ({ children, logo }) => (
    <VerticalHeader>
      <Flex direction="column" alignSecondary="center" gap="md">
        {logo}
        {children}
      </Flex>
    </VerticalHeader>
  ),
});
