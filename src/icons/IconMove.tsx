import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconMove = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15893)"><path d="M3.33334 6.00004L1.33334 8.00004M1.33334 8.00004L3.33334 10M1.33334 8.00004H14.6667M6.00001 3.33337L8.00001 1.33337M8.00001 1.33337L10 3.33337M8.00001 1.33337V14.6667M10 12.6667L8.00001 14.6667M8.00001 14.6667L6.00001 12.6667M12.6667 6.00004L14.6667 8.00004M14.6667 8.00004L12.6667 10" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15893"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconMove, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13564", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMove size={size} /> });