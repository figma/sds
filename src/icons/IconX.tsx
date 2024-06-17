import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconX = (props: IconProps) => (
  <Icon {...props}><path d="M12 4L4 12M4 4L12 12" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconX, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13675", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconX size={size} /> });