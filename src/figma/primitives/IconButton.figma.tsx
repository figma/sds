import figma from "@figma/code-connect";
import { IconButton } from "primitives";

const sharedProps = {
  icon: figma.instance("Icon"),
  isDisabled: figma.enum("State", {
    Disabled: true,
  }),
  size: figma.enum("Size", {
    Small: "small",
  }),
};

figma.connect(IconButton, "<FIGMA_BUTTONS_ICON_BUTTON>", {
  props: {
    ...sharedProps,
    variant: figma.enum("Variant", {
      Primary: "primary",
      Neutral: "neutral",
      Subtle: "subtle",
    }),
  },
  example: ({ icon, ...props }) => (
    <IconButton
      aria-label="Write a nice description of the action."
      onPress={() => {}}
      {...props}
    >
      {icon}
    </IconButton>
  ),
});
