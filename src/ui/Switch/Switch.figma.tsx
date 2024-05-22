import figma from "@figma/code-connect";
import { Switch, SwitchField, SwitchGroup } from "./Switch";

const FIGMA_URL_SWITCHGROUP =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1921";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=33-2164"
const FIGMA_URL_SWITCHFIELD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1902";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=33-2009"
const FIGMA_URL_SWITCH =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1701";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=33-1119"

figma.connect(SwitchGroup, FIGMA_URL_SWITCHGROUP, {
  props: { children: figma.children("Switch Field") },
  example: ({ children }) => <SwitchGroup>{children}</SwitchGroup>,
});

figma.connect(Switch, FIGMA_URL_SWITCHFIELD, {
  props: {
    children: figma.children(["Label", "Switch", "Description"]),
    isDisabled: figma.enum("Type", {
      "Default Disabled": true,
      "Label Only Disabled": true,
    }),
  },
  example: ({ children, isDisabled }) => (
    <SwitchField isDisabled={isDisabled}>{children}</SwitchField>
  ),
});

figma.connect(Switch, FIGMA_URL_SWITCH, {
  props: {
    checked: figma.enum("State", {
      Checked: true,
      "Checked Disabled": true,
    }),
    isDisabled: figma.enum("State", {
      "Checked Disabled": true,
      Disabled: true,
    }),
  },
  example: ({ checked, isDisabled }) => (
    <SwitchField defaultSelected={checked} isDisabled={isDisabled} />
  ),
});
