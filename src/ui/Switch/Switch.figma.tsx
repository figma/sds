import figma from "@figma/code-connect";
import { Switch, SwitchField, SwitchGroup } from "./Switch";

figma.connect(SwitchGroup, "<FIGMA_URL_SWITCH_GROUP>", {
  props: { children: figma.children("Switch Field") },
  example: ({ children }) => <SwitchGroup>{children}</SwitchGroup>,
});

figma.connect(Switch, "<FIGMA_URL_SWITCH_FIELD>", {
  props: {
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    isDisabled: figma.enum("State", { Disabled: true }),
  },
  // TODO: CC NESTED PROPS switch props on field
  example: ({ label, description, isDisabled }) => (
    <SwitchField
      label={label}
      description={description}
      isDisabled={isDisabled}
    />
  ),
});

figma.connect(Switch, "<FIGMA_URL_SWITCH>", {
  props: {
    checked: figma.enum("State", {
      Checked: true,
      "Checked Disabled": true,
    }),
    isDisabled: figma.enum("State", {
      "Checked Disabled": true,
      Disabled: true,
    }),
  },
  example: ({ checked, isDisabled }) => (
    <SwitchField defaultSelected={checked} isDisabled={isDisabled} />
  ),
});
