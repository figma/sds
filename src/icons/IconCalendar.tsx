import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconCalendar = (props: IconProps) => (
  <Icon {...props}><path d="M10.6667 1.33337V4.00004M5.33333 1.33337V4.00004M2 6.66671H14M3.33333 2.66671H12.6667C13.403 2.66671 14 3.26366 14 4.00004V13.3334C14 14.0698 13.403 14.6667 12.6667 14.6667H3.33333C2.59695 14.6667 2 14.0698 2 13.3334V4.00004C2 3.26366 2.59695 2.66671 3.33333 2.66671Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconCalendar, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13056", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCalendar size={size} /> });