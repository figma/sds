import figma from "@figma/code-connect";
import { CheckboxField, CheckboxGroup } from "./Checkbox";

const FIGMA_URL_CHECKBOX =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1454";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=4-7260"
const FIGMA_URL_CHECKBOX_FIELD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1441";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=31-6606"
const FIGMA_URL_CHECKBOX_GROUP =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1426";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=15-8213"

figma.connect(CheckboxField, FIGMA_URL_CHECKBOX, {
  props: {
    checked: figma.enum("State", {
      Checked: true,
      "Checked Disabled": true,
      Indeterminate: true,
    }),
    isIndeterminate: figma.enum("State", {
      Indeterminate: true,
    }),
    isDisabled: figma.enum("State", {
      "Checked Disabled": true,
      Disabled: true,
    }),
  },

  example: ({ checked, isIndeterminate, isDisabled }) => (
    <CheckboxField
      defaultSelected={checked}
      isDisabled={isDisabled}
      isIndeterminate={isIndeterminate}
    />
  ),
});

figma.connect(CheckboxField, FIGMA_URL_CHECKBOX_FIELD, {
  props: {
    children: figma.children(["Checkbox", "Label", "Description"]),
    isDisabled: figma.enum("State", { Disabled: true }),
  },
  example: ({ children, isDisabled }) => (
    <CheckboxField isDisabled={isDisabled}>{children}</CheckboxField>
  ),
});

figma.connect(CheckboxGroup, FIGMA_URL_CHECKBOX_GROUP, {
  props: { children: figma.children(["Checkbox Field"]) },
  example: ({ children }) => <CheckboxGroup>{children}</CheckboxGroup>,
});
