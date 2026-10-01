# sds-futu Component Usage Guidelines

All components are imported from `sds-futu`. The stylesheet must also be imported once at the app root:

```ts
import { Button, Text, Icon } from 'sds-futu';
import 'sds-futu/styles.css';
```

See `icon-discovery.md` before using any icon. See `tokens.md` for token values referenced in props below.

**Icons:** every `Icon*` component already renders an `<Icon>`. Pass `size` straight to it: `<IconX size="20" />`. Never wrap an icon in `<Icon>` — that nests one `<svg>` inside another.

---

## Layout

### `Flex` / `FlexItem`

Flexbox container with token-based spacing and alignment.

| Prop | Type | Values |
|---|---|---|
| `direction` | string | `"row"` `"row-reverse"` `"column"` `"column-reverse"` |
| `gap` | string | `"100"` `"200"` `"300"` `"400"` `"600"` `"800"` `"1200"` `"1600"` |
| `alignPrimary` | string | `"start"` `"end"` `"center"` `"stretch"` `"space-between"` |
| `alignSecondary` | string | `"start"` `"end"` `"center"` `"stretch"` `"space-between"` |
| `type` | string | `"quarter"` `"third"` `"half"` `"auto"` |
| `container` | boolean | wraps with a centered max-width container |
| `wrap` | boolean | enables `flex-wrap` |

`FlexItem` `size` values: `"full"` `"major"` `"minor"` `"half"` `"fill"`

```tsx
// DO — use gap prop, not inline style
<Flex direction="row" gap="400" alignSecondary="center">
  <FlexItem size="fill"><Text>Label</Text></FlexItem>
  <FlexItem><Button variant="primary">Save</Button></FlexItem>
</Flex>

// DON'T
<Flex style={{ gap: '16px' }}>...</Flex>
```

---

### `Grid` / `GridItem`

CSS Grid with token-based gaps.

| Prop | Type | Notes |
|---|---|---|
| `columns` | string | CSS `grid-template-columns`, e.g. `"repeat(3, 1fr)"` |
| `rows` | string | CSS `grid-template-rows` |
| `gap` | string | Token `"100"`–`"1600"` |
| `columnGap` | string | Token `"100"`–`"1600"` |
| `rowGap` | string | Token `"100"`–`"1600"` |
| `flow` | string | `"row"` `"column"` `"row dense"` `"column dense"` |
| `container` | boolean | centered max-width wrapper |
| `justifyItems` | string | `"start"` `"end"` `"center"` `"stretch"` |
| `alignItems` | string | `"start"` `"end"` `"center"` `"stretch"` |

`GridItem` props: `column` (CSS gridColumn), `row` (CSS gridRow), `area` (CSS gridArea).

```tsx
<Grid columns="repeat(3, 1fr)" gap="600" container>
  <GridItem><Card>...</Card></GridItem>
</Grid>
```

---

### `Section`

Page section with background variants and vertical padding.
`variant="stroke"` draws a 1px border between neighbouring sections: a top border unless it's the first section, a bottom border unless it's the last.

| Prop | Type | Values |
|---|---|---|
| `elementType` | string | `"section"` (default) `"header"` `"footer"` |
| `variant` | string | `"brand"` `"neutral"` `"stroke"` `"subtle"` `"image"` |
| `src` | string | Required when `variant="image"` |
| `padding` | string | `"600"` `"800"` `"1200"` `"1600"` `"4000"` |
| `paddingTop` | string | same as `padding` |
| `paddingBottom` | string | same as `padding` |

```tsx
<Section variant="brand" padding="1200">
  <Grid container columns="repeat(2, 1fr)" gap="800">...</Grid>
</Section>
```

---

## Navigation

### `Navigation` / `NavigationPill` / `NavigationButton`

