import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconNavigation = (props: IconProps) => (
  <Icon {...props}><path d="M2 7.33337L14.6667 1.33337L8.66667 14L7.33333 8.66671L2 7.33337Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconNavigation, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13568", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconNavigation size={size} /> });