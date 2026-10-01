# Tokens

All tokens are CSS custom properties prefixed `--sds-`. Use semantic tokens in components and custom CSS. Never use primitive colour tokens (`--sds-color-gray-*`, `--sds-color-blue-*`, ...) directly.

## Colour — `--sds-color-{role}-{intent}-{level}`
- Roles: `background`, `text`, `icon`, `border`
- Intents: `default`, `brand`, `neutral`, `positive`, `warning`, `danger`, `disabled`, `utilities`
- Levels: `default`, `secondary`, `tertiary`, plus `hover`, `on-{intent}` (for content on a filled background)

Examples:
- Page background: `--sds-color-background-default-default`
- Card/raised surface: `--sds-color-background-default-secondary`
- Body text: `--sds-color-text-default-default`; muted text: `--sds-color-text-default-secondary`
- Text on a brand fill: `--sds-color-text-brand-on-brand`
- Divider/outline: `--sds-color-border-default-default`
- Error text: `--sds-color-text-danger-default`

Decision: is it a fill → `background`; text → `text`; icon → `icon`; outline → `border`. Then pick the intent by meaning, not by colour.

## Spacing — `--sds-size-space-{n}`
`0, 050 (2px), 100 (4), 150 (6), 200 (8), 300 (12), 400 (16), 600 (24), 800 (32), 1200 (48), 1600 (64), 2400 (96), 4000 (160)`
Layout props (`gap`, `padding`) take the number only, e.g. `gap="400"`.

## Radius — `--sds-size-radius-{n}`
`100 (4px)`, `200 (8px)`, `400 (16px)`, `full`

## Stroke
`--sds-size-stroke-border` (1px), `--sds-size-stroke-focus-ring` (2px)

## Typography
Use the `Text*` components. They apply the type tokens for you:
`TextTitleHero` > `TextTitlePage` > `TextSubtitle` > `TextHeading` > `TextSubheading` > `Text` > `TextSmall`
Also: `TextStrong`, `TextEmphasis`, `TextCode`, `TextLink`, `TextPrice`, `TextList`, `TextContentTitle` (title + subtitle block), `TextContentHeading`.
Font: Inter (sans), Noto Serif, Roboto Mono.
