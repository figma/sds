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
} from "./Text";

figma.connect(TextTitleHero, "<FIGMA_URL_TEXT_TITLE_HERO>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextTitleHero>{text}</TextTitleHero>,
});
figma.connect(TextTitlePage, "<FIGMA_URL_TEXT_TITLE_PAGE>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextTitlePage>{text}</TextTitlePage>,
});
figma.connect(TextSubtitle, "<FIGMA_URL_TEXT_SUBTITLE>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextSubtitle>{text}</TextSubtitle>,
});
figma.connect(TextHeading, "<FIGMA_URL_TEXT_HEADING>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextHeading>{text}</TextHeading>,
});
figma.connect(TextSubheading, "<FIGMA_URL_TEXT_SUBHEADING>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextSubheading>{text}</TextSubheading>,
});
figma.connect(Text, "<FIGMA_URL_TEXT>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <Text>{text}</Text>,
});
figma.connect(TextEmphasis, "<FIGMA_URL_TEXT_EMPHASIS>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextEmphasis>{text}</TextEmphasis>,
});
figma.connect(TextLink, "<FIGMA_URL_TEXT_LINK>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextLink href="#">{text}</TextLink>,
});
figma.connect(TextStrong, "<FIGMA_URL_TEXT_STRONG>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextStrong>{text}</TextStrong>,
});
figma.connect(TextSmall, "<FIGMA_URL_TEXT_SMALL>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextSmall>{text}</TextSmall>,
});
figma.connect(TextCode, "<FIGMA_URL_TEXT_CODE>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextCode>{text}</TextCode>,
});

figma.connect(TextList, "<FIGMA_URL_TEXT_LIST>", {
  props: {
    children: figma.children("Text List Item"),
    title: figma.boolean("Has Title", {
      true: figma.children("Text Strong"),
      false: undefined,
    }),
  },
  example: ({ children, title }) => (
    <TextList title={title}>{children}</TextList>
  ),
});
figma.connect(TextListItem, "<FIGMA_URL_TEXT_LIST_ITEM>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => <TextListItem>{text}</TextListItem>,
});

figma.connect(TextList, "<FIGMA_URL_TEXT_LINK_LIST>", {
  props: {
    children: figma.children("Text Link List Item"),
    title: figma.boolean("Has Title", {
      true: figma.children("Text Strong"),
      false: undefined,
    }),
  },
  example: ({ children, title }) => (
    <TextLinkList title={title}>{children}</TextLinkList>
  ),
});
figma.connect(TextListItem, "<FIGMA_URL_TEXT_LINK_LIST_ITEM>", {
  props: { text: figma.string("Text") },
  example: ({ text }) => (
    <TextListItem>
      <TextLink href="#">{text}</TextLink>
    </TextListItem>
  ),
});

figma.connect(TextPrice, "<FIGMA_URL_TEXT_PRICE>", {
  props: {
    label: figma.string("Label"),
    currency: figma.string("Currency"),
    price: figma.string("Price"),
  },
  example: ({ label, currency, price }) => (
    <TextPrice label={label} currency={currency} price={price} />
  ),
});

figma.connect(TextContentHeading, "<FIGMA_URL_TEXT_CONTENT_HEADING>", {
  props: {
    align: figma.enum("Align", { Center: "center" }),
    heading: figma.string("Heading"),
    subheading: figma.string("Subheading"),
  },
  example: ({ align, heading, subheading }) => (
    <TextContentHeading
      align={align}
      heading={heading}
      subheading={subheading}
    />
  ),
});

figma.connect(TextContentTitle, "<FIGMA_URL_TEXT_CONTENT_TITLE>", {
  props: {
    align: figma.enum("Align", { Center: "center" }),
    title: figma.string("Title"),
    subtitle: figma.string("Subtitle"),
  },
  example: ({ align, title, subtitle }) => (
    <TextContentTitle align={align} title={title} subtitle={subtitle} />
  ),
});
