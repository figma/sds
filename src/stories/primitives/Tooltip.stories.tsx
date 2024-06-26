import type { Meta, StoryObj } from "@storybook/react";
import {
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
} from "icons";
import { Flex } from "layout";
import {
  DialogTrigger,
  IconButton,
  TextSmall,
  TextStrong,
  Tooltip,
} from "primitives";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip,
  title: "SDS Primitives/Tooltip",
  parameters: { layout: "centered" },
};

export default meta;

export const StoryTooltip: StoryObj<typeof Tooltip> = {
  name: "Tooltip",
  render: () => (
    <Flex type="half" gap="200" alignPrimary="center">
      <DialogTrigger>
        <IconButton aria-label="Up">
          <IconArrowUp />
        </IconButton>
        <Tooltip placement="top">
          <TextStrong>Something interesting</TextStrong>
          <TextSmall>
            For help accessing your account, please contact support.
          </TextSmall>
        </Tooltip>
      </DialogTrigger>
      <DialogTrigger>
        <IconButton aria-label="Down">
          <IconArrowDown />
        </IconButton>
        <Tooltip placement="bottom">
          <TextStrong>Something interesting</TextStrong>
          <TextSmall>
            For help accessing your account, please contact support.
          </TextSmall>
        </Tooltip>
      </DialogTrigger>
      <DialogTrigger>
        <IconButton aria-label="Left">
          <IconArrowLeft />
        </IconButton>
        <Tooltip placement="left">
          <TextStrong>Something interesting</TextStrong>
          <TextSmall>
            For help accessing your account, please contact support.
          </TextSmall>
        </Tooltip>
      </DialogTrigger>
      <DialogTrigger>
        <IconButton aria-label="Right">
          <IconArrowRight />
        </IconButton>
        <Tooltip placement="right">
          <TextStrong>Something interesting</TextStrong>
          <TextSmall>
            For help accessing your account, please contact support.
          </TextSmall>
        </Tooltip>
      </DialogTrigger>
    </Flex>
  ),
};
