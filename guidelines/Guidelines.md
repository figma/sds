# sds-futu Design System Guidelines

## Reading order

Always read first:
- `Guidelines.md` — this file; the main hub and entry point
- `setup.md` — required project configuration, providers, and CSS imports
- `tokens.md` — foundational design tokens (color, typography, spacing)

Read on-demand:
- `components.md` — read BEFORE using any design-system component
- `icon-discovery.md` — read BEFORE using any icons
- `styles.md` — read when building page layouts or applying custom spacing
- `page.md` — read when building a full page

---

## Companion guideline files

These files live alongside `Guidelines.md` in the `/guidelines/` directory and must be consulted for their respective focus areas when building UIs with this design system.

| File | Focus |
|---|---|
| `components.md` | Component imports, props/API surfaces, variants, composition patterns, and usage examples |
| `icon-discovery.md` | Icon naming convention, import path, available sizes, and how to search for icons |
| `tokens.md` | Design tokens, color/typography/shadow/border tokens, theming, and CSS custom properties |
| `styles.md` | Spacing scales, layout primitives, responsive patterns, and CSS methodology |
| `page.md` | How to compose a full page, with an example |
| `setup.md` | Project setup instructions, provider configuration, required CSS imports, and peer dependency requirements |

---

## Quick-start rules

- Import `sds-futu/styles.css` once at the app root — all component styles and tokens live there.
- Import all components and icons from `sds-futu` (single package, no sub-paths for components).
- Use icon components directly with a `size` prop: `<IconX size="20" />`. Never wrap them in `<Icon>`.
- Use `var(--sds-*)` tokens in any custom CSS — never hardcode colors, spacing, or typography values.
- Use `Flex`, `Grid`, and `Section` for layout — do not build layout with raw `<div>` + inline styles.
- Use the `Text*` components for all text — never style raw `<h1>`, `<p>` or `<span>`.
- Wrap the app in `<AllProviders>` — `Header` and some cards need it.
- Components use react-aria: use `onPress` (not `onClick`) and `isDisabled` (not `disabled`).
- Never recreate a component that exists in `sds-futu`. Configure compositions (e.g. `Footer`) with props before composing your own.
- For a boxed form use `FormBox`, not `Form` inside a `Card`.

### Do not use the project's default libraries
This project ships with Tailwind, lucide-react, shadcn/Radix, MUI, emotion and others. Do not use them for UI.
- No Tailwind utility classes. Use SDS layout components and props.
- No `lucide-react` icons. Use SDS `Icon*` components.
- No shadcn, Radix, MUI or emotion components where SDS has an equivalent.

### Missing components
If something isn't in `sds-futu` (e.g. Calendar, Date Picker, AI Chat), compose it from SDS primitives and tokens, and add a code comment `// SDS gap: <what was missing>`.

### Before using an icon
1. Check `icon-discovery.md` for the naming convention and search methodology.
2. Do NOT guess icon names — verify the icon exists in `node_modules/sds-futu/dist/lib/ui/icons/` first.
3. If an icon does not exist, pick a semantically similar verified icon.

## Verifying icons

IMPORTANT: Consult `icon-discovery.md` for how to search for icons and verify they exist. Do NOT guess icon names.

---
