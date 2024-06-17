import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconFilter = (props: IconProps) => (
  <Icon {...props}><path d="M14.6667 2H1.33337L6.66671 8.30667V12.6667L9.33337 14V8.30667L14.6667 2Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconFilter, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13505", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconFilter size={size} /> });