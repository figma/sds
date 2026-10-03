import { Card, Header } from "compositions";
import { IconArrowRight } from "icons";
import { Flex } from "layout";
import {
  Button,
  Text,
  TextHeading,
  TextSmall,
  TextTitleHero,
} from "primitives";
import "./run-club.css";

const runDetails = [
  { heading: "Distance", body: "10K" },
  { heading: "Pace", body: "5:30/km" },
  { heading: "Start", body: "09:00" },
  { heading: "Route", body: "Riverside loop" },
];

export function RunClub() {
  return (
    <div className="run-club">
      <Header />
      <main className="run-club-content">
        <Flex direction="column" alignSecondary="stretch" gap="800">
          <Flex direction="column" alignSecondary="stretch" gap="600">
            <Flex direction="column" alignSecondary="stretch" gap="200">
              <TextTitleHero className="run-club-title">
                SATURDAY RUN CLUB
              </TextTitleHero>
              <Text className="run-club-secondary">
                A friendly weekly 10K through the city. All runners welcome.
              </Text>
            </Flex>
            <Button variant="primary" onPress={() => {}}>
              Join the run
              <IconArrowRight size="20" />
            </Button>
          </Flex>

          <Flex direction="column" alignSecondary="stretch" gap="300">
            <TextHeading elementType="h2" className="run-club-heading">
              This week’s run
            </TextHeading>
            <Flex direction="column" alignSecondary="stretch" gap="200">
              {runDetails.map(({ heading, body }) => (
                <Card
                  key={heading}
                  direction="horizontal"
                  variant="stroke"
                  padding="600"
                >
                  <Flex direction="column" gap="200">
                    <TextHeading>{heading}</TextHeading>
                    <Text className="run-club-secondary">{body}</Text>
                  </Flex>
                </Card>
              ))}
            </Flex>
          </Flex>
        </Flex>

        <footer className="run-club-footer">
          <Flex alignPrimary="space-between" alignSecondary="center">
            <TextSmall className="run-club-secondary">
              Weekly miles. Better together.
            </TextSmall>
            <TextSmall>Saturdays</TextSmall>
          </Flex>
        </footer>
      </main>
    </div>
  );
}
