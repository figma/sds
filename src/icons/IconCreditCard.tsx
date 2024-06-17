import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconCreditCard = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15713)"><path d="M0.666656 6.66669H15.3333M1.99999 2.66669H14C14.7364 2.66669 15.3333 3.26364 15.3333 4.00002V12C15.3333 12.7364 14.7364 13.3334 14 13.3334H1.99999C1.26361 13.3334 0.666656 12.7364 0.666656 12V4.00002C0.666656 3.26364 1.26361 2.66669 1.99999 2.66669Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15713"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconCreditCard, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13474", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCreditCard size={size} /> });