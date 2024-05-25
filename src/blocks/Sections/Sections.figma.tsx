import { figma } from "@figma/code-connect";
import { Flex, Section } from "ui";

figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2142-10483&t=nZCpXAWLyKWF2wPs-11",
  {
    props: { children: figma.children("Text Content Title") },
    example: ({ children }) => (
      <Section padding="lg">
        <Flex container alignPrimary="center">
          {children}
        </Flex>
      </Section>
    ),
  },
);
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2143-15053&m=dev",
  {
    props: { children: figma.children(["Text Content Title", "Button Group"]) },
    example: ({ children }) => (
      <Section padding="lg">
        <Flex container alignPrimary="center">
          {children}
        </Flex>
      </Section>
    ),
  },
);

figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2142-11090&t=nZCpXAWLyKWF2wPs-11",
  {
    props: {
      children: figma.children(["Text Content Title", "Newsletter Form"]),
    },
    example: ({ children }) => (
      <Section padding="lg">
        <Flex container alignPrimary="center">
          {children}
        </Flex>
      </Section>
    ),
  },
);

// TODO: image variant?
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2142-11298&t=nZCpXAWLyKWF2wPs-11",
  {
    props: { children: figma.children(["Text Content Title", "Button Group"]) },
    example: ({ children }) => (
      <Section variant="brand" padding="lg">
        <Flex container alignPrimary="center">
          {children}
        </Flex>
      </Section>
    ),
  },
);

figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2143-13799&m=dev",
  {
    props: {
      children: figma.children(["Text Content Title", "Contact Form"]),
    },
    example: ({ children }) => (
      <Section padding="lg">
        <Flex container alignPrimary="center">
          {children}
        </Flex>
      </Section>
    ),
  },
);

// Section Pricing
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2142-10786&t=nZCpXAWLyKWF2wPs-11",
  {
    props: {
      navigation: figma.children("Navigation"),
      cards: figma.children("Pricing Card"),
    },
    example: ({ navigation, cards }) => (
      <Section variant="secondary" padding="sm">
        <Flex direction="column" gap="xl">
          <Flex container direction="row" alignPrimary="center">
            {navigation}
          </Flex>
          <Flex container alignPrimary="stretch" gap="xl">
            {cards}
          </Flex>
        </Flex>
      </Section>
    ),
  },
);

figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2142-11009&m=dev",
  {
    props: {
      children: figma.children(["Text Content Heading", "Accordion"]),
    },
    example: ({ children }) => (
      <Section padding="sm">
        <Flex direction="column" gap="xl">
          {children}
        </Flex>
      </Section>
    ),
  },
);

figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2143-14417&m=dev",
  {
    props: {
      heading: figma.children("Text Content Heading"),
      cards: figma.children("Card"),
    },
    example: ({ heading, cards }) => (
      <Section padding="sm">
        <Flex direction="column" gap="xl">
          {heading}
          <Flex type="third">{cards}</Flex>
        </Flex>
      </Section>
    ),
  },
);

figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2142-12529&m=dev",
  {
    props: {
      heading: figma.children("Text Content Heading"),
      cards: figma.children("Card"),
    },
    example: ({ heading, cards }) => (
      <Section padding="sm">
        <Flex direction="column" gap="xl">
          {heading}
          <Flex container type="third">
            {cards}
          </Flex>
        </Flex>
      </Section>
    ),
  },
);
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2142-12241&t=nZCpXAWLyKWF2wPs-11",
  {
    props: {
      heading: figma.children("Text Content Heading"),
      cards: figma.children("Card"),
    },
    example: ({ heading, cards }) => (
      <Section padding="sm">
        <Flex direction="column" gap="xl">
          {heading}
          {cards}
        </Flex>
      </Section>
    ),
  },
);

figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2142-10523&t=nZCpXAWLyKWF2wPs-11",
  {
    props: {
      heading: figma.children("Text Content Heading"),
      cards: figma.children("Testimonial Card"),
    },
    example: ({ heading, cards }) => (
      <Section padding="sm">
        <Flex direction="column" gap="xl">
          {heading}
          <Flex container type="third">
            {cards}
          </Flex>
        </Flex>
      </Section>
    ),
  },
);

// Testimonial Grid
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2142-10523&t=nZCpXAWLyKWF2wPs-11",
  {
    props: {
      heading: figma.children("Text Content Heading"),
      cards: figma.children("Testimonial Card"),
    },
    example: ({ heading, cards }) => (
      <Section padding="sm">
        <Flex direction="column" gap="xl">
          {heading}
          <Flex container type="third">
            {cards}
          </Flex>
        </Flex>
      </Section>
    ),
  },
);

// Section Content Grid
figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2143-14658&t=qJR3PLmBgMwoBka4-11",
  {
    props: { children: figma.children("Image Panel") },
    example: ({ children }) => (
      <Section padding="sm">
        <Flex direction="column" gap="xl">
          {children}
        </Flex>
      </Section>
    ),
  },
);
