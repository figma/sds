import { figma } from "@figma/code-connect";
import { Card } from "compositions";
import { Flex, FlexItem, Section } from "layout";
import { Image } from "ui";

figma.connect(Section, "<FIGMA_URL_SECTION_PAGE_ACCORDION>", {
  props: {
    title: figma.children("Text Content Heading"),
    children: figma.children("Accordion"),
    padding: figma.enum("Platform", { Desktop: "1600", Mobile: "600" }),
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
  },
  example: ({ title, children, gap, padding }) => (
    <Section padding={padding}>
      <Flex container alignSecondary="center" direction="column" gap={gap}>
        {title}
        <FlexItem>
          <Flex container type="third" alignPrimary="center">
            <FlexItem size="major">{children}</FlexItem>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  ),
});

figma.connect(Section, "<FIGMA_URL_SECTION_PAGE_PRODUCT>", {
  props: {
    textHeading: figma.children("Text Heading"),
    tagAndPrice: figma.children(["Tag", "Text Price"]),
    text: figma.children("Text"),
    fields: figma.children("Select Field"),
    button: figma.children("Button"),
    accordion: figma.children("Accordion"),
    padding: figma.enum("Platform", { Desktop: "1600", Mobile: "600" }),
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
  },
  example: ({
    textHeading,
    tagAndPrice,
    text,
    fields,
    button,
    accordion,
    gap,
    padding,
  }) => (
    <Section padding={padding}>
      <Flex container type="half" wrap gap={gap}>
        <Image
          src="https://placehold.co/600/f0f0f0/ddd?text=SDS"
          alt="Always use image alt"
          size="large"
          aspectRatio="4-3"
        />
        <FlexItem size="half">
          <Flex direction="column" gap="600" alignSecondary="stretch">
            {textHeading}
            <FlexItem>
              <Flex direction="column" gap="200">
                {tagAndPrice}
              </Flex>
            </FlexItem>
            {text}
            <FlexItem>
              <Flex wrap type="half" gap="200">
                {fields}
              </Flex>
            </FlexItem>
            {button}
            {accordion}
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  ),
});

figma.connect(Section, "<FIGMA_URL_SECTION_PAGE_NEWSLETTER>", {
  props: {
    children: figma.children(["Text Content Heading", "Newsletter"]),
    padding: figma.enum("Platform", { Desktop: "1600", Mobile: "600" }),
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
  },
  example: ({ children, gap, padding }) => (
    <Section padding={padding}>
      <Flex container wrap gap={gap} alignPrimary="center">
        {children}
      </Flex>
    </Section>
  ),
});

figma.connect(Section, "<FIGMA_URL_SECTION_PAGE_PRODUCT_RESULTS>", {
  props: {
    controls: figma.children(["Search", "Tag Toggle Group"]),
    cards: figma.children(["Product Info Card"]),
    padding: figma.enum("Platform", { Desktop: "1600", Mobile: "600" }),
    gap: figma.enum("Platform", { Desktop: "1200", Mobile: "600" }),
    majorSize: figma.enum("Platform", { Desktop: "major", Mobile: "full" }),
    aside: figma.enum("Platform", {
      // prettier-ignore
      Desktop: <FlexItem size="minor"><Card variant="stroke">{figma.children(["Text", "Tag", "Checkbox Group", "Slider Field"])}</Card></FlexItem>,
      Mobile: undefined,
    }),
  },
  example: ({ aside, controls, cards, gap, padding, majorSize }) => (
    <Section padding={padding}>
      <Flex container wrap type="quarter" gap={gap}>
        {aside}
        <FlexItem size={majorSize}>
          <Flex direction="column" gap={gap} alignSecondary="stretch">
            <Flex type="auto" alignPrimary="space-between" wrap gap="600">
              {controls}
            </Flex>
            <Flex type="third" wrap gap="600">
              {cards}
            </Flex>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  ),
});
