import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconTwitch = (props: IconProps) => (
  <Icon {...props}><path d="M7.33333 7.33325V4.66659M10.6667 7.33325V4.66659M14 1.33325H2V11.9999H5.33333V14.6666L8 11.9999H11.3333L14 9.33325V1.33325Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconTwitch, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13647", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTwitch size={size} /> });