// url=<FIGMA_PAGINATION_PAGINATION_NEXT>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationNext

import figma from "figma"

const href = figma.selectedInstance.getEnum("State", {
  Default: "?next",
  Hover: "?next",
})

export default {
  id: "PaginationNext",
  imports: ['import { PaginationNext } from "primitives";'],
  example: figma.code`<PaginationNext${href ? ` href="${href}"` : ""}/>`,
  metadata: { nestable: true },
}
