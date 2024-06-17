import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconMinus = (props: IconProps) => (
  <Icon {...props}><path d="M3.33337 8H12.6667" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconMinus, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13558", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMinus size={size} /> });