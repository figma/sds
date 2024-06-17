import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconZap = (props: IconProps) => (
  <Icon {...props}><path d="M8.66667 1.3335L2 9.3335H8L7.33333 14.6668L14 6.66683H8L8.66667 1.3335Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconZap, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13680", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconZap size={size} /> });