import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconCornerLeftDown = (props: IconProps) => (
  <Icon {...props}><path d="M9.33329 10L5.99996 13.3334M5.99996 13.3334L2.66663 10M5.99996 13.3334V5.33335C5.99996 4.62611 6.28091 3.94783 6.78101 3.44774C7.2811 2.94764 7.95938 2.66669 8.66663 2.66669H13.3333" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconCornerLeftDown, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13469", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCornerLeftDown size={size} /> });