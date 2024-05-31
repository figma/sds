import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconPlay = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.97398 1.34172C3.21479 1.21025 3.50816 1.22076 3.73894 1.36912L13.0723 7.36912C13.2869 7.50712 13.4167 7.7448 13.4167 8C13.4167 8.2552 13.2869 8.49288 13.0723 8.63088L3.73894 14.6309C3.50816 14.7792 3.21479 14.7898 2.97398 14.6583C2.73318 14.5268 2.58337 14.2744 2.58337 14V2C2.58337 1.72565 2.73318 1.47318 2.97398 1.34172ZM4.08337 3.37375V12.6263L11.2798 8L4.08337 3.37375Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconPlay, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13586", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPlay size={size} /> });