# Simple Design System (SDS) Copilot Instructions

Welcome to the Simple Design System repository! This is a comprehensive React-based design system with Figma integration using Code Connect. This guide will help you understand how to work with the codebase effectively.

## Repository Overview

SDS is a production-ready design system featuring:

- 🎨 **Figma Integration**: Full Code Connect integration with variables, styles, and components
- ⚛️ **React Components**: Built on React Aria/Stately for accessibility
- 🎯 **TypeScript**: Fully typed component library
- 📚 **Storybook**: Comprehensive component documentation
- 🎨 **Design Tokens**: CSS custom properties with light/dark mode support
- 📱 **Responsive**: Mobile-first responsive design patterns

## Getting Started

### Development Commands

- `npm run app:dev` - Start development server at localhost:8000
- `npm run storybook` - Launch Storybook at localhost:6006
- `npm run app:build` - Build the application
- `npm run storybook:build` - Build Storybook
- `npm run script:tokens` - Sync design tokens from Figma
- `npm run script:icons` - Sync icons from Figma

### Key Resources

- [Live Storybook](https://figma.github.io/sds/storybook) - Component documentation
- [Figma Community File](https://www.figma.com/community/file/1380235722331273046/simple-design-system) - Design source

## Quick Start Checklist

Before implementing any Figma design, follow this checklist:

1. ✅ **Use Figma MCP tools** to extract design data when prompted.

- When trying to get a high level understanding of the design, you can use #get_image to get image representation of the design to contextualize what is selected in Figma
- Whenever you want more information about the specific UI elements that are selected, use #get_code
- With the get_code, get_code_connect_map, and get_variable_map tools you will receive information about patterns that should already be defined in this repository.
- If patterns dont already exist, you should ask for permission and clarify what about the design isn't already accounted for in this codebase that is present in the design.

2. ✅ **Read component APIs** in the actual TypeScript files before using
3. ✅ **Use SDS components only** - never import from `@react-aria`, `@react-stately`, etc.
4. ✅ **Use CSS variables** - never hardcode colors, spacing, or typography
5. ✅ **Use layout components** - never write custom CSS for positioning

## Importing Aliases

When importing SDS components, use aliases to ensure correct paths. These are described in the `vite.config.ts` file under `resolve.alias`:

```tsx
import { Footer, Header } from "compositions";
import { useMediaQuery } from "hooks";
import { IconChevronLeft } from "icons";
import { questioningFaces } from "images";
import { Flex, Section } from "layout";
import {
  Accordion,
  AccordionItem,
  Button,
  TextContentHeading,
  TextContentTitle,
} from "primitives";
import { AuthenticationProvider } from "providers";
```

## Figma to SDS Translation Guidelines

When implementing designs from Figma, follow these guidelines to ensure proper translation to the SDS component library.

## CSS Variables & Design Tokens

All design tokens from Figma are defined as CSS variables in [src/theme.css](../src/theme.css). **Always use these variables instead of hardcoded values.**

- Colors: Use `var(--sds-color-*)` variables (e.g., `var(--sds-color-text-default-default)`)
- Spacing: Use `var(--sds-size-space-*)` variables (e.g., `var(--sds-size-space-400)`)
- Typography: Use `var(--sds-typography-*)` or `var(--sds-font-*)` variables
- Border radius: Use `var(--sds-size-radius-*)` variables
- Shadows: Use `var(--sds-effects-shadows-*)` variables

### Example Usage

```css
.custom-element {
  background: var(--sds-color-background-default-default);
  color: var(--sds-color-text-default-default);
  padding: var(--sds-size-space-400);
  border-radius: var(--sds-size-radius-200);
}
```

## File Structure & Architecture

### Core Directories

```
src/
├── ui/                    # Main component library
│   ├── primitives/        # Atomic components (Button, Input, etc.)
│   ├── compositions/      # Complex components (Cards, Forms, etc.)
│   ├── layout/           # Layout components (Flex, Section, Grid)
│   ├── hooks/            # Custom React hooks
│   ├── icons/            # SVG icon components
│   ├── images/           # Image assets
│   ├── providers/        # React context providers
│   └── utils/            # Utility functions
├── stories/              # Storybook stories for all components
├── figma/               # Figma Code Connect files
│   ├── primitives/      # Maps Figma components to React primitives
│   ├── compositions/    # Maps Figma compositions to React components
│   └── icons/           # Maps Figma icons to React icons
├── theme.css            # CSS custom properties (design tokens)
├── reset.css            # CSS reset
├── responsive.css       # Responsive utilities
└── App.tsx             # Demo application
```

### Scripts Directory

```
scripts/
├── tokens/              # Design token sync from Figma
├── icons/              # Icon sync from Figma
├── component-metadata/ # Component metadata management
└── dev-resources/      # Development resource generation
```

## Component Library Structure

All components are in [src/ui](../src/ui). **Never create new components - always use existing SDS components.**

## SDS Component Hierarchy

**CRITICAL: Always use SDS high-level components, never their underlying dependencies.**

SDS components are built on top of libraries like React Aria, React Stately, and other foundational libraries. However, you should **NEVER** import or use these low-level dependencies directly:

### ❌ WRONG - Don't use low-level dependencies:

```tsx
import { Item } from "@react-stately/collections"; // NEVER do this
import { useListState } from "@react-stately/list"; // NEVER do this
import { useButton } from "@react-aria/button"; // NEVER do this

// Wrong implementation:
<Accordion>
  <Item key="faq1">Question 1</Item> {/* This is wrong! */}
</Accordion>;
```

### ✅ CORRECT - Use SDS components:

```tsx
import { Accordion, AccordionItem } from "ui/primitives/Accordion/Accordion";

// Correct implementation:
<Accordion>
  <AccordionItem title="Question 1" content="Answer 1" />
</Accordion>;
```

### Why This Matters:

- SDS components provide design system styling and behavior
- Low-level dependencies are implementation details that may change
- SDS components handle accessibility, theming, and responsive behavior
- Using low-level dependencies breaks the design system abstraction

When you see `hidden={true}` in Figma data, it indicates that the node should be ignored. This can happen with Figma components frequently, as nodes that can be toggled with a prop need to exist, even when the prop is false.

**Discovery tip**: When implementing Figma designs, check `codeDependencies` first, then browse the actual component files to understand available props and variants. See the complete component list in the Component Categories section below.

## Figma Translation Process

1. **Extract design using Figma tools**: Always use the Figma MCP tools to get the design data
2. **Identify SDS components**: Map Figma components to existing SDS primitives, compositions, and layouts
   - Use the `codeDependencies` field to find the correct component path
   - If no direct mapping exists, look for similar components or compositions
3. **Check component APIs**: Read the actual component files to understand props and usage patterns
4. **Use semantic imports**: Import from correct paths (e.g., `import { Button } from "ui/primitives/Button/Button"`)
5. **Apply design tokens**: Use CSS variables for all styling values

## Common Translation Patterns

### Buttons

```tsx
// Figma: Button with variant="Primary" and icon
// SDS Implementation:
<Button variant="primary" size="medium">
  Button Text
</Button>
```

### Navigation

```tsx
// Figma: Navigation Pills with selection states
// SDS Implementation:
<Navigation>
  <NavigationPill isSelected>Active Item</NavigationPill>
  <NavigationPill>Inactive Item</NavigationPill>
</Navigation>
```

### Typography

```tsx
// Figma: Text with specific styles
// SDS Implementation:
<TextHeading>Heading Text</TextHeading>
<Text>Body text</Text>
<TextSmall>Small text</TextSmall>
```

### Layout

```tsx
// Figma: Cards in a grid
// SDS Implementation:
<Section>
  <Flex direction="row" gap="400" type="thirds">
    <div>Card 1</div>
    <div>Card 2</div>
    <div>Card 3</div>
  </Flex>
</Section>
```

```tsx
// Complex layout with responsive behavior
function ResponsiveExample() {
  const { isMobile } = useMediaQuery();

  return (
    <Section variant="stroke" padding={isMobile ? "600" : "1600"}>
      <Flex
        direction="column"
        container
        gap={isMobile ? "600" : "1200"}
        alignPrimary="center"
      >
        {/* Navigation Pills */}
        <Navigation direction="row">
          <NavigationPill isSelected>Active</NavigationPill>
          <NavigationPill>Inactive</NavigationPill>
        </Navigation>

        {/* Content Grid */}
        <Flex direction={isMobile ? "column" : "row"} gap="1600" type="thirds">
          {content.map((item) => (
            <ContentCard key={item.id} {...item} />
          ))}
        </Flex>
      </Flex>
    </Section>
  );
}
```

## Best Practices & Common Pitfalls

### Component API Guidelines

- **Always check existing component props**: Read the TypeScript definitions in component files
- **Use semantic prop names**: `isSelected` not `active`, `variant` not `type`
- **Leverage composition**: Combine primitives rather than creating custom components
- **Follow naming conventions**: PascalCase for components, camelCase for props

### Essential Rules

- **Never hardcode colors, spacing, or typography values** - Always use CSS variables
- **Always import components from their specific paths** - Use the alias imports
- **Check component props before using** - Read the TypeScript definitions
- **Use layout components instead of CSS Grid/Flexbox** - Never write custom layout CSS
- **Reference existing stories in [src/stories](../src/stories/) for usage examples**

### Common Pitfalls & Solutions

### ❌ Pitfall 1: Importing low-level dependencies

```tsx
import { Item } from "@react-stately/collections"; // WRONG
```

**Fix**: Always use SDS components: `import { AccordionItem } from "ui/primitives/Accordion/Accordion"`

### ❌ Pitfall 2: Hardcoding design values

```tsx
<div style={{ color: "#111111", padding: "16px" }}> // WRONG
```

**Fix**: Use CSS variables: `style={{ color: "var(--sds-color-text-default-default)", padding: "var(--sds-size-space-400)" }}`

### ❌ Pitfall 3: Creating custom layout CSS

```tsx
<div className="grid grid-cols-3 gap-4"> // WRONG
```

**Fix**: Use layout components: `<Flex direction="row" gap="400" type="thirds">`

### ❌ Pitfall 4: Not reading component APIs

```tsx
<Button active={true}> // WRONG - prop doesn't exist
```

**Fix**: Read the TypeScript file: `<Button isSelected={true}>` or `<Button variant="primary">`

## Component Categories

### Primitives (`src/ui/primitives/`)

Single-purpose, reusable components (alphabetically ordered):

- **Accordion** - Expandable content sections with `Accordion` and `AccordionItem`
- **Avatar** - User profile images and placeholders
- **Button** - Primary, neutral, subtle variants with size options
- **Checkbox** - Boolean selection controls with validation states
- **Dialog** - Modal dialogs and overlays with backdrop
- **Fieldset** - Form fieldset grouping with legend
- **Icon** - Consistent icon rendering (check [src/ui/icons](../src/ui/icons/) for available icons)
- **IconButton** - Icon-only buttons with accessible labels
- **Image** - Responsive images with loading states
- **Input** - Form input fields with validation states and labels
- **Link** - Navigation and external links with proper styling
- **ListBox** - Selection lists with keyboard navigation
- **Logo** - Brand logos and identity elements
- **Menu** - Dropdown menus and context menus
- **Navigation** - Navigation pills and buttons with selection states
- **Notification** - Toast notifications and alerts
- **Pagination** - Page navigation controls with page numbers
- **Radio** - Single selection from multiple options
- **Search** - Search input fields with suggestions
- **Select** - Dropdown selection components with search
- **Slider** - Range input controls with min/max values
- **Switch** - Toggle controls for boolean settings
- **Tab** - Tab navigation with panels
- **Table** - Data tables with sorting, filtering, and pagination
- **Tag** - Labels, badges, and category indicators
- **Text** - Typography components with semantic variants
- **Textarea** - Multi-line text input with resize options
- **Tooltip** - Contextual help and information overlays

### Layout (`src/ui/layout/`)

Structural components for positioning:

- **Flex** - Flexbox layouts with gap, alignment, and responsive props
- **Section** - Page sections with padding and background variants
- **Grid** - CSS Grid layouts (when Flex isn't sufficient)

### Compositions (`src/ui/compositions/`)

Complex, pre-built component patterns:

- **Cards** - Content cards with headers, bodies, and actions
- **Forms** - Complete form layouts with validation. Meant to be examples.
- **Headers/Footers** - Page navigation and footer components

### Hooks (`src/ui/hooks/`)

Custom React hooks for common functionality:

- **useMediaQuery** - Responsive breakpoint detection
- **useLocalStorage** - Persistent local storage
- **useDebounce** - Input debouncing
- **useClipboard** - Copy to clipboard functionality

## Figma Integration

SDS uses Figma Code Connect for seamless design-to-code integration. Here's how it works:

- **Design Tokens**: Figma styles are synced as CSS custom properties (e.g., `--sds-color-primary`)
- **Components**: Figma components are mapped to SDS components with equivalent props and variants
- **Assets**: Figma images and icons are exported as React components or assets

### Figma File Setup

To enable Code Connect:

1. Use the **"SDS - Design Tokens"** and **"SDS - Components"** styles in Figma
2. Organize components in Figma using the same structure as SDS (primitives, compositions, etc.)
3. Publish changes in Figma, then run `npm run script:tokens` and `npm run script:icons` to sync

### Known Limitations

- Not all Figma features have 1:1 parity with SDS components (e.g., complex interactions)
- Some manual adjustment may be needed after syncing, especially for layout and spacing
- Ensure Figma components are named and organized according to SDS conventions for best results
