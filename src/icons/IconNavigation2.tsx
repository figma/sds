import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconNavigation2 = (props: IconProps) => (
  <Icon {...props}><path d="M8.00004 1.33337L12.6667 14L8.00004 11.3334L3.33337 14L8.00004 1.33337Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconNavigation2, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13566", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconNavigation2 size={size} /> });