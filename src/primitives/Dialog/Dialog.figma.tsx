import figma from "@figma/code-connect";
import { Text, TextHeading } from "primitives";
import { Dialog } from "./Dialog";

figma.connect(Dialog, "<FIGMA_URL_DIALOG>", {
  props: {
    type: figma.enum("Type", { Card: "card", Sheet: "sheet" }),
    body: figma.string("Body"),
    heading: figma.string("Heading"),
    buttons: figma.children("Button Group"),
  },
  example: ({ heading, type, body, buttons }) => (
    <Dialog type={type}>
      <TextHeading>{heading}</TextHeading>
      <Text>{body}</Text>
      {buttons}
    </Dialog>
  ),
});
