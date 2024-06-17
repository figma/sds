import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconStar = (props: IconProps) => (
  <Icon {...props}><path d="M7.99992 1.33325L10.0599 5.50659L14.6666 6.17992L11.3333 9.42659L12.1199 14.0133L7.99992 11.8466L3.87992 14.0133L4.66659 9.42659L1.33325 6.17992L5.93992 5.50659L7.99992 1.33325Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconStar, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13623", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconStar size={size} /> });