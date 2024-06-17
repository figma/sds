import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconCornerUpRight = (props: IconProps) => (
  <Icon {...props}><path d="M9.99984 9.33335L13.3332 6.00002M13.3332 6.00002L9.99984 2.66669M13.3332 6.00002H5.33317C4.62593 6.00002 3.94765 6.28097 3.44755 6.78107C2.94746 7.28117 2.6665 7.95944 2.6665 8.66669V13.3334" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconCornerUpRight, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13472", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCornerUpRight size={size} /> });