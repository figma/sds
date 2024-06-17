import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconArrowDownLeft = (props: IconProps) => (
  <Icon {...props}><path d="M11.3334 4.66675L4.66675 11.3334M4.66675 11.3334H11.3334M4.66675 11.3334V4.66675" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconArrowDownLeft, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13030", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowDownLeft size={size} /> });