| Component | Prop | Type | Notes |
|---|---|---|---|
| `Navigation` | `direction` | string | `"row"` `"column"` |
| `NavigationPill` | `isSelected` | boolean | active/current state |
| `NavigationButton` | `isSelected` | boolean | active/current state |
| `NavigationButton` | `icon` | ReactNode | prepended icon |
| `NavigationButton` | `size` | string | `"small"` `"medium"` |
| `NavigationButton` | `direction` | string | `"row"` `"column"` |

Both pill and button accept `href` (renders `<a>`) or `onPress` (renders `<button>`).

```tsx
<Navigation direction="row">
  <NavigationPill href="/home" isSelected>Home</NavigationPill>
  <NavigationPill href="/docs">Docs</NavigationPill>
</Navigation>
```

---

### `Pagination`

```tsx
<Pagination aria-label="Page navigation">
  <PaginationPrevious href="/page/1" />
  <PaginationList>
    <PaginationPage href="/page/1" current>1</PaginationPage>
    <PaginationPage href="/page/2">2</PaginationPage>
    <PaginationGap />
    <PaginationPage href="/page/10">10</PaginationPage>
  </PaginationList>
  <PaginationNext href="/page/3" />
</Pagination>
```

Exports: `Pagination`, `PaginationPrevious`, `PaginationNext`, `PaginationList`, `PaginationPage`, `PaginationGap`

---

## Data Entry

### `Button` / `ButtonDanger` / `ButtonGroup`

| Prop | Type | `Button` variants | `ButtonDanger` variants |
|---|---|---|---|
| `variant` | string | `"primary"` `"neutral"` `"subtle"` | `"danger-primary"` `"danger-subtle"` |
| `size` | string | `"small"` `"medium"` | `"small"` `"medium"` |
| `isDisabled` | boolean | — | — |
| `href` | string | renders as `<a>` | — |
| `onPress` | fn | renders as `<button>` | renders as `<button>` |

`ButtonGroup` prop: `align` → `"start"` `"end"` `"center"` `"justify"` `"stack"`

```tsx
// DO
<ButtonGroup align="end">
  <Button variant="neutral" onPress={onCancel}>Cancel</Button>
  <Button variant="primary" onPress={onSave}>Save</Button>
</ButtonGroup>

// DO — ButtonDanger only for destructive actions
<ButtonDanger variant="danger-primary" onPress={onDelete}>Delete account</ButtonDanger>

// DON'T — ButtonDanger for a normal action
<ButtonDanger variant="danger-primary" onPress={onSave}>Save</ButtonDanger>
```

---

### `IconButton` / `DestructiveIconButton`

Same props as `Button` / `ButtonDanger` but requires `aria-label` (no visible text label).

```tsx
<IconButton aria-label="Close" variant="neutral" onPress={onClose}>
  <IconX size="20" />
</IconButton>
```

---

### `InputField` / `Input`

`InputField` is the full labeled field; `Input` is the bare input element.

| Prop | Type | Notes |
|---|---|---|
| `label` | string | visible label text |
| `description` | string | helper text below field |
| `errorMessage` | string \| fn | validation error message |
| `placeholder` | string | — |
| `isDisabled` | boolean | — |
| `isRequired` | boolean | — |
| `value` | string | controlled |
| `defaultValue` | string | uncontrolled |
| `onChange` | fn | `(value: string) => void` |

```tsx
// DO — use InputField, not bare Input, for form fields
<InputField label="Email" type="email" placeholder="you@example.com" isRequired />
```

---

### `TextareaField` / `Textarea`

Same pattern as `InputField`. Additional prop: `isResizable` (boolean).

---

### `SelectField` / `Select` / `SelectItem`

| Prop | Type | Notes |
|---|---|---|
| `label` | string | — |
| `description` | string | — |
| `errorMessage` | string \| fn | — |
| `items` | Iterable | for dynamic lists |
| `selectedKey` | string \| number | controlled |
| `defaultSelectedKey` | string \| number | uncontrolled |
| `onSelectionChange` | fn | — |

```tsx
<SelectField label="Country">
  <SelectItem id="us">United States</SelectItem>
  <SelectItem id="uk">United Kingdom</SelectItem>
</SelectField>
```

