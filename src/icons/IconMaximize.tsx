import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconMaximize = (props: IconProps) => (
  <Icon {...props}><path d="M5.33333 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V5.33333M14 5.33333V3.33333C14 2.97971 13.8595 2.64057 13.6095 2.39052C13.3594 2.14048 13.0203 2 12.6667 2H10.6667M10.6667 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V10.6667M2 10.6667V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H5.33333" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconMaximize, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13548", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMaximize size={size} /> });