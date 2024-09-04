import figma from "@figma/code-connect";
import {
  Text,
  TextCode,
  TextContentHeading,
  TextContentTitle,
  TextEmphasis,
  TextHeading,
  TextLink,
  TextLinkList,
  TextList,
  TextListItem,
  TextPrice,
  TextSmall,
  TextStrong,
  TextSubheading,
  TextSubtitle,
  TextTitleHero,
  TextTitlePage,
} from "primitives";

figma.connect(TextTitleHero, "<FIGMA_TEXT_TEXT_TITLE_HERO>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextTitleHero>{text}</TextTitleHero>,
});
figma.connect(TextTitlePage, "<FIGMA_TEXT_TEXT_TITLE_PAGE>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextTitlePage>{text}</TextTitlePage>,
});
figma.connect(TextSubtitle, "<FIGMA_TEXT_TEXT_SUBTITLE>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextSubtitle>{text}</TextSubtitle>,
});
figma.connect(TextHeading, "<FIGMA_TEXT_TEXT_HEADING>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextHeading>{text}</TextHeading>,
});
figma.connect(TextSubheading, "<FIGMA_TEXT_TEXT_SUBHEADING>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextSubheading>{text}</TextSubheading>,
});
figma.connect(Text, "<FIGMA_TEXT_TEXT>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <Text>{text}</Text>,
});
figma.connect(TextEmphasis, "<FIGMA_TEXT_TEXT_EMPHASIS>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextEmphasis>{text}</TextEmphasis>,
});
figma.connect(TextLink, "<FIGMA_TEXT_TEXT_LINK>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextLink href="#">{text}</TextLink>,
});
figma.connect(TextStrong, "<FIGMA_TEXT_TEXT_STRONG>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextStrong>{text}</TextStrong>,
});
figma.connect(TextSmall, "<FIGMA_TEXT_TEXT_SMALL>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextSmall>{text}</TextSmall>,
});
figma.connect(TextCode, "<FIGMA_TEXT_TEXT_CODE>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextCode>{text}</TextCode>,
});
figma.connect(TextList, "<FIGMA_TEXT_TEXT_LIST>", {
  props: {
    children: figma.children("Text List Item"),
    title: figma.boolean("Has Title", {
      true: figma.children("Text Strong"),
      false: undefined,
    }),
    density: figma.enum("Density", { Default: "default", Tight: "tight" }),
  },
  example: ({ children, ...props }) => (
    <TextList {...props}>{children}</TextList>
  ),
});
figma.connect(TextLinkList, "<FIGMA_TEXT_TEXT_LINK_LIST>", {
  props: {
    children: figma.children("Text Link List Item"),
    title: figma.boolean("Has Title", {
      true: figma.children("Text Strong"),
      false: undefined,
    }),
    density: figma.enum("Density", { Default: "default", Tight: "tight" }),
  },
  example: ({ children, ...props }) => (
    <TextLinkList {...props}>{children}</TextLinkList>
  ),
});
figma.connect(TextListItem, "<FIGMA_TEXT_TEXT_LIST_ITEM>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextListItem>{text}</TextListItem>,
});

figma.connect(TextListItem, "<FIGMA_TEXT_TEXT_LINK_LIST_ITEM>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => (
    <TextListItem>
      <TextLink href="#">{text}</TextLink>
    </TextListItem>
  ),
});

figma.connect(TextPrice, "<FIGMA_TEXT_TEXT_PRICE>", {
  props: {
    label: figma.string("Label"),
    size: figma.enum("Size", {
      Small: "small",
    }),
    currency: figma.string("Currency"),
    price: figma.string("Price"),
  },
  example: ({ ...props }) => <TextPrice {...props} />,
});

figma.connect(TextContentHeading, "<FIGMA_TEXT_TEXT_CONTENT_HEADING>", {
  props: {
    align: figma.enum("Align", { Center: "center" }),
    heading: figma.string("Heading"),
    subheading: figma.string("Subheading"),
  },
  example: ({ ...props }) => <TextContentHeading {...props} />,
});

figma.connect(TextContentTitle, "<FIGMA_TEXT_TEXT_CONTENT_TITLE>", {
  props: {
    align: figma.enum("Align", { Center: "center" }),
    title: figma.string("Title"),
    subtitle: figma.string("Subtitle"),
  },
  example: ({ ...props }) => <TextContentTitle {...props} />,
});
