import { useState } from "@storybook/preview-api";
import type { Meta, StoryObj } from "@storybook/react";
import { IconTrash } from "icons";
import { Flex } from "layout";
import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableColumnProps,
  TableHead,
  TableRow,
  Tag,
} from "primitives";
import { SortDescriptor } from "react-stately";

const meta: Meta<typeof Table> = {
  component: Table,
  title: "SDS Primitives/Table",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Table>;

export const StoryTable: Story = {
  name: "Table",
  args: {
    selectionMode: "none",
    sortDescriptor: { column: "one", direction: "ascending" },
  },
  argTypes: {
    selectionMode: {
      control: "select",
      options: ["none", "single", "multiple"],
    },
  },
  render: ({ ...args }) => {
    return (
      <Table aria-label="Files" {...args}>
        <TableHead>
          <TableColumn isRowHeader>Name</TableColumn>
          <TableColumn>Type</TableColumn>
          <TableColumn>Date Modified</TableColumn>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Games</TableCell>
            <TableCell>File folder</TableCell>
            <TableCell>6/7/2020</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Program Files</TableCell>
            <TableCell>File folder</TableCell>
            <TableCell>4/7/2021</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>bootmgr</TableCell>
            <TableCell>System file</TableCell>
            <TableCell>11/20/2010</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
};

export const StoryTableComplex: Story = {
  name: "Table Complex",
  args: {
    bleed: false,
    grid: false,
    striped: false,
    dense: false,
  },
  render: ({ ...props }) => {
    const users = [
      { handle: "@porkyp", name: "Porky Pig", access: "admin" },
      { handle: "@bugzy", name: "Bugs Bunny", access: "admin" },
      { handle: "@realdaffyduck", name: "Daffy Duck", access: "user" },
    ];
    return (
      <Table {...props}>
        <TableHead>
          <TableColumn isRowHeader>Name</TableColumn>
          <TableColumn>Handle</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.handle} href="#">
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.handle}</TableCell>
              <TableCell>
                <Tag color={user.access === "user" ? "warning" : "danger"}>
                  {user.access}
                </Tag>
              </TableCell>
              <TableCell>
                <Flex alignPrimary="end" gap="200" alignSecondary="center">
                  <Button size="small" variant="neutral">
                    View
                  </Button>
                  <IconButton size="small" aria-label="Trash icon">
                    <IconTrash />
                  </IconButton>
                </Flex>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  },
};

export const StoryTableSorting: Story = {
  name: "Table Sorting",
  args: {},
  render: () => {
    const [sortDescriptor, updateSortDescriptor] = useState<SortDescriptor>({
      column: "date",
      direction: "ascending",
    });
    type Key = "name" | "type" | "date";
    const columns: ({ name: string; id: Key } & TableColumnProps)[] = [
      { name: "Name", id: "name", isRowHeader: true, allowsSorting: true },
      { name: "Type", id: "type", allowsSorting: true },
      { name: "Date Modified", id: "date", allowsSorting: true },
    ];

    const rows: ({ id: number } & { [K in Key]: string })[] = [
      { id: 1, name: "Games", date: "6/7/2020", type: "File folder" },
      { id: 2, name: "Program Files", date: "4/7/2021", type: "File folder" },
      { id: 3, name: "bootmgr", date: "11/20/2010", type: "System file" },
      { id: 4, name: "log.txt", date: "1/18/2016", type: "Text Document" },
    ];

    return (
      <Table
        aria-label="Files"
        onSortChange={(a) => console.log(a, updateSortDescriptor(a))}
        sortDescriptor={sortDescriptor}
      >
        <TableHead columns={columns}>
          {(column) => (
            <TableColumn
              isRowHeader={column.isRowHeader}
              allowsSorting={column.allowsSorting}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHead>
        <TableBody items={rows}>
          {(item) => (
            <TableRow columns={columns}>
              {(column) => (
                <TableCell id={column.id}>{item[column.id]}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  },
};
