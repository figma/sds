import { StandardFooter, StandardHeader } from "blocks";
import { IconFacebook, IconInstagram, IconLinkedin, IconYoutube } from "icons";
import { AuthenticationProvider } from "providers";
import {
  ButtonGroup,
  Flex,
  FlexItem,
  IconButton,
  Logo,
  Section,
  TextContentTitle,
  TextLink,
  TextLinkList,
  TextListItem,
  TextStrong,
} from "ui";

function App() {
  return (
    <AuthenticationProvider>
      <StandardHeader />
      <Section padding="lg">
        <Flex direction="row" alignPrimary="center" wrap container>
          <TextContentTitle align="center" title="Title" subtitle="Subtitle" />
        </Flex>
      </Section>
      <StandardFooter>
        <Flex container type="quarter" wrap gap="xl">
          <FlexItem size="minor">
            <Flex direction="column" gap="lg">
              <Logo />
              <ButtonGroup>
                <IconButton
                  aria-label="Write a nice description of the action."
                  onPress={() => {}}
                  size="sm"
                  variant="subtle"
                >
                  <IconFacebook />
                </IconButton>
                <IconButton
                  aria-label="Write a nice description of the action."
                  onPress={() => {}}
                  size="sm"
                  variant="subtle"
                >
                  <IconLinkedin />
                </IconButton>
                <IconButton
                  aria-label="Write a nice description of the action."
                  onPress={() => {}}
                  size="sm"
                  variant="subtle"
                >
                  <IconYoutube />
                </IconButton>
                <IconButton
                  aria-label="Write a nice description of the action."
                  onPress={() => {}}
                  size="sm"
                  variant="subtle"
                >
                  <IconInstagram />
                </IconButton>
              </ButtonGroup>
            </Flex>
          </FlexItem>
          <TextLinkList title={<TextStrong>Text Strong</TextStrong>}>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
          </TextLinkList>
          <TextLinkList title={<TextStrong>Text Strong</TextStrong>}>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
          </TextLinkList>
          <TextLinkList title={<TextStrong>Text Strong</TextStrong>}>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
          </TextLinkList>
        </Flex>
      </StandardFooter>
    </AuthenticationProvider>
  );
}

export default App;
