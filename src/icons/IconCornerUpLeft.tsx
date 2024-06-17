import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconCornerUpLeft = (props: IconProps) => (
  <Icon {...props}><path d="M6.00008 9.33335L2.66675 6.00002M2.66675 6.00002L6.00008 2.66669M2.66675 6.00002H10.6667C11.374 6.00002 12.0523 6.28097 12.5524 6.78107C13.0525 7.28117 13.3334 7.95944 13.3334 8.66669V13.3334" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconCornerUpLeft, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13473", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCornerUpLeft size={size} /> });