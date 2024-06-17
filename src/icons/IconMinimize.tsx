import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconMinimize = (props: IconProps) => (
  <Icon {...props}><path d="M5.33333 2V4C5.33333 4.35362 5.19286 4.69276 4.94281 4.94281C4.69276 5.19286 4.35362 5.33333 4 5.33333H2M14 5.33333H12C11.6464 5.33333 11.3072 5.19286 11.0572 4.94281C10.8071 4.69276 10.6667 4.35362 10.6667 4V2M10.6667 14V12C10.6667 11.6464 10.8071 11.3072 11.0572 11.0572C11.3072 10.8071 11.6464 10.6667 12 10.6667H14M2 10.6667H4C4.35362 10.6667 4.69276 10.8071 4.94281 11.0572C5.19286 11.3072 5.33333 11.6464 5.33333 12V14" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconMinimize, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13557", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMinimize size={size} /> });