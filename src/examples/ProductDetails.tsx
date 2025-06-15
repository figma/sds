import { useMediaQuery } from "hooks";
import { Flex, FlexItem, Section } from "layout";
import {
  Accordion,
  AccordionItem,
  Button,
  Image,
  SelectField,
  SelectItem,
  Tag,
  Text,
  TextHeading,
  TextPrice,
} from "primitives";

export function ProductDetails() {
  const { isMobile } = useMediaQuery();
  const flexGap = isMobile ? "600" : "1200";
  const sectionPadding = isMobile ? "600" : "1600";

  return (
    <Section padding={sectionPadding} variant="neutral">
      <Flex container type="half" wrap gap={flexGap}>
        <Image
          src="https://picsum.photos/seed/Modern office/1200/900"
          alt="Modern office chair in black"
          size="large"
          aspectRatio="4-3"
        />
        <FlexItem size="half">
          <Flex direction="column" gap="400" alignSecondary="stretch">
            <Flex alignSecondary="center" gap="200">
              <TextHeading>Ergonomic Office Chair </TextHeading>
              <Tag variant="secondary" scheme="positive" className="promo-tag">
                30% Off
              </Tag>
            </Flex>
            <FlexItem>
              <Flex direction="column" gap="200">
                <TextPrice currency="$" price="129.99" />
              </Flex>
            </FlexItem>
            <Text>
              Experience all-day comfort with our Ergonomic Office Chair,
              featuring adjustable lumbar support, breathable mesh back, and
              smooth-rolling casters. Perfect for home or office use.
            </Text>
            <FlexItem>
              <Flex wrap type="third" gap="200" alignSecondary="end">
                <SelectField
                  label="Color"
                  defaultSelectedKey="Black"
                  placeholder="Select color..."
                >
                  <SelectItem>Black</SelectItem>
                  <SelectItem>Gray</SelectItem>
                  <SelectItem>Blue</SelectItem>
                  <SelectItem>Red</SelectItem>
                  <SelectItem>White</SelectItem>
                </SelectField>
                <SelectField
                  label="Quantity"
                  defaultSelectedKey="1"
                  placeholder="Select quantity..."
                >
                  <SelectItem>1</SelectItem>
                  <SelectItem>2</SelectItem>
                  <SelectItem>3</SelectItem>
                  <SelectItem>4</SelectItem>
                  <SelectItem>5</SelectItem>
                </SelectField>
                <Button onPress={() => {}} variant="primary">
                  Add to Cart
                </Button>
              </Flex>
            </FlexItem>
            <Accordion>
              <AccordionItem title="Product Details">
                <>
                  <ul>
                    <li>Adjustable height and tilt</li>
                    <li>Breathable mesh backrest</li>
                    <li>360° swivel base</li>
                    <li>Weight capacity: 250 lbs</li>
                    <li>Easy assembly required</li>
                  </ul>
                </>
              </AccordionItem>
            </Accordion>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>
  );
}
