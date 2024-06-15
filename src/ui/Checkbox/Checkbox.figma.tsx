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
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    isDisabled: figma.enum("State", { Disabled: true }),
  },
  // TODO: checkbox props on field
  example: ({ label, description, isDisabled }) => (
    <CheckboxField
      label={label}
      description={description}
      isDisabled={isDisabled}
    />
  ),
});

figma.connect(CheckboxGroup, "<FIGMA_URL_CHECKBOX_GROUP>", {
  props: { children: figma.children(["Checkbox Field"]) },
  example: ({ children }) => <CheckboxGroup>{children}</CheckboxGroup>,
});