---

### `CheckboxGroup` / `CheckboxField` / `Checkbox`

`CheckboxGroup` wraps multiple `CheckboxField` items with a shared label and error state.

```tsx
<CheckboxGroup label="Interests">
  <CheckboxField value="design" label="Design" />
  <CheckboxField value="code" label="Code" />
</CheckboxGroup>
```

---

### `RadioGroup` / `RadioField` / `Radio`

Same pattern as `CheckboxGroup`. Uncontrolled: `defaultValue`. Controlled: `value` + `onChange`.

```tsx
<RadioGroup label="Plan" defaultValue="pro">
  <RadioField value="free" label="Free" />
  <RadioField value="pro" label="Pro" />
</RadioGroup>
```

---

### `SwitchGroup` / `SwitchField` / `Switch`

```tsx
<SwitchField label="Enable notifications" defaultSelected />
```

---

### `SliderField`

| Prop | Type | Notes |
|---|---|---|
| `label` | string | — |
| `description` | string | — |
| `thumbLabels` | string[] | a11y label per thumb |
| `showOutput` | boolean | shows current value |
| `minValue` | number | — |
| `maxValue` | number | — |
| `step` | number | — |
| `value` | number \| number[] | controlled |
| `defaultValue` | number \| number[] | uncontrolled |

```tsx
<SliderField label="Volume" minValue={0} maxValue={100} defaultValue={50}
  showOutput thumbLabels={["volume"]} />
```

Lower-level exports also available: `Slider`, `SliderTrack`, `SliderThumb`, `SliderOutput`.

---

### `Search`

```tsx
<Search
  placeholder="Search..."
  results={["Result A", "Result B"]}
  onSearch={(q) => fetchResults(q)}
/>
```

---

### `Form` / `Fieldset` / `Legend` / `FieldGroup` / `Field` / `Label` / `Description` / `FieldError`

Use `Form` as the outer wrapper; `Fieldset`/`Legend` for grouped inputs.
- `Form` stacks its fields with a 24px gap. `singleLine` (boolean) puts fields and button in one row (12px gap) — use for newsletter/search.
- For a boxed form (border, 24px padding — e.g. a contact card) use `FormBox` instead of `Form` inside a `Card`. `FormBox` matches the Figma "Form (Slot)" and Form compositions.

```tsx
<Form onSubmit={handleSubmit}>
  <Fieldset>
    <Legend>Personal details</Legend>
    <FieldGroup>
      <InputField label="First name" />
      <InputField label="Last name" />
    </FieldGroup>
  </Fieldset>
  <ButtonGroup align="end">
    <Button variant="primary" type="submit">Submit</Button>
  </ButtonGroup>
</Form>
```

---

### `ListBox` / `ListBoxItem`

Accessible listbox (single/multi select). Built on react-aria-components.

```tsx
<ListBox aria-label="Frameworks" selectionMode="single">
  <ListBoxItem id="react">React</ListBoxItem>
  <ListBoxItem id="vue">Vue</ListBoxItem>
</ListBox>
```

---

## Data Display

### Text components

All accept `elementType` to override the rendered HTML element, and `lineClamp` (number) for truncation. `Text` and `TextSmall` also accept `lineHeight`: `"body"` | `"single"`.

| Component | Semantic use |
|---|---|
| `TextTitleHero` | Page hero headline |
| `TextTitlePage` | Page-level title |
| `TextSubtitle` | Section subtitle |
| `TextHeading` | Section heading |
| `TextSubheading` | Sub-section heading |
| `Text` | Default body text |
| `TextStrong` | Bold body text |
| `TextSmall` | Small body text |
| `TextSmallStrong` | Small bold body text |
| `TextEmphasis` | Italic body text |
| `TextLink` | Inline anchor (requires `href`) |
| `TextCode` | Inline code |
| `TextInput` | Input field text style |
| `TextList` / `TextListItem` | Bulleted text list |
| `TextLinkList` | List of links |
| `TextContentHeading` | Paired heading + subheading block |
| `TextContentTitle` | Paired title + subtitle block |
| `TextPrice` | Price display |

