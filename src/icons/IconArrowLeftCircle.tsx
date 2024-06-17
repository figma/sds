import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconArrowLeftCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15583)"><path d="M8.00016 5.33325L5.3335 7.99992M5.3335 7.99992L8.00016 10.6666M5.3335 7.99992H10.6668M14.6668 7.99992C14.6668 11.6818 11.6821 14.6666 8.00016 14.6666C4.31826 14.6666 1.3335 11.6818 1.3335 7.99992C1.3335 4.31802 4.31826 1.33325 8.00016 1.33325C11.6821 1.33325 14.6668 4.31802 14.6668 7.99992Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15583"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconArrowLeftCircle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13035", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowLeftCircle size={size} /> });