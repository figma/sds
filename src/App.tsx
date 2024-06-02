import { AuthenticationProvider } from "providers";
import { StandardFooter, StandardHeader } from "ui/components";
import { Flex, Section } from "ui/layout";
import { TextContentTitle } from "ui/primitives";

function App() {
  return (
    <AuthenticationProvider>
      <StandardHeader />
      <Section padding="lg">
        <Flex direction="row" alignPrimary="center" wrap container>
          <TextContentTitle align="center" title="Title" subtitle="Subtitle" />
        </Flex>
      </Section>
      <StandardFooter />
    </AuthenticationProvider>
  );
}

export default App;
