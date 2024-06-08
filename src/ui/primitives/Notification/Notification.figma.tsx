import figma from "@figma/code-connect";
import { Notification } from "./Notification";

figma.connect(Notification, "<FIGMA_URL_NOTIFICATION>", {
  props: {
    title: figma.children("Text Strong"),
    icon: figma.boolean("Has Icon", {
      true: figma.instance("Icon"),
      false: undefined,
    }),
    isDismissible: figma.boolean("Is Dismissible"),
    button: figma.children("Button"),
    body: figma.children("Text"),
    variant: figma.enum("Variant", {
      Message: "message",
      Alert: "alert",
    }),
  },
  example: ({ icon, isDismissible, button, body, title }) => (
    <Notification icon={icon} isDismissible={isDismissible}>
      {title}
      {body}
      {button}
    </Notification>
  ),
});
