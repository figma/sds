import { Card } from "compositions";
import { IconClock } from "icons";
import { Flex } from "layout";
import {
  Button,
  Text,
  TextHeading,
  TextStrong,
  TextSubtitle,
} from "primitives";
import { ReactNode } from "react";
import "./nike-run-club-8.css";

const runDetails: { label: string; value: string; asset?: ReactNode }[] = [
  { label: "Distance", value: "10K" },
  { label: "Pace", value: "5:30/km" },
  { label: "Start", value: "9:00", asset: <IconClock size="32" /> },
];

export function NikeRunClub8() {
  return (
    <div className="nike-run-club-8">
      <main className="nike-run-club-8-content">
        <section className="nike-run-club-8-hero">
          <TextStrong elementType="p">NIKE RUN CLUB 8</TextStrong>
          <Flex direction="column" alignSecondary="stretch" gap="400">
            <TextHeading elementType="h1" className="nike-run-club-8-title">
              SUNDAY RUN CLUB
            </TextHeading>
            <TextSubtitle className="nike-run-club-8-subtitle">
              10K. All paces welcome.
            </TextSubtitle>
          </Flex>
        </section>

        <Flex direction="column" alignSecondary="stretch" gap="400">
          <TextStrong elementType="h2" className="nike-run-club-8-label">
            RUN DETAILS
          </TextStrong>
          <Flex direction="column" alignSecondary="stretch" gap="300">
            {runDetails.map(({ label, value, asset }) => (
              <Card
                key={label}
                className="nike-run-club-8-detail"
                asset={asset}
                direction="horizontal"
                variant="stroke"
                padding="600"
              >
                <Flex direction="column" gap="200">
                  <TextHeading>{label}</TextHeading>
                  <Text>{value}</Text>
                </Flex>
              </Card>
            ))}
          </Flex>
        </Flex>

        <Flex direction="column" alignSecondary="stretch" gap="400">
          <Button variant="primary" onPress={() => {}}>
            Join the run
          </Button>
          <Text lineHeight="single" className="nike-run-club-8-note">
            Free to join · Meet at the starting line
          </Text>
        </Flex>
      </main>
    </div>
  );
}
