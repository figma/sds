// url=<FIGMA_FORMS_FORM_SHIPPING>
// source=https://github.com/figma/sds/blob/main/src/ui/compositions/Forms/Forms.tsx
// component=FormBox

import figma from "figma"

const legend = figma.properties.children(["Text"])
const children = figma.properties.children([
  "Input Field",
  "Select Field",
  "Textarea Field",
  "Checkbox Field",
  "Button Group",
])

export default {
  id: "FormBox",
  imports: [
    'import { FormBox } from "compositions";',
    'import { Flex } from "layout";',
  ],
  example: figma.code`<FormBox onSubmit={() => { }}>
      <Flex direction="column" gap="100">
        ${legend}
      </Flex>
      ${children}
    </FormBox>`,
  metadata: { nestable: true },
}
