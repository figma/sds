// url=<FIGMA_FORMS_FORM_SLOT>
// source=https://github.com/ThomasFuturice/sds-futu/blob/main/src/ui/compositions/Forms/Forms.tsx
// component=FormBox

import figma from "figma"

const children = figma.properties.children([
  "Input Field",
  "Textarea Field",
  "Select Field",
  "Checkbox Field",
  "Radio Group",
  "Switch Field",
  "Button Group",
])

export default {
  id: "FormSlot",
  imports: ['import { FormBox } from "sds-futu";'],
  example: figma.code`<FormBox onSubmit={() => {}}>${children}</FormBox>`,
  metadata: { nestable: true },
}
