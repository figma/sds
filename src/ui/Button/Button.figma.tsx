import figma from "@figma/code-connect";
import { Button, ButtonGroup } from "./Button";

const FIGMA_URL_BUTTON =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:426";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=2-6"
const FIGMA_URL_BUTTON_GROUP =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2072-9432&t=4T0FUMZf0IfQUWoa-11";

figma.connect(Button, FIGMA_URL_BUTTON, {
  props: {
    label: figma.string("Label"),
    iconStart: figma.boolean("Has Icon Start", {
      true: figma.instance("Icon Start"),
      false: undefined,
    }),
    iconEnd: figma.boolean("Has Icon End", {
      true: figma.instance("Icon End"),
      false: undefined,
    }),
    isDisabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({ isDisabled, label, iconEnd, iconStart }) => (
    <Button onPress={() => {}} isDisabled={isDisabled}>
      {iconStart}
      {label}
      {iconEnd}
    </Button>
  ),
});

figma.connect(ButtonGroup, FIGMA_URL_BUTTON_GROUP, {
  props: {
    align: figma.enum("Align", {
      Center: "center",
      End: "end",
      Justify: "justify",
    }),
    children: figma.children("Button"),
  },
  example: ({ children, align }) => (
    <ButtonGroup align={align}>{children}</ButtonGroup>
  ),
});
