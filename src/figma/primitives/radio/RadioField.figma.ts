// url=<FIGMA_INPUTS_RADIO_FIELD>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Radio/Radio.tsx
// component=RadioField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getString("Label");
const description = instance.getBoolean("Has Description", {
  true: instance.getString("Description"),
  false: undefined,
});
const isDisabled = instance.getEnum("State", { Disabled: true });

export default {
  id: "RadioField",
  imports: ['import { RadioField } from "primitives";'],
  example: figma.code`<RadioField value="Initial value"${rp("label", label)}${rp("description", description)}${isDisabled ? " isDisabled" : ""}/>`,
  metadata: { nestable: true },
};
