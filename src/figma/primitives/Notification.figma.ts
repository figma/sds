// url=<FIGMA_NOTIFICATION_NOTIFICATION>
// source=https://github.com/figma/sds/blob/main/src/ui/primitives/Notification/Notification.tsx
// component=Notification

import figma from "figma"

const title = figma.selectedInstance.getString("Title")
const icon = figma.selectedInstance.getBoolean("Has Icon", {
  true: figma.selectedInstance.getInstanceSwap("Icon")?.executeTemplate()
    .example,
  false: undefined,
})
const isDismissible = figma.selectedInstance.getBoolean("Dismissible")
const button = figma.properties.children(["Button"])
const body = figma.selectedInstance.getString("Body")
const variant = figma.selectedInstance.getEnum("Variant", {
  Message: "message",
  Alert: "alert",
})

export default {
  id: "Notification",
  imports: ['import { Notification, Text, TextStrong } from "primitives";'],
  example: figma.code`<Notification${figma.helpers.react.renderProp(
    "icon",
    icon,
  )}${isDismissible ? " isDismissible" : ""} variant="${variant}">
      <TextStrong>${title}</TextStrong>
      <Text>${body}</Text>
      ${button}
    </Notification>`,
  metadata: { nestable: true },
}
