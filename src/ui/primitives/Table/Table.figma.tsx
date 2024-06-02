import figma from "@figma/code-connect";
import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHead,
  TableRow,
} from "./Table";

figma.connect(TableCell, "<FIGMA_URL_TABLE_CELL>", {
  props: {
    text: figma.string("Text"),
  },
  example: ({ text }) => <TableCell>{text}</TableCell>,
});

figma.connect(TableColumn, "<FIGMA_URL_TABLE_HEADER>", {
  props: {
    text: figma.string("Text"),
  },
  example: ({ text }) => <TableColumn>{text}</TableColumn>,
});

figma.connect(TableRow, "<FIGMA_URL_TABLE_ROW>", {
  props: {
    children: figma.children(["Table Cell", "Table Header"]),
  },
  example: ({ children }) => <TableRow>{children}</TableRow>,
});

figma.connect(Table, "<FIGMA_URL_TABLE>", {
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
