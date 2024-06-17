import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconXCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_16107)"><path d="M10.0002 6.00016L6.00016 10.0002M6.00016 6.00016L10.0002 10.0002M14.6668 8.00016C14.6668 11.6821 11.6821 14.6668 8.00016 14.6668C4.31826 14.6668 1.3335 11.6821 1.3335 8.00016C1.3335 4.31826 4.31826 1.3335 8.00016 1.3335C11.6821 1.3335 14.6668 4.31826 14.6668 8.00016Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_16107"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconXCircle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13674", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconXCircle size={size} /> });