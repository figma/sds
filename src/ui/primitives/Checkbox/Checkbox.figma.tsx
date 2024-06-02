import figma from "@figma/code-connect";
import { CheckboxField, CheckboxGroup } from "./Checkbox";

figma.connect(CheckboxField, "<FIGMA_URL_CHECKBOX>", {
  props: {
    checked: figma.enum("State", {
      Checked: true,
      "Checked Disabled": true,
      Indeterminate: true,
    }),
    isIndeterminate: figma.enum("State", {
      Indeterminate: true,
    }),
    isDisabled: figma.enum("State", {
      "Checked Disabled": true,
      Disabled: true,
    }),
  },

  example: ({ checked, isIndeterminate, isDisabled }) => (
    <CheckboxField
      defaultSelected={checked}
      isDisabled={isDisabled}
      isIndeterminate={isIndeterminate}
    />
  ),
});

figma.connect(CheckboxField, "<FIGMA_URL_CHECKBOX_FIELD>", {
  props: {
    children: figma.children(["Checkbox", "Label", "Description"]),
    isDisabled: figma.enum("State", { Disabled: true }),
  },
  example: ({ children, isDisabled }) => (
    <CheckboxField isDisabled={isDisabled}>{children}</CheckboxField>
  ),
});

figma.connect(CheckboxGroup, "<FIGMA_URL_CHECKBOX_GROUP>", {
  props: { children: figma.children(["Checkbox Field"]) },
  example: ({ children }) => <CheckboxGroup>{children}</CheckboxGroup>,
});
