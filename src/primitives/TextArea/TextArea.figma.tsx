import figma from "@figma/code-connect";
import { Field } from "../Fieldset/Fieldset";
import { TextArea, TextAreaField } from "./TextArea";

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

figma.connect(Field, "<FIGMA_URL_TEXT_AREA_FIELD>", {
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    label: figma.boolean("Has Label", {
      true: figma.string("Label"),
      false: undefined,
    }),
    errorMessage: figma.boolean("Has Error Message", {
      true: figma.string("Error Message"),
      false: undefined,
    }),
  },
  // TODO: CC NESTED PROPS textarea props on field
  example: ({ description, label, errorMessage }) => (
    <TextAreaField
      label={label}
      description={description}
      errorMessage={errorMessage}
    />
  ),
});
