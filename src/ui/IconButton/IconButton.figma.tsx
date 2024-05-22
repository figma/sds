import figma from "@figma/code-connect";
import { IconButton } from "./IconButton";

const FIGMA_URL_ICON_BUTTON =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=11-11508";

figma.connect(IconButton, FIGMA_URL_ICON_BUTTON, {
  props: {
    icon: figma.instance("Icon"),
    isDisabled: figma.enum("State", {
      Disabled: true,
    }),
  },
  example: ({ isDisabled, icon }) => (
    <IconButton
      aria-label="Write a nice description of the action."
      onPress={() => {}}
      isDisabled={isDisabled}
    >
      {icon}
    </IconButton>
  ),
});
