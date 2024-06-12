import figma from "@figma/code-connect";
import { Field } from "../Fieldset/Fieldset";
import { Input, InputField } from "./Input";

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

figma.connect(Field, "<FIGMA_URL_INPUT_FIELD>", {
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
    input: figma.children("Input"),
  },
  example: ({ description, label, errorMessage, input }) => (
    <InputField
      label={label}
      description={description}
      errorMessage={errorMessage}
    >
      {input}
    </InputField>
  ),
});
