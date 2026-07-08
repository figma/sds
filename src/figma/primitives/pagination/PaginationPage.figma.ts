// url=<FIGMA_PAGINATION_PAGINATION_PAGE>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationPage

import figma from "figma"

const number = figma.selectedInstance.getString("Number")
const current = figma.selectedInstance.getEnum("State", {
  Current: true,
  "Current Hover": true,
})
const href = figma.selectedInstance.getString("Number")

export default {
  id: "PaginationPage",
  imports: ['import { PaginationPage } from "primitives";'],
  example: figma.code`<PaginationPage${current ? " current" : ""}${figma.helpers.react.renderProp("href", href)}>${number}</PaginationPage>`,
  metadata: { nestable: true },
}
