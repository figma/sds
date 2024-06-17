import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconCornerDownLeft = (props: IconProps) => (
  <Icon {...props}><path d="M5.99999 6.66669L2.66666 10M2.66666 10L5.99999 13.3334M2.66666 10H10.6667C11.3739 10 12.0522 9.71907 12.5523 9.21897C13.0524 8.71887 13.3333 8.0406 13.3333 7.33335V2.66669" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconCornerDownLeft, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13467", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCornerDownLeft size={size} /> });