import figma from "@figma/code-connect";
import { DestructiveIconButton, IconButton } from "./IconButton";

const sharedProps = {
  icon: figma.instance("Icon"),
  isDisabled: figma.enum("State", {
    Disabled: true,
  }),
  size: figma.enum("Size", {
    sm: "sm",
  }),
  variant: figma.enum("Variant", {
    Secondary: "secondary",
    Stroke: "stroke",
    Subtle: "subtle",
  }),
};

figma.connect(IconButton, "<FIGMA_URL_ICON_BUTTON>", {
  variant: {
    Scheme: "Default",
  },
  props: sharedProps,
  example: ({ isDisabled, icon, size, variant }) => (
    <IconButton
      aria-label="Write a nice description of the action."
      onPress={() => {}}
      size={size}
      variant={variant}
      isDisabled={isDisabled}
    >
      {icon}
    </IconButton>
  ),
});

figma.connect(DestructiveIconButton, "<FIGMA_URL_ICON_BUTTON>", {
  variant: {
    Scheme: "Danger",
  },
  props: sharedProps,
  example: ({ isDisabled, size, icon }) => (
    <DestructiveIconButton
      aria-label="Write a nice description of the action."
      onPress={() => {}}
      size={size}
      isDisabled={isDisabled}
    >
      {icon}
    </DestructiveIconButton>
  ),
});
