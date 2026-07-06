// url=<FIGMA_INPUTS_SEARCH>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Search/Search.tsx
// component=Search

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const value = instance.getEnum("Value Type", {
  Default: instance.getString("Value"),
});
const placeholder = instance.getEnum("Value Type", {
  Default: "Placeholder here...",
  Placeholder: instance.getString("Value"),
});
const disabled = instance.getEnum("State", { Disabled: true });

export default {
  id: "Search",
  imports: ['import { Search } from "primitives";'],
  example: figma.code`<Search${rp("value", value)}${rp("placeholder", placeholder)}${disabled ? " disabled" : ""}/>`,
  metadata: { nestable: true },
};