`TextPrice` props: `currency` (string, required), `price` (string, required), `label?` (string), `size?` (`"small"` | `"large"`)

`TextList` props: `title?` (ReactNode), `density?` (`"default"` | `"tight"`)

`TextContentHeading` props: `heading` (string), `subheading?` (string), `align?` (`"start"` | `"center"`)

`TextContentTitle` props: `title` (ReactNode), `subtitle?` (ReactNode), `align?` (`"start"` | `"center"`)

```tsx
// DO
<TextTitlePage>Getting started</TextTitlePage>
<Text lineHeight="body">Body copy here.</Text>

// DON'T use raw HTML elements for semantic text
<h1>Getting started</h1>
```

---

### `Avatar` / `AvatarButton` / `AvatarBlock` / `AvatarGroup`

| Prop | Type | Values |
|---|---|---|
| `src` | string \| null | image URL |
| `initials` | string | fallback when no image |
| `alt` | string | — |
| `size` | string | `"small"` `"medium"` `"large"` |
| `square` | boolean | rounded-square shape |

`AvatarGroup` props: `max` (number), `spacing` (`"100"` `"200"` `"300"` `"negative-100"` `"negative-200"` `"negative-300"`)

`AvatarBlock` props: `title` (string, required), `description?` (string), plus an `Avatar` as `children`.

```tsx
<AvatarBlock title="Jane Smith" description="Product Designer">
  <Avatar src="/jane.jpg" alt="Jane Smith" size="medium" />
</AvatarBlock>

<AvatarGroup max={4} spacing="negative-100">
  <Avatar initials="AB" size="small" />
  <Avatar initials="CD" size="small" />
</AvatarGroup>
```

---

### `Tag` / `TagButton` / `TagToggle` / `TagToggleGroup` / `TagToggleList`

| Prop | Type | Values |
|---|---|---|
| `scheme` | string | `"brand"` `"danger"` `"positive"` `"warning"` `"neutral"` |
| `variant` | string | `"primary"` `"secondary"` |
| `onRemove` | fn | makes the tag removable (shows × button) |

`TagToggle` prop: `iconStart` (ReactNode)

```tsx
// Static informational tag
<Tag scheme="positive" variant="primary">Active</Tag>

// Removable tag
<Tag scheme="neutral" onRemove={() => removeTag(id)}>React</Tag>

// Toggle group (multi-select)
<TagToggleGroup selectionMode="multiple">
  <TagToggleList>
    <TagToggle id="react">React</TagToggle>
    <TagToggle id="vue">Vue</TagToggle>
  </TagToggleList>
</TagToggleGroup>
```

---

### `Table` / `TableHead` / `TableBody` / `TableRow` / `TableColumn` / `TableCell`

| Prop | Type | Notes |
|---|---|---|
| `bleed` | boolean | removes outer padding |
| `dense` | boolean | compact row height |
| `grid` | boolean | shows column dividers |
| `striped` | boolean | alternating row backgrounds |
| `align` | string | `"start"` `"center"` `"right"` — on `TableColumn` and `TableCell` |

```tsx
<Table striped>
  <TableHead>
    <TableColumn isRowHeader>Name</TableColumn>
    <TableColumn align="right">Amount</TableColumn>
  </TableHead>
  <TableBody>
    <TableRow id="r1">
      <TableCell>Alice</TableCell>
      <TableCell align="right">$100</TableCell>
    </TableRow>
  </TableBody>
</Table>
```

---

### `Image` / `Picture` / `PictureSource`

| Prop | Type | Values |
|---|---|---|
| `alt` | string | required |
| `aspectRatio` | string | `"1-1"` `"16-9"` `"4-3"` `"fill"` `"natural"` |
| `size` | string | `"small"` `"medium"` `"large"` `"fill"` `"natural"` |
| `variant` | string | `"default"` `"rounded"` |

