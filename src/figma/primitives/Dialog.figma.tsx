import figma from "@figma/code-connect";
import { Dialog, Text, TextHeading } from "primitives";

figma.connect(Dialog, "<FIGMA_DIALOG_DIALOG_BODY>", {
  props: {
    type: figma.enum("Type", { Card: "card", Sheet: "sheet" }),
    body: figma.string("Body"),
    heading: figma.string("Heading"),
    buttons: figma.children("Button Group"),
  },
  example: ({ heading, body, buttons, ...props }) => (
    <Dialog {...props}>
      <TextHeading>{heading}</TextHeading>
      <Text>{body}</Text>
      {buttons}
    </Dialog>
  ),
});
