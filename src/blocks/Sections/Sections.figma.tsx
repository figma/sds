import { figma } from "@figma/code-connect";
import { Flex, FlexItem, Section } from "../../ui";

// Building Blocks: Section Accordion
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2142:11009",
  {
    props: {
      heading: figma.children("Text Content Heading"),
      children: figma.children("Accordion"),
    },
    example: ({ heading, children }) => (
      <Section padding="md">
        <Flex
          direction="column"
          alignPrimary="center"
          alignSecondary="center"
          type="third"
          gap="xxl"
          wrap
          container
        >
          {heading}
          <FlexItem size="major">{children}</FlexItem>
        </Flex>
      </Section>
    ),
  },
);

// Building Blocks: Section Card Image Grid
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2142:12529",
  {
    props: {
      heading: figma.children("Text Content Heading"),
      children: figma.children("Card"),
    },
    example: ({ heading, children }) => (
      <Section padding="md">
        <Flex direction="column" gap="xxl" container>
          {heading}
          <Flex wrap type="third" gap="xxl">
            {children}
          </Flex>
        </Flex>
      </Section>
    ),
  },
);

// Building Blocks: Section Content List
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2142:12241",
  {
    props: { children: figma.children(["Text Content Heading", "Card"]) },
    example: ({ children }) => (
      <Section padding="md">
        <Flex direction="column" gap="xxl" container>
          {children}
        </Flex>
      </Section>
    ),
  },
);

// Building Blocks: Section Testimonials
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2142:10523",
  {
    props: {
      heading: figma.children("Text Content Heading"),
      children: figma.children("Testimonial Card"),
    },
    example: ({ heading, children }) => (
      <Section padding="md">
        <Flex direction="column" gap="xxl" container>
          {heading}
          <Flex direction="row" type="third" wrap gap="xxl">
            {children}
          </Flex>
        </Flex>
      </Section>
    ),
  },
);

// Building Blocks: Section Card Icon Grid
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2143:14417",
  {
    props: {
      heading: figma.children("Text Content Heading"),
      children: figma.children("Card"),
    },
    example: ({ heading, children }) => (
      <Section padding="md">
        <Flex direction="column" container gap="xxl">
          {heading}
          <Flex type="third" wrap gap="xxl">
            {children}
          </Flex>
        </Flex>
      </Section>
    ),
  },
);

// Building Blocks: Section Image Panel Images
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2143:14658",
  {
    props: { children: figma.children("Image Panel") },
    example: ({ children }) => <Section padding="md">{children}</Section>,
  },
);

// Building Blocks: Section Image Panel Default
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2171:21360",
  {
    props: { children: figma.children(["Image Panel"]) },
    example: ({ children }) => <Section padding="md">{children}</Section>,
  },
);

// Building Blocks: Section Image Panel Swap
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2171:21397",
  {
    props: { children: figma.children(["Image Panel"]) },
    example: ({ children }) => <Section padding="md">{children}</Section>,
  },
);

// Building Blocks: Section Image Panel Image
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2171:21434",
  {
    props: { children: figma.children(["Image Panel"]) },
    example: ({ children }) => <Section padding="md">{children}</Section>,
  },
);

// Building Blocks: Section Hero
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2142:10483",
  {
    props: { children: figma.children(["Text Content Title"]) },
    example: ({ children }) => (
      <Section padding="lg">
        <Flex direction="row" alignPrimary="center" wrap container>
          {children}
        </Flex>
      </Section>
    ),
  },
);

// Building Blocks: Section Hero Actions
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2143:15053",
  {
    props: {
      title: figma.children("Text Content Title"),
      children: figma.children("Button Group"),
    },
    example: ({ title, children }) => (
      <Section padding="lg">
        <Flex
          direction="column"
          gap="xxl"
          alignSecondary="center"
          type="half"
          container
        >
          {title}
          <FlexItem size="major">{children}</FlexItem>
        </Flex>
      </Section>
    ),
  },
);

// Building Blocks: Section Pricing
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2142:10786",
  {
    props: {
      nav: figma.children("Navigation"),
      children: figma.children("Pricing Card"),
    },
    example: ({ nav, children }) => (
      <Section padding="sm" variant="secondary">
        <Flex direction="column" gap="xxl" container>
          <Flex alignPrimary="center">{nav}</Flex>
          <Flex container type="third" gap="xxl" wrap>
            {children}
          </Flex>
        </Flex>
      </Section>
    ),
  },
);

// Building Blocks: Section Hero Newsletter
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2142:11090",
  {
    props: {
      title: figma.children("Text Content Title"),
      children: figma.children("Newsletter Form"),
    },
    example: ({ title, children }) => (
      <Section padding="lg">
        <Flex
          direction="column"
          gap="xxl"
          alignSecondary="center"
          type="quarter"
          container
        >
          {title}
          <FlexItem size="major">{children}</FlexItem>
        </Flex>
      </Section>
    ),
  },
);

// Building Blocks: Section Hero Contact
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2143:13799",
  {
    props: {
      title: figma.children("Text Content Title"),
      children: figma.children("Contact Form"),
    },
    example: ({ title, children }) => (
      <Section padding="lg" variant="brand">
        <Flex
          direction="column"
          type="third"
          alignSecondary="center"
          gap="xxl"
          container
        >
          {title}
          <FlexItem size="minor">{children}</FlexItem>
        </Flex>
      </Section>
    ),
  },
);

// Building Blocks: Footer
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2171:21910",
  {
    props: { children: figma.children(["Standard Footer"]) },
    example: ({ children }) => <>{children}</>,
  },
);

// Building Blocks: Header
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=2171:21984",
  {
    props: { children: figma.children(["Vertical Header"]) },
    example: ({ children }) => <>{children}</>,
  },
);

// figma.currentPage.selection[0].children.map(a => a.name)
figma.connect(
  Flex,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2171-22913&m=dev",
  {
    props: {
      children: figma.children([
        "Header",
        "Section Card Image Grid",
        "Section Hero",
        "Section Hero Actions",
        "Section Hero Newsletter",
        "Section Image Panel Image",
        "Section Image Panel Swap",
        "Section Image Panel Default",
        "Section Image Panel Images",
        "Section Hero Contact",
        "Section Pricing",
        "Section Testimonials",
        "Section Content List",
        "Section Card Icon Grid",
        "Section Accordion",
        "Footer",
      ]),
    },
    example: ({ children }) => <Flex direction="column">{children}</Flex>,
  },
);
