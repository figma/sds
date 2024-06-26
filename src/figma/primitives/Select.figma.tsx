import figma from "@figma/code-connect";
import { Select, SelectField, SelectItem } from "primitives";

figma.connect(Select, "<FIGMA_INPUTS_SELECT_FIELD>", {
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
    defaultSelectedKey: figma.string("Value"),
  },
  example: ({ defaultSelectedKey, ...props }) => (
    <Select defaultSelectedKey={defaultSelectedKey} {...props}>
      <SelectItem>{defaultSelectedKey}</SelectItem>
      <SelectItem>Option 2</SelectItem>
      <SelectItem>Option 3</SelectItem>
      <SelectItem>Option 4</SelectItem>
      <SelectItem>Option 5</SelectItem>
    </Select>
  ),
});

figma.connect(SelectField, "<FIGMA_INPUTS_SELECT_FIELD>", {
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
      Default: "I am a placeholder...",
      Placeholder: figma.string("Value"),
    }),
    defaultSelectedKey: figma.string("Value"),
  },
  example: ({ defaultSelectedKey, ...props }) => (
    <SelectField defaultSelectedKey={defaultSelectedKey} {...props}>
      <SelectItem>{defaultSelectedKey}</SelectItem>
      <SelectItem>Option 2</SelectItem>
      <SelectItem>Option 3</SelectItem>
      <SelectItem>Option 4</SelectItem>
      <SelectItem>Option 5</SelectItem>
    </SelectField>
  ),
});
