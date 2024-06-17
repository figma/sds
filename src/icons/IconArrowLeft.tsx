import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconArrowLeft = (props: IconProps) => (
  <Icon {...props}><path d="M12.6668 7.99992H3.3335M3.3335 7.99992L8.00016 12.6666M3.3335 7.99992L8.00016 3.33325" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconArrowLeft, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13034", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowLeft size={size} /> });