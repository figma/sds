import figma from "@figma/code-connect";
import { SliderField } from "./Slider";

figma.connect(
  SliderField,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=151-9617&t=TKqj6tBszRXBnd3U-11",
  {
    props: {
      showOutput: figma.boolean("Has Output"),
      label: figma.boolean("Has Label", {
        true: "TODO: Get children label value",
        false: undefined,
      }),
      description: figma.boolean("Has Description", {
        true: "TODO: Get children description value",
        false: undefined,
      }),
    },
    example: ({ showOutput, label, description }) => (
      <SliderField
        showOutput={showOutput}
        label={label}
        description={description}
      />
    ),
  },
);
