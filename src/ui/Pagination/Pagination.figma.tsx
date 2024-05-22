import figma from "@figma/code-connect";
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "./Pagination";

const FIGMA_URL_PAGINATIONPAGE =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:890";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?&node-id=33-2694"
const FIGMA_URL_PAGINATIONGAP =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:868";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?&node-id=33-2692"
const FIGMA_URL_PAGINATIONPREVIOUS =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:880";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?&node-id=33-2687"
const FIGMA_URL_PAGINATIONNEXT =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:870";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?&node-id=33-2682"
const FIGMA_URL_PAGINATIONLIST =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:903";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?&node-id=36-2725"
const FIGMA_URL_PAGINATION =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:899";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=33-2734"

figma.connect(PaginationPage, FIGMA_URL_PAGINATIONPAGE, {
  props: {
    number: figma.string("Number"),
    current: figma.enum("State", {
      Current: true,
      "Current Hover": true,
    }),
    href: figma.string("Number"),
  },
  example: ({ number, current, href }) => (
    <PaginationPage href={href} current={current}>
      {number}
    </PaginationPage>
  ),
});

figma.connect(PaginationGap, FIGMA_URL_PAGINATIONGAP);

figma.connect(PaginationPrevious, FIGMA_URL_PAGINATIONPREVIOUS, {
  props: {
    href: figma.enum("State", { Default: "?previous", Hover: "?previous" }),
  },
  example: ({ href }) => <PaginationPrevious href={href} />,
});

figma.connect(PaginationNext, FIGMA_URL_PAGINATIONNEXT, {
  props: {
    href: figma.enum("State", { Default: "?next", Hover: "?next" }),
  },
  example: ({ href }) => <PaginationNext href={href} />,
});

figma.connect(PaginationList, FIGMA_URL_PAGINATIONLIST, {
  props: {
    children: figma.children(["Pagination Page", "Pagination Gap"]),
  },
  example: ({ children }) => <PaginationList>{children}</PaginationList>,
});

figma.connect(Pagination, FIGMA_URL_PAGINATION, {
  props: {
    children: figma.children([
      "Pagination Previous",
      "Pagination List",
      "Pagination Next",
    ]),
  },
  example: ({ children }) => <Pagination>{children}</Pagination>,
});
