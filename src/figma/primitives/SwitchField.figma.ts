// url=<FIGMA_INPUTS_SWITCH_FIELD>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Switch/Switch.tsx
// component=SwitchField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getString("Label");
const description = instance.getBoolean("Has Description", {
  true: instance.getString("Description"),
  false: undefined,
});
const defaultSelected = instance.getEnum("Value Type", { Checked: true });
const isDisabled = instance.getEnum("State", { Disabled: true });

export default {
  id: "SwitchField",
  imports: ['import { SwitchField } from "primitives";'],
  example: figma.code`<SwitchField${rp("label", label)}${rp("description", description)}${defaultSelected ? " defaultSelected" : ""}${isDisabled ? " isDisabled" : ""}/>`,
  metadata: { nestable: true },
};
