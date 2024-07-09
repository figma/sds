import figma from "@figma/code-connect";
import { Notification, Text, TextStrong } from "primitives";

figma.connect(Notification, "<FIGMA_NOTIFICATION_NOTIFICATION>", {
  props: {
    title: figma.string("Title"),
    icon: figma.boolean("Has Icon", {
      true: figma.instance("Icon"),
      false: undefined,
    }),
    isDismissible: figma.boolean("Dismissible"),
    button: figma.children("Button"),
    body: figma.string("Body"),
    variant: figma.enum("Variant", {
      Message: "message",
      Alert: "alert",
    }),
  },
  example: ({ button, body, title, ...props }) => (
    <Notification {...props}>
      <TextStrong>{title}</TextStrong>
      <Text>{body}</Text>
      {button}
    </Notification>
  ),
});
