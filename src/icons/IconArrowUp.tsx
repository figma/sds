import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconArrowUp = (props: IconProps) => (
  <Icon {...props}><path d="M7.99992 12.6666V3.33325M7.99992 3.33325L3.33325 7.99992M7.99992 3.33325L12.6666 7.99992" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconArrowUp, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13040", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowUp size={size} /> });