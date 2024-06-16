import figma from "@figma/code-connect";
import { Text, TextStrong } from "../Text/Text";
import { Notification } from "./Notification";

figma.connect(Notification, "<FIGMA_URL_NOTIFICATION>", {
  props: {
    title: figma.string("Title"),
    icon: figma.boolean("Has Icon", {
      true: figma.instance("Icon"),
      false: undefined,
    }),
    isDismissible: figma.boolean("Is Dismissible"),
    button: figma.children("Button"),
    body: figma.string("Body"),
    variant: figma.enum("Variant", {
      Message: "message",
      Alert: "alert",
    }),
  },
  example: ({ icon, isDismissible, button, body, title }) => (
    <Notification icon={icon} isDismissible={isDismissible}>
      <TextStrong>{title}</TextStrong>
      <Text>{body}</Text>
      {button}
    </Notification>
  ),
});
