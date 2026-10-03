import { Card } from "compositions";
import { Flex } from "layout";
import {
  Button,
  Text,
  TextHeading,
  TextSubtitle,
  TextTitleHero,
} from "primitives";
import "./run-club-4.css";

const runDetails = [
  { heading: "Distance", body: "10K" },
  { heading: "Pace", body: "5:30/km" },
  { heading: "Start", body: "9:00" },
];

export function RunClub4() {
  return (
    <div className="run-club-4">
      <main className="run-club-4-content">
        <Flex direction="column" alignSecondary="stretch" gap="800">
          <Flex direction="column" alignSecondary="stretch" gap="600">
            <Text lineHeight="single" className="run-club-4-muted">
              Run Club 4
            </Text>
            <Flex direction="column" alignSecondary="stretch" gap="300">
              <TextTitleHero className="run-club-4-title">
                SATURDAY RUN CLUB
              </TextTitleHero>
              <TextSubtitle className="run-club-4-subtitle run-club-4-muted">
                Ten kilometers. One fast Sunday.
              </TextSubtitle>
            </Flex>
            <hr className="run-club-4-divider" />
          </Flex>

          <Flex direction="column" alignSecondary="stretch" gap="300">
            {runDetails.map(({ heading, body }) => (
              <Card
                key={heading}
                className="run-club-4-detail"
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
        </Flex>

        <Flex direction="column" alignSecondary="stretch" gap="400">
          <Text className="run-club-4-muted">
            Meet at the north gate. We leave on time.
          </Text>
          <Button variant="primary" onPress={() => {}}>
            Join the run
          </Button>
        </Flex>
      </main>
    </div>
  );
}
