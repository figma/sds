import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconMousePointer = (props: IconProps) => (
  <Icon {...props}><path d="M8.66667 8.66667L12.6667 12.6667M2 2L6.71333 13.3133L8.38667 8.38667L13.3133 6.71333L2 2Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconMousePointer, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13565", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMousePointer size={size} /> });