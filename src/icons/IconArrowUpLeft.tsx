import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconArrowUpLeft = (props: IconProps) => (
  <Icon {...props}><path d="M11.3333 11.3334L4.66663 4.66675M4.66663 4.66675V11.3334M4.66663 4.66675H11.3333" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconArrowUpLeft, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13039", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowUpLeft size={size} /> });