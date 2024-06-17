import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconChevronsDown = (props: IconProps) => (
  <Icon {...props}><path d="M4.66675 8.66667L8.00008 12L11.3334 8.66667M4.66675 4L8.00008 7.33333L11.3334 4" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconChevronsDown, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13168", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconChevronsDown size={size} /> });