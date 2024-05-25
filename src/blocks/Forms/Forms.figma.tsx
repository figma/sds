import { figma } from "@figma/code-connect";
import { Card, Flow, Form, Layout } from "ui";

// Shipping Form
figma.connect(
  Layout,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=9762-3140&t=qJR3PLmBgMwoBka4-11",
  {
    props: {
      children: figma.children([
        "Legend",
        "Description",
        "Input Field",
        "Select Field",
        "Text Area Field",
        "Switch Field",
        "Checkbox Field",
        "Button Group",
      ]),
    },
    example: ({ children }) => (
      <Card variant="padded">
        <Flow gap="sm">{children}</Flow>
      </Card>
    ),
  },
);

// Contact Form
figma.connect(
  Layout,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=56-15992&t=qJR3PLmBgMwoBka4-11",
  {
    props: {
      children: figma.children([
        "Input Field",
        "Text Area Field",
        "Button Group",
      ]),
    },
    example: ({ children }) => (
      <Card variant="padded">
        <Flow gap="sm">{children}</Flow>
      </Card>
    ),
  },
);

// Newsletter Form
figma.connect(
  Form,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=56-15991&t=qJR3PLmBgMwoBka4-11",
  {
    props: {
      children: figma.children(["Input Field", "Button"]),
    },
    example: ({ children }) => <Form singleLine>{children}</Form>,
  },
);

// Log in Form
figma.connect(
  Layout,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2143-14838&t=qJR3PLmBgMwoBka4-11",
  {
    props: {
      children: figma.children(["Input Field", "Button Group"]),
    },
    example: ({ children }) => (
      <Card variant="padded">
        <Flow gap="sm">{children}</Flow>
      </Card>
    ),
  },
);

// Register Form
figma.connect(
  Layout,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2143-14829&t=qJR3PLmBgMwoBka4-11",
  {
    props: {
      children: figma.children([
        "Input Field",
        "Checkbox Field",
        "Button Group",
      ]),
    },
    example: ({ children }) => (
      <Card variant="padded">
        <Flow gap="sm">{children}</Flow>
      </Card>
    ),
  },
);

// Forgot Password Form
figma.connect(
  Layout,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2143-14939&t=qJR3PLmBgMwoBka4-11",
  {
    props: {
      children: figma.children(["Input Field", "Button Group"]),
    },
    example: ({ children }) => (
      <Card variant="padded">
        <Flow gap="sm">{children}</Flow>
      </Card>
    ),
  },
);
