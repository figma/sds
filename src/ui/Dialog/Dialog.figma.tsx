import figma from "@figma/code-connect";
import { Dialog, DialogActions, DialogBody } from "./Dialog";

figma.connect(Dialog, "<FIGMA_URL_DIALOG>", {
  props: {
    body: figma.boolean("Dialog Body", {
      true: <DialogBody>Something here!</DialogBody>,
      false: undefined,
    }),
    description: figma.children("Text"),
    title: figma.children("Text Heading"),
    layout: figma.enum("Layout", {
      Desktop: "desktop",
      Mobile: "mobile",
    }),
    actions: figma.children(["Button"]),
  },
  example: ({ title, description, body, actions }) => (
    <Dialog>
      {title}

      {description}

      {body}

      <DialogActions>{actions}</DialogActions>
    </Dialog>
  ),
});
