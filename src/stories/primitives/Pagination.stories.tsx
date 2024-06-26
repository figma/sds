import type { Meta, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationGap,
  PaginationList,
  PaginationNext,
  PaginationPage,
  PaginationPrevious,
} from "primitives";

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  title: "SDS Primitives/Pagination",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Pagination>;

export const StoryPagination: Story = {
  name: "Pagination",
  args: {},
  render: () => (
    <Pagination>
      <PaginationPrevious />
      <PaginationList>
        <PaginationPage href="?page=1">1</PaginationPage>
        <PaginationPage href="?page=2">2</PaginationPage>
        <PaginationPage href="?page=3" current>
          3
        </PaginationPage>
        <PaginationPage href="?page=4">4</PaginationPage>
        <PaginationGap />
        <PaginationPage href="?page=65">65</PaginationPage>
        <PaginationPage href="?page=66">66</PaginationPage>
      </PaginationList>
      <PaginationNext href="?page=4" />
    </Pagination>
  ),
};
