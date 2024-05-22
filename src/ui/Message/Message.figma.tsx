import figma from "@figma/code-connect";
import { Message, MessageActions, MessageBody, MessageTitle } from "./Message";

figma.connect(
  Message,
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=56-11719&t=Rnfd6fBILKf5apxJ-11",
  {
    props: {
      actions: figma.boolean("Has Link", {
        true: <MessageActions>{figma.children("Text Link")}</MessageActions>,
        false: undefined,
      }),
      body: figma.boolean("Has Body", {
        true: <MessageBody>{figma.children("Body")}</MessageBody>,
        false: undefined,
      }),
      hasIcon: figma.boolean("Has Icon"),
      title: figma.string("Title"),
      isDismissible: figma.boolean("Is Dismissible"),
      scheme: figma.enum("Scheme", {
        Positive: "positive",
        Warning: "warning",
        Danger: "danger",
        Neutral: "neutral",
      }),
      variant: figma.enum("Variant", {
        Secondary: "secondary",
      }),
    },
    example: ({ hasIcon, isDismissible, actions, body, title }) => (
      <Message hasIcon={hasIcon} isDismissible={isDismissible}>
        <MessageTitle>{title}</MessageTitle>
        {body}
        {actions}
      </Message>
    ),
  },
);
