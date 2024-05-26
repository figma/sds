import {
  PricingCard,
  StandardFooter,
  TestimonialCard,
  VerticalHeader,
} from "blocks";
import {
  IconCircle,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconYoutube,
} from "icons";
import {
  Accordion,
  AccordionItem,
  Avatar,
  AvatarBlock,
  Button,
  ButtonGroup,
  Card,
  Description,
  Field,
  Flex,
  FlexItem,
  Form,
  IconButton,
  Image,
  Input,
  Label,
  Logo,
  Navigation,
  NavigationItem,
  Section,
  Text,
  TextArea,
  TextContentHeading,
  TextContentTitle,
  TextHeading,
  TextLink,
  TextLinkList,
  TextList,
  TextListItem,
  TextPrice,
  TextStrong,
} from "ui";

function App() {
  return (
    <>
      <VerticalHeader>
        <Flex direction="column" container alignSecondary="center" gap="md">
          <Flex alignPrimary="center">
            <Logo />
          </Flex>
          <Flex alignPrimary="center">
            <Navigation>
              <NavigationItem>Home</NavigationItem>
              <NavigationItem isSelected>About</NavigationItem>
              <NavigationItem>Pricing</NavigationItem>
              <NavigationItem>Blog</NavigationItem>
              <NavigationItem>Careers</NavigationItem>
              <NavigationItem>Contact</NavigationItem>
            </Navigation>
          </Flex>
        </Flex>
      </VerticalHeader>
      <Section padding="md">
        <Flex direction="column" gap="xxl" container>
          <TextContentHeading heading="Heading" subheading="Subheading" />
          <Flex wrap type="third" gap="xxl">
            <Card
              asset={
                <Image
                  aspectRatio="1-1"
                  alt="Always use alt"
                  src="https://picsum.photos/600/600"
                />
              }
            >
              <TextHeading>Text Heading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
            </Card>
            <Card
              asset={
                <Image
                  aspectRatio="1-1"
                  alt="Always use alt"
                  src="https://picsum.photos/600/600"
                />
              }
            >
              <TextHeading>Text Heading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
            </Card>
            <Card
              asset={
                <Image
                  aspectRatio="1-1"
                  alt="Always use alt"
                  src="https://picsum.photos/600/600"
                />
              }
            >
              <TextHeading>Text Heading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
            </Card>
            <Card
              asset={
                <Image
                  aspectRatio="1-1"
                  alt="Always use alt"
                  src="https://picsum.photos/600/600"
                />
              }
            >
              <TextHeading>Text Heading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
            </Card>
            <Card
              asset={
                <Image
                  aspectRatio="1-1"
                  alt="Always use alt"
                  src="https://picsum.photos/600/600"
                />
              }
            >
              <TextHeading>Text Heading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
            </Card>
            <Card
              asset={
                <Image
                  aspectRatio="1-1"
                  alt="Always use alt"
                  src="https://picsum.photos/600/600"
                />
              }
            >
              <TextHeading>Text Heading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
            </Card>
          </Flex>
        </Flex>
      </Section>
      <Section padding="lg">
        <Flex direction="row" alignPrimary="center" wrap container>
          <TextContentTitle align="center" title="Title" subtitle="Subtitle" />
        </Flex>
      </Section>
      <Section padding="lg">
        <Flex
          direction="column"
          gap="xxl"
          alignSecondary="center"
          type="half"
          container
        >
          <TextContentTitle align="center" title="Title" subtitle="Subtitle" />
          <FlexItem size="major">
            <ButtonGroup align="justify">
              <Button onPress={() => {}} variant="secondary">
                Button
              </Button>
              <Button onPress={() => {}}>Button</Button>
            </ButtonGroup>
          </FlexItem>
        </Flex>
      </Section>
      <Section padding="lg">
        <Flex
          direction="column"
          gap="xxl"
          alignSecondary="center"
          type="half"
          container
        >
          <TextContentTitle align="center" title="Title" subtitle="Subtitle" />
          <FlexItem size="half">
            <Form singleLine>
              <Input placeholder="you@example.com" />
              <Button onPress={() => {}}>Submit</Button>
            </Form>
          </FlexItem>
        </Flex>
      </Section>
      <Section padding="md">
        <Flex container type="half" alignPrimary="center" gap="xxl">
          <FlexItem size="full">
            <Image
              aspectRatio="16-9"
              alt="Always use alt"
              src="https://picsum.photos/800/450"
            />
          </FlexItem>
        </Flex>
      </Section>
      <Section padding="md">
        <Flex container type="half" alignPrimary="center" gap="xxl">
          <FlexItem size="half">
            <Flex direction="column" gap="xl">
              <TextContentHeading heading="Heading" subheading="Subheading" />
              <Text>
                Body text for your whole article or post. We’ll put in some
                lorem ipsum to show how a filled-out page might look:
              </Text>
              <Text>
                Excepteur efficient emerging, minim veniam anim aute carefully
                curated Ginza conversation exquisite perfect nostrud nisi
                intricate Content. Qui international first-class nulla ut.
                Punctual adipisicing, essential lovely queen tempor eiusmod
                irure. Exclusive izakaya charming Scandinavian impeccable aute
                quality of life soft power pariatur Melbourne occaecat
                discerning. Qui wardrobe aliquip, et Porter destination Toto
                remarkable officia Helsinki excepteur Basset hound. Zürich
                sleepy perfect consectetur.
              </Text>
            </Flex>
          </FlexItem>
          <FlexItem size="half">
            <Image
              aspectRatio="4-3"
              alt="Always use alt"
              src="https://picsum.photos/800/600"
            />
          </FlexItem>
        </Flex>
      </Section>
      <Section padding="md">
        <Flex container type="half" alignPrimary="center" gap="xxl">
          <FlexItem size="half">
            <Image
              aspectRatio="4-3"
              alt="Always use alt"
              src="https://picsum.photos/800/600"
            />
          </FlexItem>
          <FlexItem size="half">
            <Flex direction="column" gap="xl">
              <TextContentHeading heading="Heading" subheading="Subheading" />
              <Text>
                Body text for your whole article or post. We’ll put in some
                lorem ipsum to show how a filled-out page might look:
              </Text>
              <Text>
                Excepteur efficient emerging, minim veniam anim aute carefully
                curated Ginza conversation exquisite perfect nostrud nisi
                intricate Content. Qui international first-class nulla ut.
                Punctual adipisicing, essential lovely queen tempor eiusmod
                irure. Exclusive izakaya charming Scandinavian impeccable aute
                quality of life soft power pariatur Melbourne occaecat
                discerning. Qui wardrobe aliquip, et Porter destination Toto
                remarkable officia Helsinki excepteur Basset hound. Zürich
                sleepy perfect consectetur.
              </Text>
            </Flex>
          </FlexItem>
        </Flex>
      </Section>
      <Section padding="md">
        <Flex alignPrimary="center" wrap type="half" container gap="xxl">
          <Image
            aspectRatio="4-3"
            alt="Always use alt"
            src="https://picsum.photos/800/600"
          />
          <Image
            aspectRatio="4-3"
            alt="Always use alt"
            src="https://picsum.photos/800/600"
          />
        </Flex>
      </Section>
      <Section padding="lg" variant="brand">
        <Flex
          direction="column"
          type="third"
          alignSecondary="center"
          gap="xxl"
          container
        >
          <TextContentTitle align="center" title="Title" subtitle="Subtitle" />
          <FlexItem size="minor">
            <Card variant="padded">
              <Flex direction="column" gap="xl">
                <Field>
                  <Label>First Name</Label>
                  <Input placeholder="Jan" />
                </Field>
                <Field>
                  <Label>Last Name</Label>
                  <Input placeholder="Doe" />
                </Field>
                <Field>
                  <Label>Email</Label>
                  <Input placeholder="you@example.com" />
                </Field>
                <Field>
                  <Label>Feedback</Label>
                  <TextArea placeholder="Text goes here..."></TextArea>
                </Field>
                <ButtonGroup align="justify">
                  <Button onPress={() => {}}>Send</Button>
                </ButtonGroup>
              </Flex>
            </Card>
          </FlexItem>
        </Flex>
      </Section>
      <Section padding="sm" variant="secondary">
        <Flex direction="column" gap="xl" container>
          <Flex alignPrimary="center">
            <Navigation>
              <NavigationItem isSelected>Monthly</NavigationItem>
              <NavigationItem>Yearly</NavigationItem>
            </Navigation>
          </Flex>
          <Flex container type="third" gap="xxl" wrap>
            <PricingCard>
              <TextHeading>Free</TextHeading>
              <TextPrice label="/ month" currency="$" price="50" />
              <TextList>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
              </TextList>
              <ButtonGroup align="justify">
                <Button onPress={() => {}} variant="secondary">
                  Button
                </Button>
              </ButtonGroup>
            </PricingCard>
            <PricingCard>
              <TextHeading>Starter</TextHeading>
              <TextPrice label="/ month" currency="$" price="50" />
              <TextList>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
              </TextList>
              <ButtonGroup align="justify">
                <Button onPress={() => {}}>Button</Button>
              </ButtonGroup>
            </PricingCard>
            <PricingCard>
              <TextHeading>Enterprise</TextHeading>
              <TextPrice label="/ month" currency="$" price="50" />
              <TextList>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
                <TextListItem>List item</TextListItem>
              </TextList>
              <ButtonGroup align="justify">
                <Button onPress={() => {}} variant="secondary">
                  Button
                </Button>
              </ButtonGroup>
            </PricingCard>
          </Flex>
        </Flex>
      </Section>
      <Section padding="md">
        <Flex direction="column" gap="xxl" container>
          <TextContentHeading heading="Heading" subheading="Subheading" />
          <Flex direction="row" type="third" wrap gap="xxl">
            <TestimonialCard>
              <TextHeading>"Quote"</TextHeading>
              <AvatarBlock>
                <Avatar
                  size="lg"
                  src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                />
                <Label>Title</Label>
                <Description>Description</Description>
              </AvatarBlock>
            </TestimonialCard>
            <TestimonialCard>
              <TextHeading>"Quote"</TextHeading>
              <AvatarBlock>
                <Avatar
                  size="lg"
                  src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                />
                <Label>Title</Label>
                <Description>Description</Description>
              </AvatarBlock>
            </TestimonialCard>
            <TestimonialCard>
              <TextHeading>"Quote"</TextHeading>
              <AvatarBlock>
                <Avatar
                  size="lg"
                  src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                />
                <Label>Title</Label>
                <Description>Description</Description>
              </AvatarBlock>
            </TestimonialCard>
            <TestimonialCard>
              <TextHeading>"Quote"</TextHeading>
              <AvatarBlock>
                <Avatar
                  size="lg"
                  src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                />
                <Label>Title</Label>
                <Description>Description</Description>
              </AvatarBlock>
            </TestimonialCard>
            <TestimonialCard>
              <TextHeading>"Quote"</TextHeading>
              <AvatarBlock>
                <Avatar
                  size="lg"
                  src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                />
                <Label>Title</Label>
                <Description>Description</Description>
              </AvatarBlock>
            </TestimonialCard>
            <TestimonialCard>
              <TextHeading>"Quote"</TextHeading>
              <AvatarBlock>
                <Avatar
                  size="lg"
                  src="https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                />
                <Label>Title</Label>
                <Description>Description</Description>
              </AvatarBlock>
            </TestimonialCard>
          </Flex>
        </Flex>
      </Section>
      <Section padding="md">
        <Flex direction="column" gap="xxl" container>
          <TextContentHeading heading="Heading" subheading="Subheading" />
          <Card
            variant="stroke"
            asset={
              <Image
                aspectRatio="1-1"
                alt="Always use alt"
                src="https://picsum.photos/600/600"
              />
            }
            direction="horizontal"
          >
            <TextHeading>Text Heading</TextHeading>
            <Text>
              Body text for whatever you’d like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </Text>
            <ButtonGroup>
              <Button onPress={() => {}} variant="secondary">
                Button
              </Button>
            </ButtonGroup>
          </Card>
          <Card
            variant="stroke"
            asset={
              <Image
                aspectRatio="1-1"
                alt="Always use alt"
                src="https://picsum.photos/600/600"
              />
            }
            direction="horizontal"
          >
            <TextHeading>Text Heading</TextHeading>
            <Text>
              Body text for whatever you’d like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </Text>
            <ButtonGroup>
              <Button onPress={() => {}} variant="secondary">
                Button
              </Button>
            </ButtonGroup>
          </Card>
          <Card
            variant="stroke"
            asset={
              <Image
                aspectRatio="1-1"
                alt="Always use alt"
                src="https://picsum.photos/600/600"
              />
            }
            direction="horizontal"
          >
            <TextHeading>Text Heading</TextHeading>
            <Text>
              Body text for whatever you’d like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </Text>
            <ButtonGroup>
              <Button onPress={() => {}} variant="secondary">
                Button
              </Button>
            </ButtonGroup>
          </Card>
        </Flex>
      </Section>
      <Section padding="md">
        <Flex direction="column" container gap="xxl">
          <TextContentHeading heading="Heading" subheading="Subheading" />
          <Flex type="third" wrap gap="xxl">
            <Card asset={<IconCircle size="40" />}>
              <TextHeading>Text Heading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
            </Card>
            <Card asset={<IconCircle size="40" />}>
              <TextHeading>Text Heading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
            </Card>
            <Card asset={<IconCircle size="40" />}>
              <TextHeading>Text Heading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
            </Card>
            <Card asset={<IconCircle size="40" />}>
              <TextHeading>Text Heading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
            </Card>
            <Card asset={<IconCircle size="40" />}>
              <TextHeading>Text Heading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
            </Card>
            <Card asset={<IconCircle size="40" />}>
              <TextHeading>Text Heading</TextHeading>
              <Text>
                Body text for whatever you’d like to say. Add main takeaway
                points, quotes, anecdotes, or even a very very short story.{" "}
              </Text>
            </Card>
          </Flex>
        </Flex>
      </Section>
      <Section padding="md">
        <Flex
          direction="column"
          alignPrimary="center"
          alignSecondary="center"
          type="third"
          gap="xxl"
          wrap
          container
        >
          <TextContentHeading
            align="center"
            heading="Heading"
            subheading="Subheading"
          />
          <FlexItem size="major">
            <Accordion>
              <AccordionItem title="Title">
                Answer the frequently asked question in a simple sentence, a
                longish paragraph, or even in a list.
              </AccordionItem>
              <AccordionItem title="Title">
                Answer the frequently asked question in a simple sentence, a
                longish paragraph, or even in a list.
              </AccordionItem>
              <AccordionItem title="Title">
                Answer the frequently asked question in a simple sentence, a
                longish paragraph, or even in a list.
              </AccordionItem>
              <AccordionItem title="Title">
                Answer the frequently asked question in a simple sentence, a
                longish paragraph, or even in a list.
              </AccordionItem>
              <AccordionItem title="Title">
                Answer the frequently asked question in a simple sentence, a
                longish paragraph, or even in a list.
              </AccordionItem>
              <AccordionItem title="Title">
                Answer the frequently asked question in a simple sentence, a
                longish paragraph, or even in a list.
              </AccordionItem>
              <AccordionItem title="Title">
                Answer the frequently asked question in a simple sentence, a
                longish paragraph, or even in a list.
              </AccordionItem>
            </Accordion>
          </FlexItem>
        </Flex>
      </Section>
      <StandardFooter>
        <Flex container type="quarter" wrap gap="xl">
          <FlexItem size="minor">
            <Flex direction="column" gap="lg">
              <Logo />
              <ButtonGroup>
                <IconButton
                  aria-label="Write a nice description of the action."
                  onPress={() => {}}
                  size="sm"
                  variant="subtle"
                >
                  <IconFacebook />
                </IconButton>
                <IconButton
                  aria-label="Write a nice description of the action."
                  onPress={() => {}}
                  size="sm"
                  variant="subtle"
                >
                  <IconLinkedin />
                </IconButton>
                <IconButton
                  aria-label="Write a nice description of the action."
                  onPress={() => {}}
                  size="sm"
                  variant="subtle"
                >
                  <IconYoutube />
                </IconButton>
                <IconButton
                  aria-label="Write a nice description of the action."
                  onPress={() => {}}
                  size="sm"
                  variant="subtle"
                >
                  <IconInstagram />
                </IconButton>
              </ButtonGroup>
            </Flex>
          </FlexItem>
          <TextLinkList title={<TextStrong>Text Strong</TextStrong>}>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
          </TextLinkList>
          <TextLinkList title={<TextStrong>Text Strong</TextStrong>}>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
          </TextLinkList>
          <TextLinkList title={<TextStrong>Text Strong</TextStrong>}>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">List item</TextLink>
            </TextListItem>
          </TextLinkList>
        </Flex>
      </StandardFooter>
    </>
  );
}

export default App;
