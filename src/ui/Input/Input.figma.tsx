import figma from "@figma/code-connect";
import { Input, InputField } from "./Input";

const FIGMA_URL_INPUT =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:850";
const FIGMA_URL_INPUT_FIELD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2136-2263&t=piSsjqZPlyn7qp8D-11";

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

figma.connect(InputField, FIGMA_URL_INPUT_FIELD, {
  props: {
    isDisabled: figma.enum("State", { Disabled: true }),
    children: figma.children([
      "Label",
      "Input",
      "Description",
      "Error Message",
    ]),
  },
  example: ({ children }) => <InputField>{children}</InputField>,
});
