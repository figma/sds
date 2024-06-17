import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconTerminal = (props: IconProps) => (
  <Icon {...props}><path d="M2.66675 11.3333L6.66675 7.33325L2.66675 3.33325M8.00008 12.6666H13.3334" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconTerminal, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13634", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTerminal size={size} /> });