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
          <TextLinkList title={<TextStrong>Use cases</TextStrong>}>
            <TextListItem>
              <TextLink href="#">UI design</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">UX design</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Wireframing</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Diagramming</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Brainstorming</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Online whiteboard</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Team collaboration</TextLink>
            </TextListItem>
          </TextLinkList>
        </FlexItem>
        <FlexItem size="minor">
          <TextLinkList title={<TextStrong>Explore</TextStrong>}>
            <TextListItem>
              <TextLink href="#">Design</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Prototyping</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Development features</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Design systems</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Collaboration features</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Design process</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">FigJam</TextLink>
            </TextListItem>
          </TextLinkList>
        </FlexItem>
        <FlexItem size="minor">
          <TextLinkList title={<TextStrong>Resources</TextStrong>}>
            <TextListItem>
              <TextLink href="#">Blog</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Best practices</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Colors</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Color wheel</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Support</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Developers</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Resource library</TextLink>
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
