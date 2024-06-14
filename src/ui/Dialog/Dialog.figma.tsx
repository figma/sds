import figma from "@figma/code-connect";
import { Dialog } from "./Dialog";

figma.connect(Dialog, "<FIGMA_URL_DIALOG>", {
  props: {
    type: figma.enum("Type", { Card: "card", Sheet: "sheet" }),
    description: figma.children("Text"),
    title: figma.children("Text Heading"),
    buttons: figma.children("Button Group"),
  },
  example: ({ title, type, description, buttons }) => (
    <Dialog type={type}>
      {title}
      {description}
      {buttons}
    </Dialog>
  ),
});
