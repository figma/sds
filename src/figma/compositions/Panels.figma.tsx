import { figma } from "@figma/code-connect";
import { Panel } from "compositions";
import { placeholder } from "images";
import { Flex, FlexItem, Section } from "layout";
import { Image } from "primitives";

figma.connect(Panel, "<FIGMA_SECTIONS_PANEL_IMAGE_CONTENT>", {
  props: {
    padding: figma.enum("Platform", { Desktop: "1600", Mobile: "600" }),
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
    children: figma.children(["Text Content Heading", "Text"]),
  },
  example: ({ padding, gap, children }) => (
    <Section padding={padding}>
      <Panel gap={gap} type="half">
        <Image
          src={placeholder}
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
    </Section>
  ),
});

figma.connect(Panel, "<FIGMA_SECTIONS_PANEL_IMAGE_CONTENT_REVERSE>", {
  props: {
    padding: figma.enum("Platform", { Desktop: "1600", Mobile: "600" }),
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
    children: figma.children(["Text Content Heading", "Text"]),
  },
  example: ({ padding, gap, children }) => (
    <Section padding={padding}>
      <Panel gap={gap} type="half">
        <FlexItem size="half">
          <Flex direction="column" gap="600">
            {children}
          </Flex>
        </FlexItem>
        <Image
          src={placeholder}
          alt="Always use image alt"
          aspectRatio="4-3"
          size="medium"
        />
      </Panel>
    </Section>
  ),
});

figma.connect(Panel, "<FIGMA_SECTIONS_PANEL_IMAGE_DOUBLE>", {
  props: {
    padding: figma.enum("Platform", { Desktop: "1600", Mobile: "600" }),
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
  },
  example: ({ padding, gap }) => (
    <Section padding={padding}>
      <Panel gap={gap} type="half">
        <Image
          src={placeholder}
          alt="Always use image alt"
          aspectRatio="4-3"
          size="medium"
        />
        <Image
          src={placeholder}
          alt="Always use image alt"
          aspectRatio="4-3"
          size="medium"
        />
      </Panel>
    </Section>
  ),
});

figma.connect(Panel, "<FIGMA_SECTIONS_PANEL_IMAGE>", {
  props: {
    padding: figma.enum("Platform", { Desktop: "1600", Mobile: "600" }),
  },
  example: ({ padding }) => (
    <Section padding={padding}>
      <Panel type="auto">
        <FlexItem size="full">
          <Image
            src={placeholder}
            alt="Always use image alt"
            aspectRatio="fill"
            size="medium"
          />
        </FlexItem>
      </Panel>
    </Section>
  ),
});
