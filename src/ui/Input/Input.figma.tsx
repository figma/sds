import figma from "@figma/code-connect";
import { Input } from "./Input";

const FIGMA_URL_INPUT =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:850";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=29-1447"

figma.connect(Input, FIGMA_URL_INPUT, {
  props: {
    value: figma.enum("Value Type", {
      Default: figma.string("Value"),
      Placeholder: "",
    }),
    placeholder: figma.enum("Value Type", {
      Default: "Placeholder here...",
      Placeholder: figma.string("Value"),
    }),
    isDisabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({ value, placeholder, isDisabled }) => (
    <Input value={value} placeholder={placeholder} disabled={isDisabled} />
  ),
});
