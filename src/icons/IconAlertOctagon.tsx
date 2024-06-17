import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconAlertOctagon = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15557)"><path d="M8.00004 5.33325V7.99992M8.00004 10.6666H8.00671M5.24004 1.33325H10.76L14.6667 5.23992V10.7599L10.76 14.6666H5.24004L1.33337 10.7599V5.23992L5.24004 1.33325Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15557"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconAlertOctagon, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13021", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconAlertOctagon size={size} /> });