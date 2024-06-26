import figma from "@figma/code-connect";
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "primitives";

figma.connect(PaginationPage, "<FIGMA_PAGINATION_PAGINATION_PAGE>", {
  props: {
    number: figma.string("Number"),
    current: figma.enum("State", {
      Current: true,
      "Current Hover": true,
    }),
    href: figma.string("Number"),
  },
  example: ({ number, ...props }) => (
    <PaginationPage {...props}>{number}</PaginationPage>
  ),
});

figma.connect(PaginationGap, "<FIGMA_PAGINATION_PAGINATION_GAP>");

figma.connect(PaginationPrevious, "<FIGMA_PAGINATION_PAGINATION_PREVIOUS>", {
  props: {
    href: figma.enum("State", { Default: "?previous", Hover: "?previous" }),
  },
  example: ({ ...props }) => <PaginationPrevious {...props} />,
});

figma.connect(PaginationNext, "<FIGMA_PAGINATION_PAGINATION_NEXT>", {
  props: {
    href: figma.enum("State", { Default: "?next", Hover: "?next" }),
  },
  example: ({ ...props }) => <PaginationNext {...props} />,
});

figma.connect(PaginationList, "<FIGMA_PAGINATION_PAGINATION_LIST>", {
  props: {
    children: figma.children(["Pagination Page", "Pagination Gap"]),
  },
  example: ({ children }) => <PaginationList>{children}</PaginationList>,
});

figma.connect(Pagination, "<FIGMA_PAGINATION_PAGINATION>", {
  props: {
    children: figma.children([
      "Pagination Previous",
      "Pagination List",
      "Pagination Next",
    ]),
  },
  example: ({ children }) => <Pagination>{children}</Pagination>,
});
