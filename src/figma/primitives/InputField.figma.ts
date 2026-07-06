// url=<FIGMA_INPUTS_INPUT_FIELD>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Input/Input.tsx
// component=InputField

import figma from "figma";

const instance = figma.selectedInstance;
const hasLabel = instance.getPropertyValue("Has Label");

const isDisabled = instance.getEnum("State", { Disabled: true });
const value = instance.getEnum("Value Type", {
  Default: instance.getString("Value"),
});
const placeholder = instance.getEnum("Value Type", {
  default: "I am a placeholder...",
  Placeholder: instance.getString("Value"),
});
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

const rp = figma.helpers.react.renderProp;
const imports = hasLabel
  ? ['import { InputField } from "primitives";']
  : ['import { Input } from "primitives";'];

export default {
  id: "InputField",
  imports,
  example: figma.code`<${hasLabel ? "InputField" : "Input"}${isDisabled ? " isDisabled" : ""}${rp("errorMessage", errorMessage)}${rp("label", label)}${rp("description", description)}${rp("value", value)}${rp("placeholder", placeholder)}/>`,
  metadata: { nestable: true },
};
