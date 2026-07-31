// url=<FIGMA_NOTIFICATION_NOTIFICATION>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Notification/Notification.tsx
// component=Notification

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const title = instance.getString("Title");
const icon = instance.getBoolean("Has Icon", {
  true: instance.getInstanceSwap("Icon")?.executeTemplate().example,
  false: undefined,
});
const isDismissible = instance.getBoolean("Dismissible");
const button = figma.properties.children(["Button"]);
const body = instance.getString("Body");
const variant = instance.getEnum("Variant", {
  Message: "message",
  Alert: "alert",
});

export default {
  id: "Notification",
  imports: ['import { Notification, Text, TextStrong } from "primitives";'],
  example: figma.code`<Notification
    ${rp("icon", icon)}
    ${rp("isDismissible", isDismissible)}
    ${rp("variant", variant)}
    >
      <TextStrong>${title}</TextStrong>
      <Text>${body}</Text>
      ${button}
    </Notification>`,
  metadata: { nestable: true },
};
