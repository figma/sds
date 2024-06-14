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
    children: figma.children(["Radio", "Label", "Description"]),
    isDisabled: figma.enum("State", { Disabled: true }),
  },
  example: ({ children, isDisabled }) => (
    <RadioField value="Initial value" isDisabled={isDisabled}>
      {children}
    </RadioField>
  ),
});

figma.connect(RadioGroup, "<FIGMA_URL_RADIOGROUP>", {
  props: { children: figma.children(["Radio Field"]) },
  example: ({ children }) => <RadioGroup>{children}</RadioGroup>,
});
