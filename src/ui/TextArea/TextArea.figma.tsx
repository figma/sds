import figma from "@figma/code-connect";
import { TextArea } from "./TextArea";

const FIGMA_URL_TEXTAREA =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1135";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=29-1560"

figma.connect(TextArea, FIGMA_URL_TEXTAREA, {
  props: {
    value: figma.enum("Value Type", {
      Default: figma.string("Value"),
      Placeholder: "",
    }),
    placeholder: figma.enum("Value Type", {
      Default: "Placeholder here...",
      Placeholder: figma.string("Value"),
    }),
    disabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({ value, placeholder, disabled }) => (
    <TextArea placeholder={placeholder} disabled={disabled}>
      {value}
    </TextArea>
  ),
});
