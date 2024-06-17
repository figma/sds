import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconFeather = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15757)"><path d="M10.6666 5.33333L1.33325 14.6667M11.6666 10H5.99992M13.4933 8.16C14.2438 7.40944 14.6655 6.39145 14.6655 5.33C14.6655 4.26854 14.2438 3.25056 13.4933 2.5C12.7427 1.74944 11.7247 1.32777 10.6633 1.32777C9.6018 1.32777 8.58381 1.74944 7.83325 2.5L3.33325 7V12.6667H8.99992L13.4933 8.16Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15757"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconFeather, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13496", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconFeather size={size} /> });