import figma from "@figma/code-connect";
import { Button, ButtonGroup, DestructiveButton } from "./Button";

const FIGMA_URL_BUTTON =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:426";
const FIGMA_URL_BUTTON_GROUP =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2072-9432&t=4T0FUMZf0IfQUWoa-11";

const sharedProps = {
  label: figma.string("Label"),
  iconStart: figma.boolean("Has Icon Start", {
    true: figma.instance("Icon Start"),
    false: undefined,
  }),
  iconEnd: figma.boolean("Has Icon End", {
    true: figma.instance("Icon End"),
    false: undefined,
  }),
  size: figma.enum("Size", {
    sm: "sm",
  }),
  variant: figma.enum("Variant", {
    Secondary: "secondary",
    Stroke: "stroke",
    Subtle: "subtle",
  }),
  isDisabled: figma.enum("State", {
    Disabled: true,
  }),
};

figma.connect(Button, FIGMA_URL_BUTTON, {
  variant: {
    Scheme: "Default",
  },
  props: sharedProps,
  example: ({ isDisabled, label, size, variant, iconEnd, iconStart }) => (
    <Button
      onPress={() => {}}
      size={size}
      variant={variant}
      isDisabled={isDisabled}
    >
      {iconStart}
      {label}
      {iconEnd}
    </Button>
  ),
});
figma.connect(Button, FIGMA_URL_BUTTON, {
  variant: {
    Scheme: "Danger",
  },
  props: sharedProps,
  example: ({ isDisabled, label, size, iconEnd, iconStart }) => (
    <DestructiveButton onPress={() => {}} size={size} isDisabled={isDisabled}>
      {iconStart}
      {label}
      {iconEnd}
    </DestructiveButton>
  ),
});

figma.connect(ButtonGroup, FIGMA_URL_BUTTON_GROUP, {
  props: {
    align: figma.enum("Align", {
      Center: "center",
      End: "end",
      Justify: "justify",
    }),
    children: figma.children(["Button", "Icon Button"]),
  },
  example: ({ children, align }) => (
    <ButtonGroup align={align}>{children}</ButtonGroup>
  ),
});
