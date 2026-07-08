// url=<FIGMA_INPUTS_TEXTAREA_FIELD>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Textarea/Textarea.tsx
// component=TextareaField

import figma from "figma";

const instance = figma.selectedInstance;
const hasLabel = instance.getPropertyValue("Has Label");

const rp = figma.helpers.react.renderProp;

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

const imports = hasLabel
  ? ['import { TextareaField } from "primitives";']
  : ['import { Textarea } from "primitives";'];

export default {
  id: "TextareaField",
  imports,
  example: figma.code`<${hasLabel ? "TextareaField" : "Textarea"}${isDisabled ? " isDisabled" : ""}${rp("errorMessage", errorMessage)}${rp("label", label)}${rp("description", description)}${rp("value", value)}${rp("placeholder", placeholder)}/>`,
  metadata: { nestable: true },
};
