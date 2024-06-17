import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconMenu = (props: IconProps) => (
  <Icon {...props}><path d="M2 8H14M2 4H14M2 12H14" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconMenu, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13551", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMenu size={size} /> });