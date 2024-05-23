import figma from "@figma/code-connect";
import { Alert, AlertActions, AlertBody, AlertTitle } from "./Alert";

const FIGMA_URL_ALERT =
  "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy/SDS?node-id=2093-2151&m=dev";

figma.connect(Alert, FIGMA_URL_ALERT, {
  props: {
    title: figma.string("Title"),
    hasIcon: figma.boolean("Has Icon"),
    isDismissible: figma.boolean("Is Dismissible"),
    actions: figma.enum("Scheme", {
      Message: figma.children("Button"),
      Alert: undefined,
    }),
    body: figma.boolean("Has Body", {
      true: figma.string("Body"),
      false: undefined,
    }),
    scheme: figma.enum("Scheme", {
      Message: "message",
      Warning: "warning",
      Danger: "danger",
      Neutral: "neutral",
    }),
  },
  example: ({ hasIcon, isDismissible, actions, body, title }) => (
    <Alert hasIcon={hasIcon} isDismissible={isDismissible}>
      <AlertTitle>{title}</AlertTitle>
      <AlertBody>{body}</AlertBody>
      <AlertActions>{actions}</AlertActions>
    </Alert>
  ),
});
