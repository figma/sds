import { figma } from "@figma/code-connect";
import { Flex } from "layout";
import { Form } from "ui";
import { FormBox } from "./Forms";

figma.connect(FormBox, "<FIGMA_URL_FORM_LOG_IN>", {
  props: {
    children: figma.children(["Input Field", "Button Group", "Text Link"]),
  },
  example: ({ children }) => <FormBox onSubmit={() => {}}>{children}</FormBox>,
});

figma.connect(FormBox, "<FIGMA_URL_FORM_CONTACT>", {
  props: {
    children: figma.children([
      "Input Field",
      "Text Area Field",
      "Button Group",
    ]),
  },
  example: ({ children }) => <FormBox onSubmit={() => {}}>{children}</FormBox>,
});

figma.connect(FormBox, "<FIGMA_URL_FORM_REGISTER>", {
  props: {
    children: figma.children(["Input Field", "Checkbox Field", "Button Group"]),
  },
  example: ({ children }) => <FormBox onSubmit={() => {}}>{children}</FormBox>,
});

figma.connect(FormBox, "<FIGMA_URL_FORM_NEWSLETTER>", {
  props: { children: figma.children(["Input", "Button"]) },
  example: ({ children }) => (
    <Form singleLine onSubmit={() => {}}>
      {children}
    </Form>
  ),
});

figma.connect(FormBox, "<FIGMA_URL_FORM_FORGOT_PASSWORD>", {
  props: { children: figma.children(["Input Field", "Button Group"]) },
  example: ({ children }) => <FormBox onSubmit={() => {}}>{children}</FormBox>,
});

figma.connect(FormBox, "<FIGMA_URL_FORM_SHIPPING>", {
  props: {
    legend: figma.children(["Form Legend", "Text"]),
    children: figma.children([
      "Input Field",
      "Select Field",
      "Text Area Field",
      "Checkbox Field",
      "Button Group",
    ]),
  },
  example: ({ legend, children }) => (
    <FormBox onSubmit={() => {}}>
      <Flex direction="column" gap="100">
        {legend}
      </Flex>
      {children}
    </FormBox>
  ),
});
