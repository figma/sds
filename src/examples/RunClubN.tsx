import { Card } from "compositions";
import { Flex } from "layout";
import {
  Button,
  Text,
  TextHeading,
  TextSmall,
  TextSmallStrong,
  TextSubtitle,
} from "primitives";
import "./run-club-n.css";

const runDetails = [
  { heading: "Distance", body: "10K" },
  { heading: "Pace", body: "5:30/km" },
  { heading: "Start", body: "9:00" },
];

export function RunClubN() {
  return (
    <div className="run-club-n">
      <main className="run-club-n-content">
        <Flex direction="column" alignSecondary="stretch" gap="1200">
          <Flex direction="column" alignSecondary="stretch" gap="600">
            <TextSmallStrong className="run-club-n-eyebrow">
              Run Club N · Weekly city miles
            </TextSmallStrong>
            <Flex direction="column" alignSecondary="stretch" gap="400">
              {/* Code Connect maps this to TextHeading; the frame overrides
                  its text style with Title Hero. */}
              <TextHeading className="run-club-n-title">
                SATURDAY RUN CLUB
              </TextHeading>
              <TextSubtitle className="run-club-n-subtitle">
                Ten kilometers. One city. Every Sunday.
              </TextSubtitle>
            </Flex>
          </Flex>

          <Flex direction="column" alignSecondary="stretch" gap="300">
            {runDetails.map(({ heading, body }) => (
              <Card
                key={heading}
                className="run-club-n-detail"
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

        <Flex direction="column" alignSecondary="stretch" gap="300">
          <TextSmall className="run-club-n-note">
            Meet at the north entrance. Bag drop opens at 8:40.
          </TextSmall>
          <Button variant="primary" onPress={() => {}}>
            Join the run
          </Button>
        </Flex>
      </main>
    </div>
  );
}
