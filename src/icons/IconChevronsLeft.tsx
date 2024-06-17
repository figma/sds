import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconChevronsLeft = (props: IconProps) => (
  <Icon {...props}><path d="M7.33333 11.3333L4 7.99996L7.33333 4.66663M12 11.3333L8.66667 7.99996L12 4.66663" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconChevronsLeft, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13167", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconChevronsLeft size={size} /> });