import { useMediaQuery } from "hooks";
import { IconInstagram, IconLinkedin, IconTwitter, IconYoutube } from "icons";
import { Flex, FlexItem, Section, type SectionProps } from "layout";
import {
  ButtonGroup,
  IconButton,
  Logo,
  TextLink,
  TextLinkList,
  TextListItem,
  TextStrong,
} from "primitives";
import type { ReactNode } from "react";

/*
 * Mirrors the Figma "Footer" component (SDS - Futu, node 321:11357):
 * - white background with a top border (Section variant "stroke")
 * - padding 32 top / 160 bottom
 * - "Title" slot: Logo + Social Buttons  → `logo` + `social` props
 * - "Slot" slot: three Text Link Lists   → `columns` prop
 */

export type FooterLink = { label: string; href: string };
export type FooterColumn = { title: string; links: FooterLink[] };

export const defaultFooterColumns: FooterColumn[] = [
  {
    title: "Use cases",
    links: [
      { label: "UI design", href: "#" },
      { label: "UX design", href: "#" },
      { label: "Wireframing", href: "#" },
      { label: "Diagramming", href: "#" },
      { label: "Brainstorming", href: "#" },
      { label: "Online whiteboard", href: "#" },
      { label: "Team collaboration", href: "#" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Design", href: "#" },
      { label: "Prototyping", href: "#" },
      { label: "Development features", href: "#" },
      { label: "Design systems", href: "#" },
      { label: "Collaboration features", href: "#" },
      { label: "Design process", href: "#" },
      { label: "FigJam", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "#" },
      { label: "Best practices", href: "#" },
      { label: "Colors", href: "#" },
      { label: "Color wheel", href: "#" },
      { label: "Support", href: "#" },
      { label: "Developers", href: "#" },
      { label: "Resource library", href: "#" },
    ],
  },
];

export type FooterProps = Omit<SectionProps, "padding" | "src" | "variant"> & {
  /** Section style. Default "stroke" (white with a top border), as in Figma. */
  variant?: "stroke" | "brand" | "neutral" | "subtle";
  /** Logo in the top-left. Default: <Logo />. */
  logo?: ReactNode;
  /** Shown under the logo. Default: <SocialButtons />. Pass null to hide. */
  social?: ReactNode;
  /** Link columns. Default: the three Figma demo columns. */
  columns?: FooterColumn[];
};

export function Footer({
  className,
  variant = "stroke",
  logo,
  social,
  columns = defaultFooterColumns,
  ...props
}: FooterProps) {
  const { isTabletDown } = useMediaQuery();
  const listDensity = isTabletDown ? "tight" : "default";
  return (
    <Section
      elementType="footer"
      variant={variant}
      paddingTop="800"
      paddingBottom="4000"
      style={{ marginTop: "auto" }}
      className={className}
      {...props}
    >
      <Flex wrap type="quarter" gap="400" container>
        <FlexItem size="minor">
          <Flex direction="column" gap="600" alignSecondary="start">
            <FlexItem>{logo ?? <Logo className="footer-logo" />}</FlexItem>
            {social === undefined ? <SocialButtons /> : social}
          </Flex>
        </FlexItem>
        {columns.map((column) => (
          <TextLinkList
            key={column.title}
            density={listDensity}
            title={<TextStrong>{column.title}</TextStrong>}
          >
            {column.links.map((link) => (
              <TextListItem key={link.label}>
                <TextLink href={link.href}>{link.label}</TextLink>
              </TextListItem>
            ))}
          </TextLinkList>
        ))}
      </Flex>
    </Section>
  );
}

export type SocialLink = { label: string; href: string; icon: ReactNode };

export const defaultSocialLinks: SocialLink[] = [
  { label: "Twitter", href: "https://www.twitter.com", icon: <IconTwitter /> },
  { label: "Instagram", href: "https://www.instagram.com", icon: <IconInstagram /> },
  { label: "YouTube", href: "https://www.youtube.com", icon: <IconYoutube /> },
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: <IconLinkedin /> },
];

export type SocialButtonsProps = {
  /** Default: Twitter, Instagram, YouTube, LinkedIn (matches Figma "Social Buttons"). */
  links?: SocialLink[];
};

/** Mirrors the Figma "Social Buttons" component (node 3020:13246). */
export function SocialButtons({ links = defaultSocialLinks }: SocialButtonsProps) {
  return (
    <ButtonGroup>
      {links.map((link) => (
        <IconButton
          key={link.label}
          variant="subtle"
          size="small"
          aria-label={link.label}
          href={link.href}
        >
          {link.icon}
        </IconButton>
      ))}
    </ButtonGroup>
  );
}
