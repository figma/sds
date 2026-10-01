# Composing a page

1. Wrap the app in `AllProviders`.
2. `Header` at the top, `Footer` at the bottom.
3. Each band of content is a `Section`. Inside it, one `Flex` (or `Grid`) with `container`.
4. Use compositions (`Hero`, `Panel`, `Card`, `PricingCard`, ...) before building from primitives.
5. Alternate `Section` variants (`subtle`, `stroke`, `brand`) to separate bands. Don't add custom backgrounds.

## Example

```tsx
import "sds-futu/styles.css";
import {
  AllProviders, Header, Footer, Section, Flex, TextContentTitle,
  Form, Input, Button, Card, TextHeading, Text, useMediaQuery,
} from "sds-futu";

export default function App() {
  const { isMobile } = useMediaQuery();
  return (
    <AllProviders>
      <Header />
      <Section padding={isMobile ? "600" : "1600"} variant="stroke">
        <Flex container direction="column" alignPrimary="center" alignSecondary="center" gap={isMobile ? "600" : "1200"}>
          <TextContentTitle align="center" title="Welcome Home" subtitle="We're happy to have you." />
          <Form singleLine>
            <Input aria-label="Email address" placeholder="you@example.com" />
            <Button variant="neutral" onPress={() => {}}>Get updates</Button>
          </Form>
        </Flex>
      </Section>
      <Section padding="1200">
        <Flex container wrap gap="600" type="third">
          <Card variant="stroke">
            <TextHeading>Fast</TextHeading>
            <Text>Short supporting copy.</Text>
          </Card>
          {/* more cards */}
        </Flex>
      </Section>
      <Footer />
    </AllProviders>
  );
}
```
