import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconChevronDown = (props: IconProps) => (
  <Icon {...props}><path d="M4 6L8 10L12 6" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconChevronDown, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13072", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconChevronDown size={size} /> });