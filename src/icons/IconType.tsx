import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconType = (props: IconProps) => (
  <Icon {...props}><path d="M2.66663 4.66675V2.66675H13.3333V4.66675M5.99996 13.3334H9.99996M7.99996 2.66675V13.3334" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconType, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13649", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconType size={size} /> });