import type { Meta, StoryObj } from "@storybook/react";
import { IconStar } from "icons";
import { Navigation, NavigationButton, NavigationPill } from "primitives";
import { useState } from "react";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  title: "SDS Primitives/Navigation",
  parameters: { layout: "centered" },
};
export default meta;

export const StoryNavigationButton: StoryObj<typeof Navigation> = {
  name: "Navigation Button",
  render: (args) => {
    const [current, setCurrent] = useState(1);
    return (
      <Navigation {...args}>
        <NavigationButton
          icon={<IconStar size="24" />}
          direction={args.direction === "column" ? "row" : "column"}
          isSelected={current === 1}
          onPress={() => setCurrent(1)}
        >
          Item 1
        </NavigationButton>
        <NavigationButton
          icon={<IconStar size="24" />}
          direction={args.direction === "column" ? "row" : "column"}
          isSelected={current === 2}
          onPress={() => setCurrent(2)}
        >
          Item 2
        </NavigationButton>
        <NavigationButton
          icon={<IconStar size="24" />}
          direction={args.direction === "column" ? "row" : "column"}
          isSelected={current === 3}
          onPress={() => setCurrent(3)}
        >
          Item 3
        </NavigationButton>
        <NavigationButton
          icon={<IconStar size="24" />}
          direction={args.direction === "column" ? "row" : "column"}
          isSelected={current === 4}
          onPress={() => setCurrent(4)}
        >
          Item 4
        </NavigationButton>
        <NavigationButton
          icon={<IconStar size="24" />}
          direction={args.direction === "column" ? "row" : "column"}
          isSelected={current === 5}
          onPress={() => setCurrent(5)}
        >
          Item 5
        </NavigationButton>
      </Navigation>
    );
  },
};

export const StoryNavigationPill: StoryObj<typeof Navigation> = {
  name: "Navigation Pill",
  render: (args) => {
    const [current, setCurrent] = useState(1);
    return (
      <Navigation {...args}>
        <NavigationPill
          isSelected={current === 1}
          onPress={() => setCurrent(1)}
        >
          Item 1
        </NavigationPill>
        <NavigationPill
          isSelected={current === 2}
          onPress={() => setCurrent(2)}
        >
          Item 2
        </NavigationPill>
        <NavigationPill
          isSelected={current === 3}
          onPress={() => setCurrent(3)}
        >
          Item 3
        </NavigationPill>
        <NavigationPill
          isSelected={current === 4}
          onPress={() => setCurrent(4)}
        >
          Item 4
        </NavigationPill>
        <NavigationPill
          isSelected={current === 5}
          onPress={() => setCurrent(5)}
        >
          Item 5
        </NavigationPill>
      </Navigation>
    );
  },
};
