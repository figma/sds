import figma from "@figma/code-connect";
import { SwitchField } from "primitives";

figma.connect(SwitchField, "<FIGMA_INPUTS_SWITCH_FIELD>", {
  props: {
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    defaultSelected: figma.enum("Value Type", {
      Checked: true,
    }),
    isDisabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({ ...props }) => <SwitchField {...props} />,
});
