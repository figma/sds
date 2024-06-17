import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconPlay = (props: IconProps) => (
  <Icon {...props}><path d="M3.33337 2L12.6667 8L3.33337 14V2Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconPlay, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13586", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPlay size={size} /> });