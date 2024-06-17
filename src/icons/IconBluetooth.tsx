import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconBluetooth = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15615)"><path d="M4.33325 4.33341L11.6666 11.6667L7.99992 15.3334V0.666748L11.6666 4.33341L4.33325 11.6667" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15615"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconBluetooth, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13051", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconBluetooth size={size} /> });