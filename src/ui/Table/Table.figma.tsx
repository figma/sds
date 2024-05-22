import figma from "@figma/code-connect";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHead,
  TableRow,
} from "./Table";

const FIGMA_URL_TABLECELL =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:911";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=33-3147"
const FIGMA_URL_TABLEHEADER =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:936";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=33-3211"
const FIGMA_URL_TABLEROW =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:961";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=33-3192"
const FIGMA_URL_TABLE =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=9762:987";
// "https://www.figma.com/file/4HOiV2Yd9xDbTnp0j8hU6m?node-id=36-1326"

figma.connect(TableCell, FIGMA_URL_TABLECELL, {
  props: {
    text: figma.string("Text"),
  },
  example: ({ text }) => <TableCell>{text}</TableCell>,
});

figma.connect(TableColumn, FIGMA_URL_TABLEHEADER, {
  props: {
    text: figma.string("Text"),
  },
  example: ({ text }) => <TableColumn>{text}</TableColumn>,
});

figma.connect(TableRow, FIGMA_URL_TABLEROW, {
  props: {
    children: figma.children(["Table Cell", "Table Header"]),
  },
  example: ({ children }) => <TableRow>{children}</TableRow>,
});

figma.connect(Table, FIGMA_URL_TABLE, {
  props: {
    dense: figma.boolean("Dense"),
    grid: figma.boolean("Grid"),
    striped: figma.boolean("Striped"),
    body: figma.children("Table Row"),
    head: figma.children("Table Head Row"),
  },
  example: ({ body, head, dense, grid, striped }) => (
    <Table dense={dense} grid={grid} striped={striped}>
      <TableHead>{head}</TableHead>
      <TableBody>{body}</TableBody>
    </Table>
  ),
});
