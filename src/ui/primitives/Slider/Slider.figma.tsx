import figma from "@figma/code-connect";
import { Slider, SliderField } from "./Slider";

figma.connect(Slider, "<FIGMA_URL_SLIDER>", {
  props: {
    isDisabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({ isDisabled }) => <Slider isDisabled={isDisabled} />,
});

figma.connect(SliderField, "<FIGMA_URL_SLIDER_FIELD>", {
  props: {
    label: figma.children("Label"),
    description: figma.children("Description"),
  },
  example: ({ label, description }) => (
    <SliderField showOutput>
      {label}
      {description}
    </SliderField>
  ),
});
