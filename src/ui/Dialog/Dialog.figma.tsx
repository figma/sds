import figma from "@figma/code-connect";
import {
  Dialog,
  DialogActions,
  DialogBody,
  DialogDescription,
  DialogTitle,
} from "./Dialog";

const FIGMA_URL_DIALOG =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762-696";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=15-8469"

figma.connect(Dialog, FIGMA_URL_DIALOG, {
  props: {
    body: figma.boolean("Dialog Body", {
      true: <DialogBody>Something here!</DialogBody>,
      false: undefined,
    }),
    description: figma.string("Description"),
    title: figma.string("Title"),
    layout: figma.enum("Layout", {
      Desktop: "desktop",
      Mobile: "mobile",
    }),
    actions: figma.children(["Button"]),
  },
  example: ({ title, description, body, actions }) => (
    <Dialog>
      <DialogTitle>{title}</DialogTitle>

      <DialogDescription>{description}</DialogDescription>

      {body}

      <DialogActions>{actions}</DialogActions>
    </Dialog>
  ),
});
