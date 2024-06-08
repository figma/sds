import figma from "@figma/code-connect";
import { Dialog } from "./Dialog";

figma.connect(Dialog, "<FIGMA_URL_DIALOG>", {
  props: {
    description: figma.children("Text"),
    title: figma.children("Text Heading"),
    buttons: figma.children(["Button Group"]),
  },
  example: ({ title, description, buttons }) => (
    <Dialog>
      {title}
      {description}
      {buttons}
    </Dialog>
  ),
});
