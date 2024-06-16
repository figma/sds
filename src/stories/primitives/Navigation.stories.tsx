import type { Meta, StoryObj } from "@storybook/react";
import { Navigation, NavigationItem } from "primitives";
import { useState } from "react";

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  title: "SDS Primitives/Navigation",
  parameters: { layout: "centered" },
};
export default meta;

export const Default: StoryObj<typeof Navigation> = {
  render: (args) => {
    const [current, setCurrent] = useState(1);
    return (
      <Navigation {...args}>
        <NavigationItem
          isSelected={current === 1}
          onPress={() => setCurrent(1)}
        >
          Item 1
        </NavigationItem>
        <NavigationItem
          isSelected={current === 2}
          onPress={() => setCurrent(2)}
        >
          Item 2
        </NavigationItem>
        <NavigationItem
          isSelected={current === 3}
          onPress={() => setCurrent(3)}
        >
          Item 3
        </NavigationItem>
        <NavigationItem
          isSelected={current === 4}
          onPress={() => setCurrent(4)}
        >
          Item 4
        </NavigationItem>
        <NavigationItem
          isSelected={current === 5}
          onPress={() => setCurrent(5)}
        >
          Item 5
        </NavigationItem>
      </Navigation>
    );
  },
};
