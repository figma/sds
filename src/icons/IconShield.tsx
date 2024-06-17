import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconShield = (props: IconProps) => (
  <Icon {...props}><path d="M7.99984 14.6666C7.99984 14.6666 13.3332 11.9999 13.3332 7.99992V3.33325L7.99984 1.33325L2.6665 3.33325V7.99992C2.6665 11.9999 7.99984 14.6666 7.99984 14.6666Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconShield, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13609", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconShield size={size} /> });