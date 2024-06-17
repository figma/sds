import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconArrowUpRight = (props: IconProps) => (
  <Icon {...props}><path d="M4.66675 11.3334L11.3334 4.66675M11.3334 4.66675H4.66675M11.3334 4.66675V11.3334" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconArrowUpRight, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13041", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowUpRight size={size} /> });