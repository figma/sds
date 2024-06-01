import { StandardFooter, StandardHeader } from "blocks";
import { AuthenticationProvider } from "providers";
import { Flex, Section, TextContentTitle } from "ui";

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
