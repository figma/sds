# Styling

This project includes Tailwind and other libraries by default. Do not use them for SDS screens.

## Rules
- Do not use Tailwind utility classes (`className="flex p-4 text-gray-500"`). Use SDS layout components and props instead.
- Do not use `lucide-react` icons. Use SDS icons (`IconArrowRight`, `IconSearch`, ...) from `"sds-futu"`.
- Do not use MUI, Radix, shadcn, emotion or styled components to build UI that SDS already provides.
- Prefer component props over custom CSS. Most layout needs are covered by `Section`, `Flex`, `Grid` props.
- When custom CSS is unavoidable, put it in a `.css` file and use only `var(--sds-*)` tokens. See `tokens.md`.

## Example
```css
/* Good */
.summary { padding: var(--sds-size-space-400); border-radius: var(--sds-size-radius-200); background: var(--sds-color-background-default-secondary); }

/* Bad — raw values */
.summary { padding: 16px; border-radius: 8px; background: #f5f5f5; }
```
