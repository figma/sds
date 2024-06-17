import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconLayers = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15829)"><path d="M1.33325 11.3333L7.99992 14.6666L14.6666 11.3333M1.33325 7.99998L7.99992 11.3333L14.6666 7.99998M7.99992 1.33331L1.33325 4.66665L7.99992 7.99998L14.6666 4.66665L7.99992 1.33331Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15829"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconLayers, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13532", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconLayers size={size} /> });