import { figma } from "@figma/code-connect";
import { FormBox } from "compositions";
import { Flex } from "layout";
import { Form } from "primitives";

figma.connect(FormBox, "<FIGMA_FORMS_FORM_LOG_IN>", {
  props: {
    children: figma.children(["Input Field", "Button Group", "Text Link"]),
  },
  example: ({ children }) => <FormBox onSubmit={() => {}}>{children}</FormBox>,
});

figma.connect(FormBox, "<FIGMA_FORMS_FORM_CONTACT>", {
  props: {
    children: figma.children(["Input Field", "Textarea Field", "Button Group"]),
  },
  example: ({ children }) => <FormBox onSubmit={() => {}}>{children}</FormBox>,
});

figma.connect(FormBox, "<FIGMA_FORMS_FORM_REGISTER>", {
  props: {
    children: figma.children(["Input Field", "Checkbox Field", "Button Group"]),
  },
  example: ({ children }) => <FormBox onSubmit={() => {}}>{children}</FormBox>,
});

figma.connect(FormBox, "<FIGMA_FORMS_FORM_NEWSLETTER>", {
  props: { children: figma.children(["Input Field", "Button"]) },
  example: ({ children }) => (
    <Form singleLine onSubmit={() => {}}>
      {children}
    </Form>
  ),
});

figma.connect(FormBox, "<FIGMA_FORMS_FORM_FORGOT_PASSWORD>", {
  props: { children: figma.children(["Input Field", "Button Group"]) },
  example: ({ children }) => <FormBox onSubmit={() => {}}>{children}</FormBox>,
});

figma.connect(FormBox, "<FIGMA_FORMS_FORM_SHIPPING>", {
  props: {
    legend: figma.children(["Text"]), // "Form Legend" no longer exists! waiting for that to be a new component.
    children: figma.children([
      "Input Field",
      "Select Field",
      "Textarea Field",
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
