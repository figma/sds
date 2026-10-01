# Layout

## Section — page band
`<Section padding="600|800|1200|1600|4000" variant="brand|neutral|stroke|subtle">`
- Every page is a stack of `Section`s. Use `variant="image" src="..."` for an image background.
- `elementType="header|footer"` for semantic tags.

## Flex — rows and columns
`<Flex direction="row|column" gap="100…1600" alignPrimary alignSecondary wrap container type="quarter|third|half|auto">`
- `container` centres content at the max page width. Use it on the top-level Flex inside each Section.
- `type` sets equal child widths (e.g. `type="third"` = 3 per row) and is responsive.
- Wrap a child in `<FlexItem size=...>` only when it needs its own width.

## Grid — 2D layouts
`<Grid columns="repeat(3, 1fr)" gap="600" container>` with optional `<GridItem column="span 2">`.

## Responsive
Use `useMediaQuery()` → `{ isMobile, isTablet, isDesktop }` to switch prop values, e.g. smaller `padding` and `gap` on mobile.

## Don't
- Don't add wrapper `<div>`s with custom flex/grid CSS.
- Don't use margins for spacing between siblings. Use `gap`.