---

### Icons (`Icon*`)

Every icon is its own component (`IconArrowRight`, `IconX`, ...) that already renders the base `<Icon>` svg.

| Prop | Type | Values |
|---|---|---|
| `size` | string | `"14"` `"16"` (default) `"20"` `"24"` `"32"` `"40"` `"48"` |

```tsx
import { IconArrowRight } from 'sds-futu';

// DO
<IconArrowRight size="20" />

// DON'T — nests an svg inside an svg
<Icon size="20"><IconArrowRight /></Icon>
```

The bare `Icon` component is only for building a new icon from raw `<path>` children. See `icon-discovery.md` for how to find icons.

---

### Links: `TextLink` vs `Link`
- `TextLink` — a link inside body text. Underlined.
- Inside `TextLinkList` (nav lists, footers) `TextLink` is not underlined, matching Figma "Text Link List Item".
- `Link` — a plain unstyled link (no underline anywhere). Use for custom navigation.

### `Logo`

Accepts `href` (renders `<a>`) or `onPress` (renders `<button>`). Children are the logo mark.

```tsx
<Logo href="/"><img src="/logo.svg" alt="Acme" /></Logo>
```

### `Link`

```tsx
<Link href="/about">About us</Link>
```

---

## Feedback

### `Notification`

| Prop | Type | Values |
|---|---|---|
| `variant` | string | `"message"` `"alert"` |
| `icon` | ReactNode | leading icon |
| `isDismissible` | boolean | adds a close button |

```tsx
<Notification variant="alert"
  icon={<IconAlertCircle size="20" />}
  isDismissible>
  <TextStrong>Something went wrong</TextStrong>
  <Text>Please try again later.</Text>
</Notification>
```

---

### `Tooltip`

Built on react-aria `Popover`. Use with `TooltipTrigger` from `react-aria-components`.

```tsx
import { TooltipTrigger } from 'react-aria-components';
import { Tooltip } from 'sds-futu';

<TooltipTrigger>
  <Button variant="neutral">Hover me</Button>
  <Tooltip>Helpful hint</Tooltip>
</TooltipTrigger>
```

Lower-level export also available: `TooltipOverlayArrow`.

---

## Overlay

### `Dialog` / `DialogModal` / `DialogTrigger` / `DialogButton` / `DialogTitle` / `DialogDescription` / `DialogBody` / `DialogClose`

| Prop | Type | Values / Notes |
|---|---|---|
| `type` | string | `"sheet"` (side panel) `"card"` (centered modal) — on `Dialog` |
| `isDismissable` | boolean | click-outside to close — on `DialogModal` |

`DialogButton` is the simplest pattern: renders a trigger button + modal in one component.

```tsx
<DialogButton label="Settings" variant="neutral" type="card">
  {({ close }) => (
    <>
      <DialogTitle>Settings</DialogTitle>
      <DialogBody>
        <InputField label="Display name" />
      </DialogBody>
      <ButtonGroup align="end">
        <Button variant="neutral" onPress={close}>Cancel</Button>
        <Button variant="primary" onPress={close}>Save</Button>
      </ButtonGroup>
    </>
  )}
</DialogButton>
```

---

### `Menu` / `MenuButton` / `MenuTrigger` / `MenuPopover` / `MenuItem` / `MenuSection` / `MenuHeading` / `MenuSeparator` / `MenuHeader` / `MenuLabel` / `MenuDescription` / `MenuShortcut`

`MenuButton` is the simplest pattern.

```tsx
<MenuButton label="Options" variant="neutral">
  <MenuItem id="edit">Edit</MenuItem>
  <MenuItem id="copy">Copy</MenuItem>
  <MenuSeparator />
  <MenuItem id="delete">Delete</MenuItem>
</MenuButton>
```

---

### `Accordion` / `AccordionItem`

`AccordionItem` required prop: `title` (string). Also accepts `isExpanded`, `isDisabled`.

