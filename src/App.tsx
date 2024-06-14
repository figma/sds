import { Footer, Header } from "compositions";
import { Flex, Section } from "layout";
import { AuthenticationProvider } from "providers";
import { TextContentTitle } from "ui";

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
