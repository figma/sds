import type { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonGroup } from "ui/Button/Button";
import { Grid, GridItem } from "ui/Grid/Grid";
import {
  Message,
  MessageActions,
  MessageBody,
  MessageTitle,
} from "ui/Message/Message";

const meta: Meta<typeof Message> = {
  component: Message,
  title: "ui/Message",
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: { isDismissible: true },
  argTypes: {},
  render: (args) => {
    return (
      <Grid alignPrimary="center">
        <GridItem>
          <Message {...args}>
            <MessageTitle>Message Title</MessageTitle>
            <MessageBody>Hello there! This is a message</MessageBody>
            <MessageActions>
              <ButtonGroup>
                <Button variant="secondary" size="sm">
                  Hello
                </Button>
              </ButtonGroup>
            </MessageActions>
          </Message>
        </GridItem>
        <GridItem>
          <Message {...args} scheme="danger">
            <MessageTitle>Message Title</MessageTitle>
            <MessageBody>Hello there! This is a message</MessageBody>
          </Message>
        </GridItem>
      </Grid>
    );
  },
};
