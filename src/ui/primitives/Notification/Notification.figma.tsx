// import figma from "@figma/code-connect";
// import {
//   Notification,
//   NotificationActions,
//   NotificationBody,
//   NotificationTitle,
// } from "./Notification";

// figma.connect(Notification, "<FIGMA_URL_NOTIFICATION>", {
//   props: {
//     title: figma.string("Title"),
//     hasIcon: figma.boolean("Has Icon"),
//     isDismissible: figma.boolean("Is Dismissible"),
//     actions: figma.enum("Scheme", {
//       Message: figma.children("Button"),
//       Notification: undefined,
//     }),
//     body: figma.boolean("Has Body", {
//       true: figma.string("Body"),
//       false: undefined,
//     }),
//     scheme: figma.enum("Scheme", {
//       Message: "message",
//       Warning: "warning",
//       Danger: "danger",
//       Neutral: "neutral",
//     }),
//   },
//   example: ({ hasIcon, isDismissible, actions, body, title }) => (
//     <Notification hasIcon={hasIcon} isDismissible={isDismissible}>
//       <NotificationTitle>{title}</NotificationTitle>
//       <NotificationBody>{body}</NotificationBody>
//       <NotificationActions>{actions}</NotificationActions>
//     </Notification>
//   ),
// });
