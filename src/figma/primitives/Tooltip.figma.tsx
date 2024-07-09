import figma from "@figma/code-connect";
import { TextSmall, TextStrong, Tooltip } from "primitives";

figma.connect(Tooltip, "<FIGMA_TOOLTIP_TOOLTIP>", {
  props: {
    body: figma.boolean("Has Body", {
      true: <TextSmall>{figma.string("Body")}</TextSmall>,
      false: undefined,
    }),
    title: figma.string("Title"),
    placement: figma.enum("Placement", {
      Bottom: "bottom",
      Top: "top",
      Right: "right",
      Left: "left",
    }),
  },
  example: ({ title, body, ...props }) => (
    <Tooltip {...props}>
      <TextStrong>{title}</TextStrong>
      {body}
    </Tooltip>
  ),
});
