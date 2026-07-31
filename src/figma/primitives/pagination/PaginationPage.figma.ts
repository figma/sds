// url=<FIGMA_PAGINATION_PAGINATION_PAGE>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationPage

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const number = instance.getString("Number");
const current = instance.getEnum("State", {
  Current: true,
  "Current Hover": true,
});
const href = instance.getString("Href");

export default {
  id: "PaginationPage",
  imports: ['import { PaginationPage } from "primitives";'],
  example: figma.code`<PaginationPage
      ${rp("current", current)}
      ${rp("href", href)}
    >
      ${number}
    </PaginationPage>`,
  metadata: { nestable: true },
};
