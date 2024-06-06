import figma from "@figma/code-connect";
import { Button, ButtonGroup, DestructiveButton } from "./Button";

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
  scheme: figma.enum("Scheme", {
    Neutral: "neutral",
  }),
  size: figma.enum("Size", {
    Small: "sm",
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

figma.connect(Button, "<FIGMA_URL_BUTTON>", {
  props: sharedProps,
  example: ({
    isDisabled,
    label,
    scheme,
    size,
    variant,
    iconEnd,
    iconStart,
  }) => (
    <Button
      onPress={() => {}}
      size={size}
      scheme={scheme}
      variant={variant}
      isDisabled={isDisabled}
    >
      {iconStart}
      {label}
      {iconEnd}
    </Button>
  ),
});
figma.connect(Button, "<FIGMA_URL_BUTTON>", {
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

figma.connect(ButtonGroup, "<FIGMA_URL_BUTTON_GROUP>", {
  props: {
    align: figma.enum("Align", {
      Center: "center",
      End: "end",
      Justify: "justify",
    }),
    children: figma.children(["Button"]),
  },
  example: ({ children, align }) => (
    <ButtonGroup align={align}>{children}</ButtonGroup>
  ),
});
