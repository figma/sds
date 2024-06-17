import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconMusic = (props: IconProps) => (
  <Icon {...props}><path d="M6 12V3.33333L14 2V10.6667M6 12C6 13.1046 5.10457 14 4 14C2.89543 14 2 13.1046 2 12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12ZM14 10.6667C14 11.7712 13.1046 12.6667 12 12.6667C10.8954 12.6667 10 11.7712 10 10.6667C10 9.5621 10.8954 8.66667 12 8.66667C13.1046 8.66667 14 9.5621 14 10.6667Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconMusic, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13567", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMusic size={size} /> });