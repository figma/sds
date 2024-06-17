import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconItalic = (props: IconProps) => (
  <Icon {...props}><path d="M12.6667 2.66669H6.66671M9.33337 13.3334H3.33337M10 2.66669L6.00004 13.3334" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconItalic, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13530", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconItalic size={size} /> });