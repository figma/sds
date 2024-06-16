import figma from "@figma/code-connect";
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "./Pagination";

figma.connect(PaginationPage, "<FIGMA_URL_PAGINATION_PAGE>", {
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

figma.connect(PaginationGap, "<FIGMA_URL_PAGINATION_GAP>");

figma.connect(PaginationPrevious, "<FIGMA_URL_PAGINATION_PREVIOUS>", {
  props: {
    href: figma.enum("State", { Default: "?previous", Hover: "?previous" }),
  },
  example: ({ href }) => <PaginationPrevious href={href} />,
});

figma.connect(PaginationNext, "<FIGMA_URL_PAGINATION_NEXT>", {
  props: {
    href: figma.enum("State", { Default: "?next", Hover: "?next" }),
  },
  example: ({ href }) => <PaginationNext href={href} />,
});

figma.connect(PaginationList, "<FIGMA_URL_PAGINATION_LIST>", {
  props: {
    children: figma.children(["Pagination Page", "Pagination Gap"]),
  },
  example: ({ children }) => <PaginationList>{children}</PaginationList>,
});

figma.connect(Pagination, "<FIGMA_URL_PAGINATION>", {
  props: {
    children: figma.children([
      "Pagination Previous",
      "Pagination List",
      "Pagination Next",
    ]),
  },
  example: ({ children }) => <Pagination>{children}</Pagination>,
});
