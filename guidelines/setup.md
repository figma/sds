# Setup

## Install
`sds-futu` is on the public npm registry. Peer dependencies: `react` and `react-dom` (18 or 19).

## Global styles (required)
Import the package styles once, at the top of the main CSS or entry file:

```ts
import "sds-futu/styles.css";
```

This loads the reset, all tokens (`--sds-*`), light/dark colour schemes and component styles. Without it nothing is styled.

## Providers
`Header` and some cards read shared data (auth, pricing, products). Wrap the app once:

```tsx
import { AllProviders } from "sds-futu";

export default function App() {
  return <AllProviders>{/* page */}</AllProviders>;
}
```

## Imports
Everything comes from one entry point:

```tsx
import { Section, Flex, Button, TextHeading, IconArrowRight } from "sds-futu";
```

## Dark mode
Automatic via `prefers-color-scheme`. Do not hard-code light or dark colours.
