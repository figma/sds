import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconLock = (props: IconProps) => (
  <Icon {...props}><path d="M4.66667 7.33337V4.66671C4.66667 3.78265 5.01786 2.93481 5.64298 2.30968C6.2681 1.68456 7.11595 1.33337 8 1.33337C8.88406 1.33337 9.7319 1.68456 10.357 2.30968C10.9821 2.93481 11.3333 3.78265 11.3333 4.66671V7.33337M3.33333 7.33337H12.6667C13.403 7.33337 14 7.93033 14 8.66671V13.3334C14 14.0698 13.403 14.6667 12.6667 14.6667H3.33333C2.59695 14.6667 2 14.0698 2 13.3334V8.66671C2 7.93033 2.59695 7.33337 3.33333 7.33337Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconLock, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13540", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconLock size={size} /> });