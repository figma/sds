import figma from "@figma/code-connect";
import { RadioField, RadioGroup } from "./Radio";

const FIGMA_URL_RADIO =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1204";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=31-5522"
const FIGMA_URL_RADIOFIELD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1412";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=31-6975"
const FIGMA_URL_RADIOGROUP =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1200";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=31-6393"

figma.connect(RadioField, FIGMA_URL_RADIO, {
  props: {
    isDisabled: figma.enum("State", {
      "Checked Disabled": true,
      Disabled: true,
    }),
  },
  example: ({ isDisabled }) => (
    <RadioField isDisabled={isDisabled} value="unique-value" />
  ),
});

figma.connect(RadioField, FIGMA_URL_RADIOFIELD, {
  props: {
    children: figma.children(["Radio", "Label", "Description"]),
    isDisabled: figma.enum("State", { Disabled: true }),
  },
  example: ({ children, isDisabled }) => (
    <RadioField value="Initial value" isDisabled={isDisabled}>
      {children}
    </RadioField>
  ),
});

figma.connect(RadioGroup, FIGMA_URL_RADIOGROUP, {
  props: { children: figma.children(["Radio Field"]) },
  example: ({ children }) => <RadioGroup>{children}</RadioGroup>,
});
