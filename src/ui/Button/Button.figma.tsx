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
  size: figma.enum("Size", {
    Small: "small",
  }),
  isDisabled: figma.enum("State", {
    Disabled: true,
  }),
};

figma.connect(Button, "<FIGMA_URL_BUTTON>", {
  props: {
    ...sharedProps,
    variant: figma.enum("Variant", {
      Primary: "primary",
      Neutral: "neutral",
      Subtle: "subtle",
    }),
  },
  example: ({ isDisabled, label, size, variant, iconEnd, iconStart }) => (
    <Button
      onPress={() => {}}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
    >
      {iconStart}
      {label}
      {iconEnd}
    </Button>
  ),
});
figma.connect(Button, "<FIGMA_URL_BUTTON_DANGER>", {
  props: {
    ...sharedProps,
    variant: figma.enum("Variant", {
      Subtle: "danger-subtle",
    }),
  },
  example: ({ isDisabled, variant, label, size, iconEnd, iconStart }) => (
    <DestructiveButton
      onPress={() => {}}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
    >
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
      Stack: "stack",
    }),
    children: figma.children(["Button"]),
  },
  example: ({ children, align }) => (
    <ButtonGroup align={align}>{children}</ButtonGroup>
  ),
});
