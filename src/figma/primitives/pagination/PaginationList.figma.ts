// url=<FIGMA_PAGINATION_PAGINATION_LIST>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationList

import figma from "figma"

const children = figma.properties.children([
  "Pagination Page",
  "Pagination Gap",
])

export default {
  id: "PaginationList",
  imports: ['import { PaginationList } from "primitives";'],
  example: figma.code`<PaginationList>${children}</PaginationList>`,
  metadata: { nestable: true },
}
