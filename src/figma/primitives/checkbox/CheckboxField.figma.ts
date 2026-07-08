// url=<FIGMA_INPUTS_CHECKBOX_FIELD>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Checkbox/Checkbox.tsx
// component=CheckboxField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getString("Label");
const description = instance.getBoolean("Has Description", {
  true: instance.getString("Description"),
  false: undefined,
});
const defaultSelected = instance.getEnum("Value Type", {
  Checked: true,
  Indeterminate: true,
});
const isIndeterminate = instance.getEnum("Value Type", {
  Indeterminate: true,
});
const isDisabled = instance.getEnum("State", { Disabled: true });

export default {
  id: "CheckboxField",
  imports: ['import { CheckboxField } from "primitives";'],
  example: figma.code`<CheckboxField${rp("label", label)}${rp("description", description)}${defaultSelected ? " defaultSelected" : ""}${isIndeterminate ? " isIndeterminate" : ""}${isDisabled ? " isDisabled" : ""}/>`,
  metadata: { nestable: true },
};
