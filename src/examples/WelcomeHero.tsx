import { useMediaQuery } from "hooks";
import { Flex, Section } from "layout";
import { Button, Form, Input, TextContentTitle } from "primitives";

export function WelcomeHero() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";
  const flexGap = isMobile ? "600" : "1200";

  return (
    <Section padding={sectionPadding} variant="stroke">
      <Flex
        container
        wrap
        gap={flexGap}
        direction="column"
        alignPrimary="center"
        alignSecondary="center"
        type="third"
      >
        <TextContentTitle
          align="center"
          title="Welcome Home"
          subtitle={<>We're happy to have&nbsp;you.</>}
        />
        <Form singleLine>
          <Input aria-label="Email address" placeholder="you@example.com" />
          <Button onPress={() => {}} variant="neutral">
            Get updates
          </Button>
        </Form>
      </Flex>
    </Section>
  );
}
