import figma from "@figma/code-connect";
import { RadioField, RadioGroup } from "primitives";

figma.connect(RadioField, "<FIGMA_INPUTS_RADIO_FIELD>", {
  props: {
    label: figma.string("Label"),
    description: figma.boolean("Has Description", {
      true: figma.string("Description"),
      false: undefined,
    }),
    isDisabled: figma.enum("State", { Disabled: true }),
  },
  example: ({ ...props }) => <RadioField value="Initial value" {...props} />,
});

figma.connect(RadioGroup, "<FIGMA_INPUTS_RADIO_GROUP>", {
  props: { children: figma.children(["Radio Field"]) },
  example: ({ children }) => <RadioGroup>{children}</RadioGroup>,
});
