import { Footer, Header } from "compositions";
import { useMediaQuery } from "hooks";
import {
  IconLayers,
  IconShoppingBag,
  IconStar,
  IconWind,
  IconZap,
} from "icons";
import { shoeBlackVolt, shoeGreyBlack, shoeWhiteBlack } from "images";
import { Flex, FlexItem, Section } from "layout";
import {
  Button,
  Form,
  Image,
  Input,
  RadioGroup,
  Tag,
  Text,
  TextContentHeading,
  TextPrice,
  TextSmall,
  TextStrong,
  TextSubheading,
  TextTitlePage,
} from "primitives";
import { useState } from "react";
import { Radio as RACRadio } from "react-aria-components";
import "./nike-pdp.css";
import "./nike-theme.css";

const navItems = ["New & Featured", "Men", "Women", "Kids", "Running"];

const colorways = [
  {
    id: "black-volt",
    name: "Black/Volt",
    price: "180",
    rating: 4.9,
    reviews: 128,
    image: shoeBlackVolt,
  },
  {
    id: "white-black",
    name: "White/Black",
    price: "180",
    rating: 4.8,
    reviews: 96,
    image: shoeWhiteBlack,
  },
  {
    id: "grey-black",
    name: "Grey/Black",
    price: "170",
    rating: 4.7,
    reviews: 74,
    image: shoeGreyBlack,
  },
];

const sizes = [
  "7",
  "7.5",
  "8",
  "8.5",
  "9",
  "9.5",
  "10",
  "10.5",
  "11",
  "11.5",
  "12",
  "13",
];
const soldOutSizes = ["7.5", "12"];

const features = [
  {
    icon: <IconZap size="24" />,
    heading: "Pulse foam",
    body: "Full-length foam that returns more energy with every stride.",
  },
  {
    icon: <IconWind size="24" />,
    heading: "Airweave upper",
    body: "Engineered mesh that locks down your midfoot and breathes.",
  },
  {
    icon: <IconLayers size="24" />,
    heading: "Carbon plate",
    body: "A curved plate that snaps you forward through toe-off.",
  },
];

export function NikePDP() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";
  const flexGap = isMobile ? "600" : "1200";

  const [colorwayId, setColorwayId] = useState(colorways[0].id);
  const [size, setSize] = useState<string | null>(null);
  const [showSizeError, setShowSizeError] = useState(false);
  const colorway =
    colorways.find(({ id }) => id === colorwayId) ?? colorways[0];

  return (
    <div className="theme-nike nike-pdp">
      <Header navItems={navItems} />

      <Section padding={sectionPadding}>
        <Flex container type="half" wrap gap={flexGap}>
          <FlexItem size="half">
            <Flex direction="column" gap="400" alignSecondary="stretch">
              <Image
                key={colorway.id}
                src={colorway.image}
                alt={`Vector Pace 1 in ${colorway.name}`}
                aspectRatio="4-3"
                size="fill"
                variant="default"
                className="nike-pdp-hero-image"
              />
              <RadioGroup
                aria-label="Colorway"
                orientation="horizontal"
                value={colorwayId}
                onChange={setColorwayId}
                className="nike-pdp-colorways"
              >
                {colorways.map(({ id, name, image }) => (
                  <RACRadio
                    key={id}
                    value={id}
                    aria-label={name}
                    className="nike-pdp-colorway"
                  >
                    <Image
                      src={image}
                      alt=""
                      aspectRatio="4-3"
                      size="fill"
                      variant="default"
                    />
                  </RACRadio>
                ))}
              </RadioGroup>
            </Flex>
          </FlexItem>

          <FlexItem size="half">
            <Flex direction="column" gap="600" alignSecondary="stretch">
              <Flex direction="column" gap="300">
                <Tag variant="secondary" scheme="neutral">
                  Men's Road Running Shoes
                </Tag>
                <TextTitlePage elementType="h1">Vector Pace 1</TextTitlePage>
                <TextSubheading>{colorway.name}</TextSubheading>
                <TextPrice currency="$" price={colorway.price} size="small" />
                <div
                  className="nike-pdp-rating"
                  aria-label={`Rated ${colorway.rating} out of 5`}
                >
                  <span aria-hidden="true" className="nike-pdp-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <IconStar key={star} size="16" />
                    ))}
                  </span>
                  <TextSmall>
                    {colorway.rating} · {colorway.reviews} reviews
                  </TextSmall>
                </div>
              </Flex>

              <RadioGroup
                label="Select size (US)"
                orientation="horizontal"
                value={size}
                onChange={(value) => {
                  setSize(value);
                  setShowSizeError(false);
                }}
                isInvalid={showSizeError}
                errorMessage="Please select a size."
                className="nike-pdp-sizes"
              >
                <div className="nike-pdp-size-grid">
                  {sizes.map((value) => {
                    const soldOut = soldOutSizes.includes(value);
                    return (
                      <RACRadio
                        key={value}
                        value={value}
                        isDisabled={soldOut}
                        aria-label={soldOut ? `${value}, sold out` : value}
                        className="nike-pdp-size"
                      >
                        {value}
                      </RACRadio>
                    );
                  })}
                </div>
              </RadioGroup>

              <Button
                variant="primary"
                size="medium"
                className="nike-pdp-add"
                onPress={() => setShowSizeError(size === null)}
              >
                Add to bag
                <IconShoppingBag />
              </Button>

              <Flex direction="column" gap="400" className="nike-pdp-features">
                {features.map(({ icon, heading, body }) => (
                  <div key={heading} className="nike-pdp-feature">
                    {icon}
                    <Flex direction="column" gap="100">
                      <TextStrong>{heading}</TextStrong>
                      <Text>{body}</Text>
                    </Flex>
                  </div>
                ))}
              </Flex>
            </Flex>
          </FlexItem>
        </Flex>
      </Section>

      <Section padding={sectionPadding} variant="neutral">
        <Flex
          container
          direction="column"
          alignPrimary="center"
          alignSecondary="center"
          gap="600"
        >
          <TextContentHeading
            align="center"
            heading="Be first on the start line"
            subheading="Get launch alerts, early access and training tips."
          />
          <Form singleLine>
            <Input aria-label="Email address" placeholder="you@example.com" />
            <Button onPress={() => {}}>Sign up</Button>
          </Form>
        </Flex>
      </Section>

      <Footer />
    </div>
  );
}
