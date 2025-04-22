import figma from "@figma/code-connect";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogModal,
  DialogTitle,
} from "primitives";

figma.connect(Dialog, "<FIGMA_DIALOG_DIALOG_BODY>", {
  props: {
    type: figma.enum("Type", { Card: "card", Sheet: "sheet" }),
    body: figma.string("Body"),
    heading: figma.string("Heading"),
    buttons: figma.children("Button Group"),
  },
  example: ({ heading, body, buttons, ...props }) => (
    <Dialog {...props}>
      <DialogClose onPress={() => {}} />
      <DialogTitle>{heading}</DialogTitle>
      <DialogBody>{body}</DialogBody>
      {buttons}
    </Dialog>
  ),
});

figma.connect(Dialog, "<FIGMA_DIALOG_DIALOG>", {
  props: {
    children: figma.children("Dialog Body"),
  },
  example: ({ children }) => (
    <DialogModal isDismissable isOpen={true} onOpenChange={() => {}}>
      {children}
    </DialogModal>
  ),
});
