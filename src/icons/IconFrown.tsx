import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconFrown = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15783)"><path d="M10.6668 10.6667C10.6668 10.6667 9.66683 9.33333 8.00016 9.33333C6.3335 9.33333 5.3335 10.6667 5.3335 10.6667M6.00016 6H6.00683M10.0002 6H10.0068M14.6668 8C14.6668 11.6819 11.6821 14.6667 8.00016 14.6667C4.31826 14.6667 1.3335 11.6819 1.3335 8C1.3335 4.3181 4.31826 1.33333 8.00016 1.33333C11.6821 1.33333 14.6668 4.3181 14.6668 8Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15783"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconFrown, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13511", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconFrown size={size} /> });