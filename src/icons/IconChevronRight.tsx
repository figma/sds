import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconChevronRight = (props: IconProps) => (
  <Icon {...props}><path d="M6 12L10 8L6 4" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconChevronRight, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13165", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconChevronRight size={size} /> });