import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconActivity = (props: IconProps) => (
  <Icon {...props}><path d="M14.6666 8H12L9.99998 14L5.99998 2L3.99998 8H1.33331" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconActivity, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13018", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconActivity size={size} /> });