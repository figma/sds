import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconArrowRight = (props: IconProps) => (
  <Icon {...props}><path d="M3.33331 7.99992H12.6666M12.6666 7.99992L7.99998 3.33325M12.6666 7.99992L7.99998 12.6666" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconArrowRight, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13036", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowRight size={size} /> });