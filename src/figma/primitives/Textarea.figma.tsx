import figma from "@figma/code-connect";
import { Textarea, TextareaField } from "primitives";

figma.connect(Textarea, "<FIGMA_INPUTS_TEXTAREA_FIELD>", {
  variant: { "Has Label": false },
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    value: figma.enum("Value Type", {
      Default: figma.string("Value"),
    }),
    placeholder: figma.enum("Value Type", {
      default: "I am a placeholder...",
      Placeholder: figma.string("Value"),
    }),
  },
  example: ({ ...props }) => <Textarea {...props} />,
});

figma.connect(TextareaField, "<FIGMA_INPUTS_TEXTAREA_FIELD>", {
  variant: { "Has Label": true },
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    errorMessage: figma.enum("State", { Error: figma.string("Error") }),
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    value: figma.enum("Value Type", {
      Default: figma.string("Value"),
    }),
    placeholder: figma.enum("Value Type", {
      default: "I am a placeholder...",
      Placeholder: figma.string("Value"),
    }),
  },
  example: ({ ...props }) => <TextareaField {...props} />,
});
