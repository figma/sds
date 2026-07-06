// url=<FIGMA_INPUTS_SLIDER_FIELD>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Slider/Slider.tsx
// component=SliderField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const isDisabled = instance.getEnum("State", { Disabled: true });
const label = instance.getString("Label");
const description = instance.getBoolean("Has Description", {
  true: instance.getString("Description"),
  false: undefined,
});

export default {
  id: "SliderField",
  imports: ['import { SliderField } from "primitives";'],
  example: figma.code`<SliderField${isDisabled ? " isDisabled" : ""}${rp("label", label)}${rp("description", description)} showOutput/>`,
  metadata: { nestable: true },
};
