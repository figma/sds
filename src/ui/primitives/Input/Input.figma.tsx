import figma from "@figma/code-connect";
import { Field } from "../Fieldset/Fieldset";
import { Input } from "./Input";

figma.connect(Input, "<FIGMA_URL_INPUT>", {
  props: {
    value: figma.enum("Value Type", {
      Default: figma.string("Value"),
    }),
    placeholder: figma.enum("Value Type", {
      Default: "Placeholder here...",
      Placeholder: figma.string("Value"),
    }),
    isDisabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({ value, placeholder, isDisabled }) => (
    <Input value={value} placeholder={placeholder} disabled={isDisabled} />
  ),
});

// TODO: Use Text Field
figma.connect(Field, "<FIGMA_URL_INPUT_FIELD>", {
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    children: figma.children([
      "Label",
      "Input",
      "Description",
      "Error Message",
    ]),
  },
  example: ({ children }) => <Field>{children}</Field>,
});
