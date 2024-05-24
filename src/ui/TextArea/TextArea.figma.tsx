import figma from "@figma/code-connect";
import { TextArea, TextAreaField } from "./TextArea";

const FIGMA_URL_TEXT_AREA =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:1135";
const FIGMA_URL_TEXT_AREA_FIELD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=9762-3088&m=dev";

figma.connect(TextArea, FIGMA_URL_TEXT_AREA, {
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

figma.connect(TextAreaField, FIGMA_URL_TEXT_AREA_FIELD, {
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    children: figma.children([
      "Label",
      "Text Area",
      "Description",
      "Error Message",
    ]),
  },
  example: ({ children }) => <TextAreaField>{children}</TextAreaField>,
});
