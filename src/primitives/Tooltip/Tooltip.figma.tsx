import figma from "@figma/code-connect";
import { TextSmall, TextStrong } from "primitives/Text/Text";
import { Tooltip } from "./Tooltip";

figma.connect(Tooltip, "<FIGMA_URL_TOOLTIP>", {
  props: {
    body: figma.boolean("Show Body", {
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
  example: ({ placement, title, body }) => (
    <Tooltip placement={placement}>
      <TextStrong>{title}</TextStrong>
      {body}
    </Tooltip>
  ),
});
