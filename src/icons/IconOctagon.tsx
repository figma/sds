import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconOctagon = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15901)"><path d="M5.23992 1.33337H10.7599L14.6666 5.24004V10.76L10.7599 14.6667H5.23992L1.33325 10.76V5.24004L5.23992 1.33337Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15901"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconOctagon, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13569", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconOctagon size={size} /> });