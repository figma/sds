import { Card } from "compositions";
import { Flex } from "layout";
import {
  Button,
  Text,
  TextHeading,
  TextSubtitle,
  TextTitleHero,
} from "primitives";
import "./nike-run-club-7.css";

const runMetrics = [
  { value: "10K", label: "Distance" },
  { value: "5:30/km", label: "Pace" },
  { value: "9:00", label: "Start" },
];

export function NikeRunClub7() {
  return (
    <div className="nike-run-club-7">
      <main className="nike-run-club-7-content">
        <Flex direction="column" alignSecondary="stretch" gap="1600">
          <Flex direction="column" alignSecondary="stretch" gap="600">
            <TextTitleHero className="nike-run-club-7-title">
              SATURDAY RUN CLUB
            </TextTitleHero>
            <TextSubtitle className="nike-run-club-7-subtitle">
              10K through the city. All paces welcome.
            </TextSubtitle>
          </Flex>

          <Flex direction="column" alignSecondary="stretch" gap="300">
            {runMetrics.map(({ value, label }) => (
              <Card
                key={label}
                className="nike-run-club-7-metric"
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

        <Button variant="primary" onPress={() => {}}>
          Join the run
        </Button>
      </main>
    </div>
  );
}
