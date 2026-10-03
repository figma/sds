import { Card, Header } from "compositions";
import { IconArrowRight } from "icons";
import { Flex } from "layout";
import {
  Button,
  Text,
  TextHeading,
  TextSmall,
  TextSubtitle,
  TextTitleHero,
} from "primitives";
import "./run-club.css";

const runDetails = [
  { heading: "Distance", body: "10K" },
  { heading: "Pace", body: "5:30/km" },
  { heading: "Start", body: "9:00" },
  { heading: "Route", body: "Riverside loop" },
];

export function RunClub() {
  return (
    <div className="run-club">
      <Header />
      <main className="run-club-content">
        <Flex direction="column" alignSecondary="stretch" gap="200">
          <TextTitleHero className="run-club-title">SATURDAY RUN CLUB</TextTitleHero>
          <TextSubtitle className="run-club-subtitle" lineClamp={1}>
            10K · SUNDAYS · 9:00
          </TextSubtitle>
        </Flex>

        <Button variant="primary" onPress={() => {}}>
          Join the run
          <IconArrowRight size="20" />
        </Button>

        <Flex direction="column" alignSecondary="stretch" gap="300">
          {runDetails.map(({ heading, body }) => (
            <Card
              key={heading}
              className="run-club-detail"
              direction="horizontal"
              variant="stroke"
              padding="600"
            >
              <Flex direction="column" gap="200">
                <TextHeading>{heading}</TextHeading>
                <Text>{body}</Text>
              </Flex>
            </Card>
          ))}
        </Flex>
      </main>

      {/* The Code Connect Footer has fixed link-list content; this frame
          overrides its slot, so it is composed here instead. */}
      <footer className="run-club-footer">
        <Flex direction="column" alignSecondary="stretch" gap="1600">
          <Flex alignPrimary="center">
            <TextSmall className="run-club-footer-title">
              BUILT FOR EVERY PACE
            </TextSmall>
          </Flex>
          <TextSmall className="run-club-secondary">
            Sundays · 9:00 · All runners welcome
          </TextSmall>
        </Flex>
      </footer>
    </div>
  );
}
