import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconXOctagon = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_16109)"><path d="M10 6.00016L6.00001 10.0002M6.00001 6.00016L10 10.0002M5.24001 1.3335H10.76L14.6667 5.24016V10.7602L10.76 14.6668H5.24001L1.33334 10.7602V5.24016L5.24001 1.3335Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_16109"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconXOctagon, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13673", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconXOctagon size={size} /> });