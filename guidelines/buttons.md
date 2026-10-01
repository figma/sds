# Buttons

## Button
`<Button variant="primary|neutral|subtle" size="medium|small" onPress={...}>Label</Button>`
- `primary` — the one main action in a view. Max one per section.
- `neutral` — secondary actions.
- `subtle` — low-emphasis actions (Cancel, More).
- Pass `href` to render a link that looks like a button.
- Use `onPress`, not `onClick`. Use `isDisabled`, not `disabled`.

## ButtonDanger
`<ButtonDanger variant="danger-primary|danger-subtle">` — destructive actions only (Delete, Remove).

## IconButton
`<IconButton aria-label="Close" variant="subtle"><IconX /></IconButton>` — `aria-label` is required.
`DestructiveIconButton` for destructive icon-only actions.

## ButtonGroup
`<ButtonGroup align="start|end|center|justify|stack">` — always wrap 2+ adjacent buttons. Put the primary action last.

## Icons in buttons
Place a package icon before or after the label: `<Button><IconPlus />Add</Button>`.
