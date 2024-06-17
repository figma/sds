import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconSkipBack = (props: IconProps) => (
  <Icon {...props}><path d="M3.33325 12.6667V3.33341M12.6666 13.3334L5.99992 8.00008L12.6666 2.66675V13.3334Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconSkipBack, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13616", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconSkipBack size={size} /> });