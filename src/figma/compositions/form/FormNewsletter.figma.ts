// url=<FIGMA_FORMS_FORM_NEWSLETTER>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Forms/Forms.tsx
// component=FormBox

import figma from "figma"

const children = figma.properties.children(["Input Field", "Button"])

export default {
  id: "FormBox",
  imports: ['import { Form } from "primitives";'],
  example: figma.code`<Form singleLine onSubmit={() => { }}>
      ${children}
    </Form>`,
  metadata: { nestable: true },
}
