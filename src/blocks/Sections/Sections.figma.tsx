import { figma } from "@figma/code-connect";
import { Flow, Section } from "ui";

figma.connect(
  Section,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2142-10483&t=nZCpXAWLyKWF2wPs-11",
  {
    props: { children: figma.children("Text Content Title") },
    example: ({ children }) => (
      <Section padding="xl">
        <Layout alignPrimary="center">{children}</Layout>
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
      <Section padding="xl">
        <Layout alignPrimary="center">{children}</Layout>
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
      <Section padding="xl">
        <Layout alignPrimary="center">{children}</Layout>
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
      <Section variant="brand" padding="xl">
        <Layout alignPrimary="center">{children}</Layout>
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
      <Section padding="xl">
        <Layout alignPrimary="center">{children}</Layout>
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
        <Flow gap="xl">
          <Layout direction="row" alignPrimary="center">
            {navigation}
          </Layout>
          <Layout alignPrimary="stretch" gap="xl">
            {cards}
          </Layout>
        </Flow>
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
        <Flow gap="xl">{children}</Flow>
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
        <Flow gap="xl">
          {heading}
          <Layout type="third">{cards}</Layout>
        </Flow>
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
        <Flow gap="xl">
          {heading}
          <Layout type="third">{cards}</Layout>
        </Flow>
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
        <Flow gap="xl">
          {heading}
          {cards}
        </Flow>
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
        <Flow gap="xl">
          {heading}
          <Layout type="third">{cards}</Layout>
        </Flow>
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
        <Flow gap="xl">
          {heading}
          <Layout type="third">{cards}</Layout>
        </Flow>
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
        <Flow gap="xl">{children}</Flow>
      </Section>
    ),
  },
);
