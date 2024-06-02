import figma from "@figma/code-connect";
import { Field } from "../Fieldset/Fieldset";
import { TextArea } from "./TextArea";

figma.connect(TextArea, "<FIGMA_URL_TEXT_AREA>", {
  props: {
    value: figma.enum("Value Type", {
      Default: figma.string("Value"),
      Placeholder: "",
    }),
    placeholder: figma.enum("Value Type", {
      Default: "Placeholder here...",
      Placeholder: figma.string("Value"),
    }),
    disabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({ value, placeholder, disabled }) => (
    <TextArea placeholder={placeholder} disabled={disabled}>
      {value}
    </TextArea>
  ),
});

// TODO: Use Text Area Field
figma.connect(Field, "<FIGMA_URL_TEXT_AREA_FIELD>", {
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    children: figma.children([
      "Label",
      "Text Area",
      "Description",
      "Error Message",
    ]),
  },
  example: ({ children }) => <Field>{children}</Field>,
});
