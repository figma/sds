import { clsx } from "clsx";
import { IconChevronDown, IconChevronUp } from "icons";
import { Checkbox } from "primitives";
import {
  Button as RACButton,
  Cell as RACCell,
  Collection as RACCollection,
  Column as RACColumn,
  Row as RACRow,
  Table as RACTable,
  TableBody as RACTableBody,
  TableHeader as RACTableHeader,
  useTableOptions,
  type CellProps as RACCellProps,
  type ColumnProps as RACColumnProps,
  type RowProps as RACRowProps,
  type TableBodyProps as RACTableBodyProps,
  type TableHeaderProps as RACTableHeaderProps,
  type TableProps as RACTableProps,
} from "react-aria-components";
import "./table.css";

type TableAlign = "start" | "center" | "right";

export type TableProps = RACTableProps & {
  bleed?: boolean;
  dense?: boolean;
  grid?: boolean;
  striped?: boolean;
};
export function Table({
  bleed = false,
  dense = false,
  grid = false,
  striped = false,
  className,
  ...props
}: TableProps) {
  const classNames = clsx(
    className,
    "table",
    bleed && "table-bleed",
    dense && "table-dense",
    grid && "table-grid",
    striped && "table-striped",
  );
  return <RACTable className={classNames} {...props} />;
}

export type TableColumnProps = RACColumnProps & {
  align?: TableAlign;
};
export function TableColumn({
  align = "start",
  className,
  ...props
}: TableColumnProps) {
  const classNames = clsx(className, "table-column", `table-align-${align}`);
  return (
    <RACColumn className={classNames} {...props}>
      {({ allowsSorting, sortDirection }) => (
        <div className={clsx("table-column-inner")}>
          <>
            {props.children}
            {allowsSorting && (
              <span aria-hidden="true" className="sort-indicator">
                {sortDirection === "ascending" ? (
                  <IconChevronUp />
                ) : (
                  <IconChevronDown />
                )}
              </span>
            )}
          </>
        </div>
      )}
    </RACColumn>
  );
}

export type TableBodyProps<T> = RACTableBodyProps<T>;
export function TableBody<T extends object>({
  className,
  ...props
}: TableBodyProps<T>) {
  return <RACTableBody {...props} />;
}

export type TableHeadProps<T> = RACTableHeaderProps<T>;
export function TableHead<T extends object>({
  className,
  columns,
  children,
  ...props
}: TableHeadProps<T>) {
  const { selectionBehavior, selectionMode, allowsDragging } =
    useTableOptions();
  const classNames = clsx(className, "table-head");
  return (
    <RACTableHeader className={classNames} {...props}>
      {/* Add extra columns for drag and drop and selection. */}
      {allowsDragging && <TableColumn />}
      {selectionBehavior === "toggle" && (
        <TableColumn>
          {selectionMode === "multiple" && <Checkbox slot="selection" />}
        </TableColumn>
      )}
      <RACCollection items={columns}>{children}</RACCollection>
    </RACTableHeader>
  );
}

export type TableRowProps<T> = RACRowProps<T>;
export function TableRow<T extends object>({
  id,
  columns,
  children,
  className,
  ...otherProps
}: TableRowProps<T>) {
  const { selectionBehavior, allowsDragging } = useTableOptions();
  const classNames = clsx(className, "table-row");
  return (
    <RACRow id={id} {...otherProps} className={classNames}>
      {allowsDragging && (
        <TableCell>
          <RACButton slot="drag">≡</RACButton>
        </TableCell>
      )}
      {selectionBehavior === "toggle" && (
        <TableCell>
          <Checkbox slot="selection" />
        </TableCell>
      )}
      <RACCollection items={columns}>{children}</RACCollection>
    </RACRow>
  );
}

export type TableCellProps = RACCellProps & { align?: TableAlign };
export function TableCell({
  align = "start",
  className,
  ...props
}: TableCellProps) {
  const classNames = clsx(className, "table-cell", `table-align-${align}`);
  return <RACCell className={classNames} {...props} />;
}
