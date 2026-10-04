import { Card } from "compositions";
import { Flex } from "layout";
import {
  Button,
  Text,
  TextHeading,
  TextSubtitle,
  TextTitleHero,
} from "primitives";
import "./run-club-6.css";

const runDetails = [
  { heading: "Distance", body: "10K" },
  { heading: "Pace", body: "5:30/km" },
  { heading: "Start", body: "9:00" },
];

export function RunClub6() {
  return (
    <div className="run-club-6">
      <main className="run-club-6-content">
        <Flex direction="column" alignSecondary="stretch" gap="400">
          <TextTitleHero className="run-club-6-title">
            SATURDAY RUN CLUB
          </TextTitleHero>
          <TextSubtitle className="run-club-6-subtitle">
            Ten kilometres, one city, every Sunday.
          </TextSubtitle>
        </Flex>

        <Flex direction="column" alignSecondary="stretch" gap="400">
          {runDetails.map(({ heading, body }) => (
            <Card
              key={heading}
              className="run-club-6-detail"
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

        <Button variant="primary" onPress={() => {}}>
          Join the run
        </Button>
      </main>
    </div>
  );
}
