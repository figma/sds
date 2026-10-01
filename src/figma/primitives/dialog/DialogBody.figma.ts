// url=<FIGMA_DIALOG_DIALOG_BODY>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Dialog/Dialog.tsx
// component=Dialog

import figma from "figma"

const instance = figma.selectedInstance
const type = instance.getEnum("Type", {
  Card: "card",
  Sheet: "sheet",
})
const body = instance.getString("Body")
const heading = instance.getString("Heading")
const buttons = figma.properties.children(["Button Group"])

export default {
  id: "Dialog",
  imports: [
    'import { Dialog, DialogBody, DialogClose, DialogTitle } from "sds-futu";',
    'import { Button } from "sds-futu";',
  ],
  example: figma.code`<Dialog type="${type}">
      <DialogClose onPress={() => {}} />
      <DialogTitle>${heading}</DialogTitle>
      <DialogBody>${body}</DialogBody>
      ${buttons}
    </Dialog>`,
  metadata: { nestable: true },
}
