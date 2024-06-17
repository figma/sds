import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconMaximize2 = (props: IconProps) => (
  <Icon {...props}><path d="M10 2H14M14 2V6M14 2L9.33333 6.66667M6 14H2M2 14V10M2 14L6.66667 9.33333" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconMaximize2, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13546", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMaximize2 size={size} /> });