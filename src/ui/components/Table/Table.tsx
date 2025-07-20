import { clsx } from "clsx";
import { Checkbox } from "components";
import { IconChevronDown, IconChevronUp } from "icons";
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
import css from "./Table.module.css";

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
  ...props
}: TableProps) {
  const classNames = clsx(
    css.root,
    bleed && css.bleed,
    dense && css.dense,
    grid && css.grid,
    striped && css.striped,
  );
  return <RACTable className={classNames} {...props} />;
}

export type TableColumnProps = RACColumnProps & {
  align?: TableAlign;
};

export function TableColumn({ align = "start", ...props }: TableColumnProps) {
  const classNames = clsx(
    css.column,
    css[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
  );
  return (
    <RACColumn className={classNames} {...props}>
      {({ allowsSorting, sortDirection }) => (
        <div className={css.columnInner}>
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
export function TableBody<T extends object>({ ...props }: TableBodyProps<T>) {
  return <RACTableBody {...props} />;
}

export type TableHeadProps<T> = RACTableHeaderProps<T>;
export function TableHead<T extends object>({
  columns,
  children,
  ...props
}: TableHeadProps<T>) {
  const { selectionBehavior, selectionMode, allowsDragging } =
    useTableOptions();
  return (
    <RACTableHeader className={css.head} {...props}>
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
  ...otherProps
}: TableRowProps<T>) {
  const { selectionBehavior, allowsDragging } = useTableOptions();
  return (
    <RACRow id={id} {...otherProps} className={css.row}>
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
export function TableCell({ align = "start", ...props }: TableCellProps) {
  const classNames = clsx(
    css.cell,
    css[`align${align.charAt(0).toUpperCase() + align.slice(1)}`],
  );
  return <RACCell className={classNames} {...props} />;
}
