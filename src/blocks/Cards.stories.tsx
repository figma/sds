import type { Meta, StoryObj } from "@storybook/react";
import { IconActivity } from "icons";
import {
  AvatarBlock,
  AvatarButton,
  Button,
  ButtonGroup,
  Card,
  Description,
  Grid,
  GridItem,
  Image,
  Label,
  Text,
  TextList,
  TextListItem,
  TextSubheading,
  TextSubtitle,
} from "ui";
import {
  BasicCard,
  PricingCard,
  ProductInfoCard,
  TestimonialCard,
} from "./Cards";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "blocks/Cards",
  parameters: { layout: "centered" },
};
export default meta;

export const BasicCardStory: StoryObj<typeof BasicCard> = {
  render: () => (
    <Grid gap="xl" direction="column">
      <Grid
        gap="lg"
        direction="row"
        alignPrimary="center"
        alignSecondary="center"
      >
        <GridItem>
          <BasicCard media={<IconActivity size="32" />}>
            <TextSubheading>Subheading</TextSubheading>
            <Text>
              Body text for whatever you’d like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </Text>
            <ButtonGroup>
              <Button variant="secondary">Some action</Button>
            </ButtonGroup>
          </BasicCard>
        </GridItem>
        <GridItem>
          <BasicCard media={<IconActivity size="32" />}>
            <TextSubheading>Subheading</TextSubheading>
            <Text>
              Body text for whatever you’d like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </Text>
            <ButtonGroup>
              <Button variant="secondary">Some action</Button>
            </ButtonGroup>
          </BasicCard>
        </GridItem>
        <GridItem>
          <BasicCard media={<IconActivity size="32" />}>
            <TextSubheading>Subheading</TextSubheading>
            <Text>
              Body text for whatever you’d like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </Text>
            <ButtonGroup>
              <Button variant="secondary">Some action</Button>
            </ButtonGroup>
          </BasicCard>
        </GridItem>
      </Grid>
      <Grid gap="lg" direction="row">
        <GridItem>
          <BasicCard
            variant="padded"
            media={
              <Image alt="Accessibility!" src="https://picsum.photos/500" />
            }
          >
            <TextSubheading>Subheading</TextSubheading>
            <Text>
              Body text for whatever you’d like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </Text>
            <ButtonGroup>
              <Button variant="secondary">Some action</Button>
            </ButtonGroup>
          </BasicCard>
        </GridItem>
        <GridItem>
          <BasicCard
            variant="padded"
            media={
              <Image alt="Accessibility!" src="https://picsum.photos/500" />
            }
          >
            <TextSubheading>Subheading</TextSubheading>
            <Text>
              Body text for whatever you’d like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </Text>
            <ButtonGroup>
              <Button variant="secondary">Some action</Button>
            </ButtonGroup>
          </BasicCard>
        </GridItem>
        <GridItem>
          <BasicCard
            variant="padded"
            media={
              <Image alt="Accessibility!" src="https://picsum.photos/500" />
            }
          >
            <TextSubheading>Subheading</TextSubheading>
            <Text>
              Body text for whatever you’d like to say. Add main takeaway
              points, quotes, anecdotes, or even a very very short story.{" "}
            </Text>
            <ButtonGroup>
              <Button variant="secondary">Some action</Button>
            </ButtonGroup>
          </BasicCard>
        </GridItem>
      </Grid>
    </Grid>
  ),
};

export const PricingCardStory: StoryObj<typeof PricingCard> = {
  render: () => (
    <Grid gap="lg" direction="row">
      <GridItem>
        <PricingCard>
          <TextSubheading>Subheading</TextSubheading>
          <TextSubtitle>
            $5<Text elementType="span"> / per month</Text>
          </TextSubtitle>
          <TextList>
            <TextListItem>Something 1</TextListItem>
            <TextListItem>Something 2</TextListItem>
            <TextListItem>Something 3</TextListItem>
            <TextListItem>Something 4</TextListItem>
            <TextListItem>Something 5</TextListItem>
          </TextList>
          <ButtonGroup align="justify">
            <Button>Buy this</Button>
          </ButtonGroup>
        </PricingCard>
      </GridItem>
      <GridItem>
        <PricingCard>
          <TextSubheading>Subheading</TextSubheading>
          <TextSubtitle>
            $5<Text elementType="span"> / per month</Text>
          </TextSubtitle>
          <TextList>
            <TextListItem>Something 1</TextListItem>
            <TextListItem>Something 2</TextListItem>
            <TextListItem>Something 3</TextListItem>
            <TextListItem>Something 4</TextListItem>
            <TextListItem>Something 5</TextListItem>
          </TextList>
          <ButtonGroup align="justify">
            <Button>Buy this</Button>
          </ButtonGroup>
        </PricingCard>
      </GridItem>
      <GridItem>
        <PricingCard>
          <TextSubheading>Subheading</TextSubheading>
          <TextSubtitle>
            $5<Text elementType="span"> / per month</Text>
          </TextSubtitle>
          <TextList>
            <TextListItem>Something 1</TextListItem>
            <TextListItem>Something 2</TextListItem>
            <TextListItem>Something 3</TextListItem>
            <TextListItem>Something 4</TextListItem>
            <TextListItem>Something 5</TextListItem>
          </TextList>
          <ButtonGroup align="justify">
            <Button>Buy this</Button>
          </ButtonGroup>
        </PricingCard>
      </GridItem>
    </Grid>
  ),
};

export const ProductInfoCardStory: StoryObj<typeof ProductInfoCard> = {
  render: () => (
    <Grid gap="lg" direction="row">
      <GridItem>
        <ProductInfoCard
          media={<Image alt="Accessibility!" src="https://picsum.photos/250" />}
        >
          <TextSubtitle>Product</TextSubtitle>
          <TextSubheading>$5</TextSubheading>
          <ButtonGroup align="start">
            <Button variant="secondary">Buy this</Button>
          </ButtonGroup>
        </ProductInfoCard>
      </GridItem>
      <GridItem>
        <ProductInfoCard
          media={<Image alt="Accessibility!" src="https://picsum.photos/250" />}
        >
          <TextSubtitle>Product</TextSubtitle>
          <TextSubheading>$5</TextSubheading>
          <ButtonGroup align="start">
            <Button variant="secondary">Buy this</Button>
          </ButtonGroup>
        </ProductInfoCard>
      </GridItem>
    </Grid>
  ),
};

export const TestimonialCardStory: StoryObj<typeof TestimonialCard> = {
  render: () => (
    <Grid gap="lg" direction="row">
      <GridItem>
        <TestimonialCard>
          <TextSubtitle>"Something nice"</TextSubtitle>
          <AvatarBlock>
            <AvatarButton size="lg" src="https://picsum.photos/200" />
            <Label>Full Name</Label>
            <Description>@fullname420</Description>
          </AvatarBlock>
        </TestimonialCard>
      </GridItem>
      <GridItem>
        <TestimonialCard>
          <TextSubtitle>"Something nice"</TextSubtitle>
          <AvatarBlock>
            <AvatarButton size="lg" src="https://picsum.photos/200" />
            <Label>Full Name</Label>
            <Description>@fullname420</Description>
          </AvatarBlock>
        </TestimonialCard>
      </GridItem>
      <GridItem>
        <TestimonialCard>
          <TextSubtitle>"Something nice"</TextSubtitle>
          <AvatarBlock>
            <AvatarButton size="lg" src="https://picsum.photos/200" />
            <Label>Full Name</Label>
            <Description>@fullname420</Description>
          </AvatarBlock>
        </TestimonialCard>
      </GridItem>
    </Grid>
  ),
};
