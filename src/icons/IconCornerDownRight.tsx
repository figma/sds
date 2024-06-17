import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconCornerDownRight = (props: IconProps) => (
  <Icon {...props}><path d="M10 6.66669L13.3334 10M13.3334 10L10 13.3334M13.3334 10H5.33335C4.62611 10 3.94783 9.71907 3.44774 9.21897C2.94764 8.71887 2.66669 8.0406 2.66669 7.33335V2.66669" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconCornerDownRight, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13466", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCornerDownRight size={size} /> });