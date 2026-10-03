import { Card } from "compositions";
import { IconCalendar } from "icons";
import { Flex } from "layout";
import { Button, Text, TextHeading, TextSmallStrong } from "primitives";
import "./run-club-5.css";

const runMetrics = [
  { value: "10K", label: "DISTANCE" },
  { value: "5:30/km", label: "PACE" },
  { value: "9:00", label: "START" },
];

export function RunClub5() {
  return (
    <div className="run-club-5">
      <main className="run-club-5-content">
        <Flex direction="column" alignSecondary="stretch" gap="1200">
          <Flex direction="column" alignSecondary="stretch" gap="400">
            <Flex alignSecondary="center" gap="200">
              <IconCalendar size="20" />
              <TextSmallStrong className="run-club-5-eyebrow">
                Nike Run Club 5
              </TextSmallStrong>
            </Flex>
            {/* Code Connect maps this to TextHeading; the frame overrides
                its text style with Title Hero. */}
            <TextHeading className="run-club-5-title">
              SATURDAY RUN CLUB
            </TextHeading>
            <Text className="run-club-5-intro">
              A social city loop for steady miles and good company. All paces
              are welcome.
            </Text>
          </Flex>

          <Flex direction="column" alignSecondary="stretch" gap="300">
            {runMetrics.map(({ value, label }) => (
              <Card
                key={label}
                className="run-club-5-metric"
                direction="horizontal"
                variant="stroke"
                padding="600"
              >
                <Flex direction="column" gap="200">
                  <TextHeading>{value}</TextHeading>
                  <Text>{label}</Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>

        <Flex direction="column" alignSecondary="stretch" gap="300">
          <TextSmallStrong className="run-club-5-note">
            Free to join · Meet at Riverside Gate
          </TextSmallStrong>
          <Button variant="primary" onPress={() => {}}>
            Join the run
          </Button>
        </Flex>
      </main>
    </div>
  );
}
