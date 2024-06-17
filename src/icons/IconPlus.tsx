import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconPlus = (props: IconProps) => (
  <Icon {...props}><path d="M7.99992 3.33325V12.6666M3.33325 7.99992H12.6666" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconPlus, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13590", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPlus size={size} /> });