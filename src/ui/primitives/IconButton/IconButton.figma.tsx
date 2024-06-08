import figma from "@figma/code-connect";
import { IconButton } from "./IconButton";

const sharedProps = {
  icon: figma.instance("Icon"),
  isDisabled: figma.enum("State", {
    Disabled: true,
  }),
  scheme: figma.enum("Scheme", {
    Neutral: "neutral",
  }),
  size: figma.enum("Size", {
    Small: "small",
  }),
};

figma.connect(IconButton, "<FIGMA_URL_ICON_BUTTON>", {
  props: {
    ...sharedProps,
    variant: figma.enum("Variant", {
      Primary: "primary",
      Neutral: "neutral",
      Subtle: "subtle",
    }),
  },
  example: ({ isDisabled, icon, size, variant }) => (
    <IconButton
      aria-label="Write a nice description of the action."
      onPress={() => {}}
      variant={variant}
      size={size}
      isDisabled={isDisabled}
    >
      {icon}
    </IconButton>
  ),
});
