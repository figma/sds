import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconChevronsRight = (props: IconProps) => (
  <Icon {...props}><path d="M8.66667 11.3333L12 7.99996L8.66667 4.66663M4 11.3333L7.33333 7.99996L4 4.66663" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconChevronsRight, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13170", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconChevronsRight size={size} /> });