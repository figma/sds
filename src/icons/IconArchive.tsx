import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconArchive = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15573)"><path d="M14 5.33333V14H1.99996V5.33333M6.66663 8H9.33329M0.666626 2H15.3333V5.33333H0.666626V2Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15573"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconArchive, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13028", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArchive size={size} /> });