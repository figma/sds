// url=<FIGMA_PAGINATION_PAGINATION>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Pagination/Pagination.tsx
// component=Pagination

import figma from "figma"

const children = figma.properties.children([
  "Pagination Previous",
  "Pagination List",
  "Pagination Next",
])

export default {
  id: "Pagination",
  imports: ['import { Pagination } from "primitives";'],
  example: figma.code`<Pagination>${children}</Pagination>`,
  metadata: { nestable: true },
}
