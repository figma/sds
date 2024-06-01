import { IconInstagram, IconLinkedin, IconTwitter, IconYoutube } from "icons";
import {
  ButtonGroup,
  Flex,
  FlexItem,
  IconButton,
  Logo,
  Section,
  TextLink,
  TextLinkList,
  TextListItem,
  TextStrong,
  type SectionProps,
} from "ui";

export type StandardFooterProps = Omit<SectionProps, "variant" | "padding">;
export function StandardFooter({ className, ...props }: StandardFooterProps) {
  return (
    <Section
      elementType="footer"
      variant="stroke"
      paddingTop="md"
      paddingBottom="lg"
      style={{ marginTop: "auto" }}
      {...props}
    >
      <Flex wrap type="quarter" gap="xl" container>
        <FlexItem size="minor">
          <Flex direction="column" gap="xl" alignSecondary="start">
            <FlexItem>
              <Logo />
            </FlexItem>
            <SocialButtons />
          </Flex>
        </FlexItem>
        <FlexItem size="minor">
          <TextLinkList title={<TextStrong>Something 1</TextStrong>}>
            <TextListItem>
              <TextLink href="#">List item 1</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item 2</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item 3</TextLink>
            </TextListItem>
          </TextLinkList>
        </FlexItem>
        <FlexItem size="minor">
          <TextLinkList title={<TextStrong>Something 2</TextStrong>}>
            <TextListItem>
              <TextLink href="#">List item 1</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item 2</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item 3</TextLink>
            </TextListItem>
          </TextLinkList>
        </FlexItem>
        <FlexItem size="minor">
          <TextLinkList title={<TextStrong>Something 3</TextStrong>}>
            <TextListItem>
              <TextLink href="#">List item 1</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item 2</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item 3</TextLink>
            </TextListItem>
          </TextLinkList>
        </FlexItem>
      </Flex>
    </Section>
  );
}

export function SocialButtons() {
  return (
    <ButtonGroup>
      <IconButton
        variant="subtle"
        aria-label="Twitter"
        href="https://www.twitter.com"
      >
        <IconTwitter />
      </IconButton>
      <IconButton
        variant="subtle"
        aria-label="Instagram"
        href="https://www.instagram.com"
      >
        <IconInstagram />
      </IconButton>
      <IconButton
        variant="subtle"
        aria-label="YouTube"
        href="https://www.youtube.com"
      >
        <IconYoutube />
      </IconButton>
      <IconButton
        variant="subtle"
        aria-label="LinkedIn"
        href="https://www.linkedin.com"
      >
        <IconLinkedin />
      </IconButton>
    </ButtonGroup>
  );
}