```tsx
<Accordion>
  <AccordionItem title="What is SDS?">
    <Text>Simple Design System is a reference design system.</Text>
  </AccordionItem>
  <AccordionItem title="How do I install it?">
    <Text>npm install sds-futu</Text>
  </AccordionItem>
</Accordion>
```

---

### `Tabs` / `TabList` / `Tab` / `TabPanel`

Built on react-aria-components. Supports controlled (`selectedKey` + `onSelectionChange`) and uncontrolled (`defaultSelectedKey`) patterns.

```tsx
<Tabs defaultSelectedKey="overview">
  <TabList>
    <Tab id="overview">Overview</Tab>
    <Tab id="details">Details</Tab>
  </TabList>
  <TabPanel id="overview">...</TabPanel>
  <TabPanel id="details">...</TabPanel>
</Tabs>
```

---

## Composition Components

Pre-assembled higher-level layouts built from primitives.

### `Card`

| Prop | Type | Values |
|---|---|---|
| `variant` | string | `"default"` `"stroke"` `"brand"` |
| `direction` | string | `"horizontal"` `"vertical"` |
| `align` | string | `"start"` `"center"` `"end"` |
| `padding` | string | `"600"` `"800"` |
| `asset` | ReactNode | icon or image prepended to card |
| `interactionProps` | AnchorOrButtonProps | makes the whole card pressable |

```tsx
<Card variant="stroke" padding="600" direction="horizontal"
  asset={<IconStar size="24" />}>
  <TextHeading>Feature</TextHeading>
  <Text>Description of the feature.</Text>
</Card>
```

Specialised card variants: `PricingCard`, `ProductInfoCard`, `ReviewCard`, `StatsCard`, `TestimonialCard` — each with their own required props.

---

### `Hero`

Section for page heroes. Accepts all `SectionProps` plus `flexProps` (FlexProps) for the inner flex layout.

```tsx
<Hero variant="brand" padding="1600"
  flexProps={{ direction: "column", alignSecondary: "center" }}>
  <TextTitleHero>Welcome</TextTitleHero>
  <Button variant="primary">Get started</Button>
</Hero>
```

### `Panel`

`Flex`-based content panel. Same props as `Flex` except `container` and `wrap` are omitted.

### Compositions contain demo content
`Header`, `Footer` and the specialised cards ship with demo data. Check their props before use. If a composition can't show what the design needs, compose it from primitives and add `// SDS gap: <what>`.

### `Header` / `HeaderAuth`

Page header wrapper. `Header` reads auth state: the app must be wrapped in `<AllProviders>` (see `setup.md`) or it throws. `HeaderAuth` includes a pre-built authenticated avatar/menu pattern.

### `Footer` / `SocialButtons`

Mirrors the Figma "Footer": white with a top border, Logo + Social Buttons, then link columns.

| Prop | Type | Notes |
|---|---|---|
| `columns` | `{ title: string; links: { label: string; href: string }[] }[]` | Link columns. Default: 3 demo columns |
| `social` | ReactNode | Under the logo. Default `<SocialButtons />`. `null` hides it |
| `logo` | ReactNode | Default `<Logo />` |
| `variant` | `"stroke"` (default) `"brand"` `"neutral"` `"subtle"` | Section style |

`SocialButtons` prop: `links?: { label: string; href: string; icon: ReactNode }[]` (default Twitter, Instagram, YouTube, LinkedIn).

```tsx
<Footer
  columns={[
    { title: "Product", links: [{ label: "Pricing", href: "/pricing" }, { label: "Docs", href: "/docs" }] },
    { title: "Company", links: [{ label: "About", href: "/about" }] },
  ]}
  social={<SocialButtons links={[{ label: "LinkedIn", href: "https://linkedin.com/company/acme", icon: <IconLinkedin /> }]} />}
/>
```

Do not rebuild the footer from parts — configure it with props.

### `FormBox`

A form container that makes all direct child form fields full-width.
