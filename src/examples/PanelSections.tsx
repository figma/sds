import { Hero, Panel } from "compositions";
import { useMediaQuery } from "hooks";
import { Flex, FlexItem, Section } from "layout";
import { Image, Text, TextContentHeading, TextContentTitle } from "primitives";

export function PanelSections() {
  const { isMobile } = useMediaQuery();
  const flexGap = isMobile ? "600" : "1200";
  const sectionPadding = isMobile ? "600" : "1600";

  return (
    <>
      <Section padding={sectionPadding} variant="brand">
        <Panel type="auto">
          <FlexItem size="fill">
            <Image
              src="https://picsum.photos/seed/Mountain landscape/1200/900"
              alt="Mountain landscape"
              aspectRatio="fill"
              size="large"
            />
          </FlexItem>
        </Panel>
      </Section>

      <Section padding={sectionPadding} variant="stroke">
        <Panel alignSecondary="center" gap={flexGap} type="half">
          <Image
            src="https://picsum.photos/seed/Forest path/1200/900"
            alt="Forest path"
            aspectRatio="4-3"
            size="medium"
          />
          <FlexItem size="half">
            <Flex direction="column" gap="600">
              <TextContentHeading
                heading="Explore Nature"
                subheading="Discover the outdoors"
              />
              <Text>
                Experience the beauty of the world through breathtaking
                landscapes and serene environments.
              </Text>
              <Text>
                From tranquil forests to majestic mountains, immerse yourself in
                the wonders of nature. Whether you're seeking adventure or
                relaxation, the outdoors offers endless possibilities for
                exploration and inspiration.
              </Text>
            </Flex>
          </FlexItem>
        </Panel>
      </Section>

      <Section padding={sectionPadding} variant="neutral">
        <Panel alignSecondary="center" type="half" gap={flexGap}>
          <FlexItem size="half">
            <Flex direction="column" gap="600">
              <TextContentHeading
                heading="Urban Escapes"
                subheading="City adventures await"
              />
              <Text>
                Dive into the vibrant life of the city. Discover hidden gems,
                bustling streets, and cultural landmarks.
              </Text>
              <Text>
                Cities are alive with energy, offering unique experiences at
                every corner. From art galleries to cozy cafes, there's always
                something new to explore and enjoy.
              </Text>
            </Flex>
          </FlexItem>
          <Image
            src="https://picsum.photos/seed/City skyline/1200/900"
            alt="City skyline"
            aspectRatio="4-3"
            size="medium"
          />
        </Panel>
      </Section>

      <Section padding={sectionPadding} variant="stroke">
        <Panel type="half" gap={flexGap}>
          <Image
            src="https://picsum.photos/seed/Desert dunes/1200/900"
            alt="Desert dunes"
            aspectRatio="4-3"
            size="medium"
          />
          <Image
            src="https://picsum.photos/seed/Ocean waves/1200/900"
            alt="Ocean waves"
            aspectRatio="4-3"
            size="medium"
          />
        </Panel>
      </Section>

      <Hero
        padding="4000"
        variant="image"
        src="https://picsum.photos/seed/hero/1200/900"
      >
        <TextContentTitle align="center" title="Join us today." />
      </Hero>
    </>
  );
}
