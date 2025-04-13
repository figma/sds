import clsx from "clsx";
import { ComponentPropsWithoutRef, CSSProperties } from "react";
import "./grid.css";

export type GridProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * Grid template columns
   */
  columns?: string;
  /**
   * Grid template rows
   */
  rows?: string;
  /**
   * Gap between grid items
   */
  gap?: "100" | "200" | "300" | "400" | "600" | "800" | "1200" | "1600";
  /**
   * Column gap between grid items
   */
  columnGap?: "100" | "200" | "300" | "400" | "600" | "800" | "1200" | "1600";
  /**
   * Row gap between grid items
   */
  rowGap?: "100" | "200" | "300" | "400" | "600" | "800" | "1200" | "1600";
  /**
   * Grid auto flow direction
   */
  flow?: "row" | "column" | "row dense" | "column dense";
  /**
   * Container with max-width
   */
  container?: boolean;
  /**
   * Alignment of items along inline axis
   */
  justifyItems?: "start" | "end" | "center" | "stretch";
  /**
   * Alignment of items along block axis
   */
  alignItems?: "start" | "end" | "center" | "stretch";
};

export function Grid({
  className,
  columns = "none",
  rows = "none",
  gap,
  columnGap,
  rowGap,
  flow,
  container = false,
  justifyItems = "stretch",
  alignItems = "stretch",
  style = {},
  ...props
}: GridProps) {
  const classNames = clsx(
    className,
    "grid",
    container && "grid-container",
    `grid-justify-items-${justifyItems}`,
    `grid-align-items-${alignItems}`,
    gap && `grid-gap-${gap}`,
    columnGap && `grid-column-gap-${columnGap}`,
    rowGap && `grid-row-gap-${rowGap}`,
    flow && `grid-flow-${flow.replace(" ", "-")}`,
  );

  const gridStyle: CSSProperties = {
    ...style,
    display: "grid",
    gridTemplateColumns: columns,
    gridTemplateRows: rows,
    gap: gap ? `var(--sds-size-space-${gap})` : undefined,
    columnGap: columnGap ? `var(--sds-size-space-${columnGap})` : undefined,
    rowGap: rowGap ? `var(--sds-size-space-${rowGap})` : undefined,
    justifyItems,
    alignItems,
  };

  return (
    <div
      className={classNames}
      style={gridStyle}
      {...props}
    />
  );
}

export type GridItemProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * Grid column position (start / span)
   */
  column?: CSSProperties["gridColumn"];
  /**
   * Grid row position (start / span)
   */
  row?: CSSProperties["gridRow"];
  /**
   * Specific grid area name
   */
  area?: CSSProperties["gridArea"];
};

export function GridItem({ className, column, row, area, style = {}, ...props }: GridItemProps) {
  const classNames = clsx(
    className,
    "grid-item",
  );

  const gridItemStyle: CSSProperties = { ...style, };
  if (column) gridItemStyle.gridColumn = column;
  if (row) gridItemStyle.gridRow = row;
  if (area) gridItemStyle.gridArea = area;

  return (
    <div
      className={classNames}
      style={gridItemStyle}
      {...props}
    />
  );
} 