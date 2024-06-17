import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconFastForward = (props: IconProps) => (
  <Icon {...props}><path d="M8.66671 12.6667L14.6667 7.99999L8.66671 3.33333V12.6667Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M1.33337 12.6667L7.33337 7.99999L1.33337 3.33333V12.6667Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconFastForward, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13497", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconFastForward size={size} /> });