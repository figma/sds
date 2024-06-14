import { AuthenticationProvider } from "providers";
import { Footer, Header } from "ui/compositions";
import { Flex, Section } from "ui/layout";
import { TextContentTitle } from "ui/primitives";

function App() {
  return (
    <AuthenticationProvider>
      <Header />
      <Section padding="4000">
        <Flex direction="row" alignPrimary="center" wrap container>
          <TextContentTitle align="center" title="Title" subtitle="Subtitle" />
        </Flex>
      </Section>
      <Footer />
    </AuthenticationProvider>
  );
}

export default App;
