import { figma } from "@figma/code-connect";
import { Flex, FlexItem } from "layout";
import { Image } from "ui";
import { Panel } from "./Panels";

figma.connect(Panel, "<FIGMA_URL_PANEL_DEFAULT>", {
  props: {
    children: figma.children(["Text Content Heading", "Text"]),
  },
  example: ({ children }) => (
    <Panel>
      <Image
        src="https://placehold.co/560x320"
        alt="Always use image alt"
        aspectRatio="4-3"
        size="medium"
      />
      <FlexItem size="half">
        <Flex direction="column" gap="600">
          {children}
        </Flex>
      </FlexItem>
    </Panel>
  ),
});

figma.connect(Panel, "<FIGMA_URL_PANEL_DEFAULT_INVERSE>", {
  props: {
    children: figma.children(["Text Content Heading", "Text"]),
  },
  example: ({ children }) => (
    <Panel>
      <FlexItem size="half">
        <Flex direction="column" gap="600">
          {children}
        </Flex>
      </FlexItem>
      <Image
        src="https://placehold.co/560x320"
        alt="Always use image alt"
        aspectRatio="4-3"
        size="medium"
      />
    </Panel>
  ),
});

figma.connect(Panel, "<FIGMA_URL_PANEL_IMAGES>", {
  example: () => (
    <Panel>
      <Image
        src="https://placehold.co/560x320"
        alt="Always use image alt"
        aspectRatio="4-3"
        size="medium"
      />
      <Image
        src="https://placehold.co/560x320"
        alt="Always use image alt"
        aspectRatio="4-3"
        size="medium"
      />
    </Panel>
  ),
});

figma.connect(Panel, "<FIGMA_URL_PANEL_IMAGE>", {
  example: () => (
    <Panel>
      <FlexItem size="full">
        <Image
          src="https://placehold.co/1200x320"
          alt="Always use image alt"
          aspectRatio="fill"
          size="medium"
        />
      </FlexItem>
    </Panel>
  ),
});
