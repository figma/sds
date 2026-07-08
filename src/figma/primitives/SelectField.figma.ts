// url=<FIGMA_INPUTS_SELECT_FIELD>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Select/Select.tsx
// component=SelectField

import figma from "figma";

const instance = figma.selectedInstance;
const hasLabel = instance.getPropertyValue("Has Label");

const rp = figma.helpers.react.renderProp;

const isDisabled = instance.getEnum("State", { Disabled: true });
const value = instance.getEnum("Value Type", {
  Default: instance.getString("Value"),
});
const placeholder = instance.getEnum(
  "Value Type",
  hasLabel
    ? {
        Default: "I am a placeholder...",
        Placeholder: instance.getString("Value"),
      }
    : {
        default: "I am a placeholder...",
        Placeholder: instance.getString("Value"),
      },
);
const defaultSelectedKey = instance.getString("Value");
const errorMessage = hasLabel
  ? instance.getEnum("State", { Error: instance.getString("Error") })
  : undefined;
const label = hasLabel ? instance.getString("Label") : undefined;
const description = hasLabel
  ? instance.getBoolean("Has Description", {
      true: instance.getString("Description"),
      false: undefined,
    })
  : undefined;

const imports = hasLabel
  ? ['import { SelectField, SelectItem } from "primitives";']
  : ['import { Select, SelectItem } from "primitives";'];

export default {
  id: "SelectField",
  imports,
  example: figma.code`<${hasLabel ? "SelectField" : "Select"}${rp("defaultSelectedKey", defaultSelectedKey)}${isDisabled ? " isDisabled" : ""}${rp("errorMessage", errorMessage)}${rp("label", label)}${rp("description", description)}${rp("value", value)}${rp("placeholder", placeholder)}>
      <SelectItem>${defaultSelectedKey}</SelectItem>
      <SelectItem>Option 2</SelectItem>
      <SelectItem>Option 3</SelectItem>
      <SelectItem>Option 4</SelectItem>
      <SelectItem>Option 5</SelectItem>
    </${hasLabel ? "SelectField" : "Select"}>`,
  metadata: { nestable: true },
};
