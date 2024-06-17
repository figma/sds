import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconDelete = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15721)"><path d="M12.0001 6.00002L8.00008 10M8.00008 6.00002L12.0001 10M14.0001 2.66669H5.33341L0.666748 8.00002L5.33341 13.3334H14.0001C14.3537 13.3334 14.6928 13.1929 14.9429 12.9428C15.1929 12.6928 15.3334 12.3536 15.3334 12V4.00002C15.3334 3.6464 15.1929 3.30726 14.9429 3.05721C14.6928 2.80716 14.3537 2.66669 14.0001 2.66669Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15721"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconDelete, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13479", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconDelete size={size} /> });