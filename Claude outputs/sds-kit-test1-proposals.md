# Kit test 1 — proposed fixes (1 Oct 2026)

Source: Make agent's review of a test page (contact card, footer). All claims checked against `sds-futu` source.

## Make agent's findings — verified
| Issue | Cause in kit code | Verdict |
|---|---|---|
| Contact card: no space between fields | `.form` has no gap; only `.form-single-line` has one (12px). `FormBox` adds 24px gap + border + padding | Correct |
| Footer links underlined | `.text-body-link.link { text-decoration: underline }` — every `TextLink` is underlined, including in link lists | Correct |
| Footer social icons shown as text | `Footer` hardcodes X / Instagram / YouTube / LinkedIn as `TextLink`s. `SocialButtons` exists but Footer doesn't use it. Footer takes no content props | Correct |
| Open question: does `Section variant="stroke"` add other borders? | Top border if not first child, bottom border if not last. As the last section it draws only a top border | Answered: top only |

Extra bug found: 6 CSS tokens used by components but never defined (fail silently):
`--sds-color-bg-default-default` (FormBox background), `--sds-color-background-default-hover` (Table), `--sds-font-body` (TextListItem), `--sds-font-input` (Text), `--sds-size-stroke-brand` (Cards), `--sds-typography-body-weight-strong` (Avatar).

## Package — sds-futu 0.2.0
1. **Footer configurable.** Allow `variant`; add `social` (default `<SocialButtons />`) and `columns` (title + links) props. Default content matches the Figma Footer: Logo + SocialButtons + 3 columns.
2. **No underline in link lists.** `.text-link-list .link { text-decoration: none }`. Inline `TextLink` stays underlined.
3. **SocialButtons configurable.** Optional `links` prop; current four as default.
4. **Fix the 6 undefined tokens** (map to existing tokens).
5. **Form spacing (decide).** Option A: default column gap on `.form` (24px). Option B: leave and document. A is friendlier; check Storybook for regressions.
6. Code Connect: add `Footer` / `SocialButtons` props to the template; republish.

## Guidelines
- `components.md` → Forms: "`Form` adds no space between fields. For a boxed/card form use `FormBox`. Otherwise wrap fields in `Flex direction="column" gap="600"`."
- `components.md` → Links: "`TextLink` = links inside body text (underlined). `Link` = navigation, lists, footers (no underline)."
- `components.md` → Footer/Header: describe props after 0.2.0. Until then: "Footer is fixed demo content. For a custom footer compose `Section` + `Logo` + `SocialButtons` + `TextLinkList` + `Link`, and mark `// SDS gap`."
- `components.md` → Section: "`variant="stroke"` draws a border between neighbouring sections (top unless first, bottom unless last)."
- `Guidelines.md` rule: "Compositions (Header, Footer, cards) contain demo content. Check their props in `node_modules/sds-futu/dist/lib/ui/compositions` before using; if they can't show what the design needs, compose from primitives."
