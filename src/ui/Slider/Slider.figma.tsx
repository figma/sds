import figma from "@figma/code-connect";
import { Slider, SliderField, SliderOutput } from "./Slider";

const FIGMA_URL_SLIDER =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=3734-22471&m=dev";
const FIGMA_URL_SLIDER_FIELD =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=151-9617&t=TKqj6tBszRXBnd3U-11";

figma.connect(Slider, FIGMA_URL_SLIDER, {
  props: {
    isDisabled: figma.boolean("Disabled", {
      true: true,
      false: undefined,
    }),
  },
  example: ({ isDisabled }) => <Slider isDisabled={isDisabled} />,
});

figma.connect(SliderField, FIGMA_URL_SLIDER_FIELD, {
  props: {
    output: figma.boolean("Has Output", {
      true: <SliderOutput />,
      false: undefined,
    }),
    label: figma.children("Label"),
    description: figma.children("Description"),
  },
  example: ({ output, label, description }) => (
    <SliderField>
      {output}
      {label}
      {description}
    </SliderField>
  ),
});
