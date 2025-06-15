import { figma } from "@figma/code-connect";
import {
  Card,
  PricingCard,
  ProductInfoCard,
  ReviewCard,
  StatsCard,
  TestimonialCard,
} from "compositions";
import { placeholder } from "images";
import { ButtonProps, Image, Text, TextHeading } from "primitives";

figma.connect(Card, "<FIGMA_CARDS_CARD>", {
  props: {
    asset: figma.enum("Asset Type", {
      Image: <Image alt="Always use alt text" aspectRatio="1-1" size="small" />,
      Icon: figma.instance("Icon"),
    }),
    heading: figma.string("Heading"),
    body: figma.string("Body"),
    direction: figma.enum("Direction", {
      Horizontal: "horizontal",
      Vertical: "vertical",
    }),
    actions: figma.children("Button Group"),
    variant: figma.enum("Variant", {
      Stroke: "stroke",
    }),
  },
  example: ({ actions, heading, body, ...props }) => (
    <Card {...props}>
      <TextHeading>{heading}</TextHeading>
      <Text>{body}</Text>
      {actions}
    </Card>
  ),
});

figma.connect(PricingCard, "<FIGMA_CARDS_PRICING_CARD>", {
  props: {
    textHeading: figma.nestedProps("Text Heading", {
      text: figma.string("Text"),
    }),
    action: figma.nestedProps<{
      label: string;
      variant: ButtonProps["variant"];
      icon?: React.ReactNode;
    }>("Button", {
      label: figma.string("Label"),
      variant: figma.enum("Variant", {
        Primary: "primary",
        Neutral: "neutral",
        Subtle: "subtle",
      }),
      icon: figma.instance("Icon End"),
    }),
    textPrice: figma.nestedProps("Text Price", {
      price: figma.string("Price"),
      priceCurrency: figma.string("Currency"),
      priceLabel: figma.string("Label"),
      size: figma.enum("Size", {
        Large: "large",
        Small: "small",
      }),
    }),
    list: figma.children("Text List"),
    variant: figma.enum("Variant", {
      Stroke: "stroke",
      Brand: "brand",
    }),
  },
  example: ({ textHeading, textPrice, list, action, ...props }) => (
    <PricingCard
      heading={textHeading.text}
      action={action.label}
      actionIcon={action.icon}
      actionVariant={action.variant}
      onAction={() => {}}
      listSlot={list}
      interval="month"
      sku="example_sku"
      price={textPrice.price}
      priceCurrency={textPrice.priceCurrency}
      priceLabel={textPrice.priceLabel}
      size={textPrice.size}
      {...props}
    />
  ),
});

figma.connect(ProductInfoCard, "<FIGMA_CARDS_PRODUCT_INFO_CARD>", {
  props: {
    textProps: figma.nestedProps("Text", {
      text: figma.string("Text"),
    }),
    priceProps: figma.nestedProps("Text Strong", {
      price: figma.string("Text"),
    }),
    descriptionProps: figma.nestedProps("Text Small", {
      description: figma.string("Text"),
    }),
  },
  example: ({ descriptionProps, priceProps, textProps }) => (
    <ProductInfoCard
      asset={
        <Image
          src={placeholder}
          size="medium"
          aspectRatio="natural"
          alt="Always describe images"
        />
      }
      rating={4.5}
      heading={textProps.text}
      price={priceProps.price}
      description={descriptionProps.description}
    />
  ),
});
figma.connect(ReviewCard, "<FIGMA_CARDS_REVIEW_CARD>", {
  props: {
    headingProps: figma.nestedProps("Text Heading", {
      heading: figma.string("Text"),
    }),
    bodyProps: figma.nestedProps("Text", {
      body: figma.string("Text"),
    }),
    avatarBlockProps: figma.nestedProps("Avatar Block", {
      name: figma.string("Title"),
      date: figma.string("Description"),
    }),
  },
  example: ({ headingProps, bodyProps, avatarBlockProps }) => (
    <ReviewCard
      stars={5}
      src={placeholder}
      title={headingProps.heading}
      body={bodyProps.body}
      date={avatarBlockProps.date}
      name={avatarBlockProps.name}
    />
  ),
});
figma.connect(StatsCard, "<FIGMA_CARDS_STATS_CARD>", {
  props: {
    descriptionProps: figma.nestedProps("Text", {
      description: figma.string("Text"),
    }),
    statProps: figma.nestedProps("Text Heading", {
      stat: figma.string("Text"),
    }),
    icon: figma.instance("Icon"),
  },
  example: ({ descriptionProps, statProps, ...props }) => (
    <StatsCard
      description={descriptionProps.description}
      stat={statProps.stat}
      {...props}
    />
  ),
});
figma.connect(TestimonialCard, "<FIGMA_CARDS_TESTIMONIAL_CARD>", {
  props: {
    headingProps: figma.nestedProps("Text Heading", {
      heading: figma.string("Text"),
    }),
    avatarBlockProps: figma.nestedProps("Avatar Block", {
      name: figma.string("Title"),
      username: figma.string("Description"),
    }),
  },
  example: ({ avatarBlockProps, headingProps }) => (
    <TestimonialCard
      heading={headingProps.heading}
      src={placeholder}
      name={avatarBlockProps.name}
      username={avatarBlockProps.username}
    />
  ),
});
