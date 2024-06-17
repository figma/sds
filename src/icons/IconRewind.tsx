import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconRewind = (props: IconProps) => (
  <Icon {...props}><path d="M7.33325 12.6666L1.33325 7.99992L7.33325 3.33325V12.6666Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M14.6666 12.6666L8.66658 7.99992L14.6666 3.33325V12.6666Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconRewind, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13598", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconRewind size={size} /> });