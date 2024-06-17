import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconVolumeX = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_16095)"><path d="M15.3334 6.00016L11.3334 10.0002M11.3334 6.00016L15.3334 10.0002M7.33337 3.3335L4.00004 6.00016H1.33337V10.0002H4.00004L7.33337 12.6668V3.3335Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_16095"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconVolumeX, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13668", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconVolumeX size={size} /> });