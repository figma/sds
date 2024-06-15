import figma from "@figma/code-connect";
import { RadioField, RadioGroup } from "./Radio";

figma.connect(RadioField, "<FIGMA_URL_RADIO>", {
  props: {
    isDisabled: figma.enum("State", {
      "Checked Disabled": true,
      Disabled: true,
    }),
  },
  example: ({ isDisabled }) => (
    <RadioField isDisabled={isDisabled} value="unique-value" />
  ),
});

figma.connect(RadioField, "<FIGMA_URL_RADIOFIELD>", {
  props: {
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    isDisabled: figma.enum("State", { Disabled: true }),
  },
  example: ({ label, description, isDisabled }) => (
    <RadioField
      value="Initial value"
      label={label}
      description={description}
      isDisabled={isDisabled}
    />
  ),
});

figma.connect(RadioGroup, "<FIGMA_URL_RADIOGROUP>", {
  props: { children: figma.children(["Radio Field"]) },
  example: ({ children }) => <RadioGroup>{children}</RadioGroup>,
});
