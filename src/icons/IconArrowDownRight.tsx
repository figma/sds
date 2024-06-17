import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconArrowDownRight = (props: IconProps) => (
  <Icon {...props}><path d="M4.66675 4.66675L11.3334 11.3334M11.3334 11.3334V4.66675M11.3334 11.3334H4.66675" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconArrowDownRight, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13033", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowDownRight size={size} /> });