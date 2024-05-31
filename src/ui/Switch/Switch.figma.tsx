import figma from "@figma/code-connect";
import { Switch, SwitchField, SwitchGroup } from "./Switch";

figma.connect(SwitchGroup, "<FIGMA_URL_SWITCH_GROUP>", {
  props: { children: figma.children("Switch Field") },
  example: ({ children }) => <SwitchGroup>{children}</SwitchGroup>,
});

figma.connect(Switch, "<FIGMA_URL_SWITCH_FIELD>", {
  props: {
    children: figma.children(["Label", "Switch", "Description"]),
    isDisabled: figma.enum("Type", {
      "Default Disabled": true,
      "Label Only Disabled": true,
    }),
  },
  example: ({ children, isDisabled }) => (
    <SwitchField isDisabled={isDisabled}>{children}</SwitchField>
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
