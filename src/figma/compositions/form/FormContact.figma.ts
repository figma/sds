// url=<FIGMA_FORMS_FORM_CONTACT>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Forms/Forms.tsx
// component=FormBox

import figma from "figma"

const children = figma.properties.children([
  "Input Field",
  "Textarea Field",
  "Button Group",
])

export default {
  id: "FormBox",
  imports: ['import { FormBox } from "compositions";'],
  example: figma.code`<FormBox onSubmit={() => { }}>${children}</FormBox>`,
  metadata: { nestable: true },
}
