import { Card, Footer, Header, ProductInfoCard } from "compositions";
import { useMediaQuery } from "hooks";
import { IconLayers, IconWind, IconZap } from "icons";
import { shoeBlackVolt, shoeGreyBlack, shoeWhiteBlack } from "images";
import { Flex, Section } from "layout";
import {
  Button,
  ButtonGroup,
  Form,
  Image,
  Input,
  Tag,
  Text,
  TextContentHeading,
  TextContentTitle,
  TextHeading,
} from "primitives";
import "./nike-theme.css";

const navItems = ["New & Featured", "Men", "Women", "Kids", "Running"];

const features = [
  {
    icon: <IconZap size="40" />,
    heading: "Pulse foam",
    body: "A full-length foam core that returns more energy with every stride.",
  },
  {
    icon: <IconWind size="40" />,
    heading: "Airweave upper",
    body: "Engineered mesh that locks down your midfoot and breathes on long runs.",
  },
  {
    icon: <IconLayers size="40" />,
    heading: "Carbon plate",
    body: "A curved plate that snaps you forward through toe-off at race pace.",
  },
];

const colorways = [
  {
    heading: "Vector Pace 1 — Black/Volt",
    price: "180",
    rating: 4.9,
    description: "The launch colorway. Black upper, Volt foam, built for race day.",
    image: shoeBlackVolt,
  },
  {
    heading: "Vector Pace 1 — White/Black",
    price: "180",
    rating: 4.8,
    description: "Clean white mesh with black details for daily training miles.",
    image: shoeWhiteBlack,
  },
  {
    heading: "Vector Pace 1 — Grey/Black",
    price: "170",
    rating: 4.7,
    description: "Tonal grey with a black heel counter for early-morning runs.",
    image: shoeGreyBlack,
  },
];

export function NikeLaunch() {
  const { isMobile } = useMediaQuery();
  const sectionPadding = isMobile ? "600" : "1600";
  const flexGap = isMobile ? "600" : "1200";

  return (
    <div className="theme-nike">
      <Header navItems={navItems} />

      <Section className="nike-hero" padding={sectionPadding}>
        <Flex
          container
          direction="column"
          alignPrimary="center"
          alignSecondary="center"
          gap="800"
        >
          <Tag>New drop</Tag>
          <TextContentTitle
            align="center"
            title="Vector Pace 1"
            subtitle="Built for your fastest miles."
          />
          <ButtonGroup align="center">
            <Button onPress={() => {}}>Shop the drop</Button>
            <Button variant="neutral" onPress={() => {}}>
              Explore the tech
            </Button>
          </ButtonGroup>
          <Image
            src={shoeBlackVolt}
            alt="Vector Pace 1 in Black/Volt"
            aspectRatio="16-9"
            size="fill"
            variant="default"
          />
        </Flex>
      </Section>

      <Section padding={sectionPadding} variant="stroke">
        <Flex container direction="column" gap={flexGap}>
          <TextContentHeading
            align="start"
            heading="Engineered for speed"
            subheading="Three technologies, one fast shoe."
          />
          <Flex wrap type="third" gap="600">
            {features.map(({ icon, heading, body }) => (
              <Card key={heading} variant="stroke" padding="600" asset={icon}>
                <Flex direction="column" gap="200">
                  <TextHeading>{heading}</TextHeading>
                  <Text>{body}</Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>
      </Section>

      <Section padding={sectionPadding} variant="stroke">
        <Flex container direction="column" gap={flexGap}>
          <TextContentHeading
            align="start"
            heading="Pick your colorway"
            subheading="Available now in three launch colors."
          />
          <Flex wrap type="third" gap="600">
            {colorways.map(({ image, ...colorway }) => (
              <ProductInfoCard
                key={colorway.heading}
                {...colorway}
                asset={
                  <Image
                    src={image}
                    alt={colorway.heading}
                    aspectRatio="4-3"
                    className="product-info-card-asset"
                  />
                }
              />
            ))}
          </Flex>
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
