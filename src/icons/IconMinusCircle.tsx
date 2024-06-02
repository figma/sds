import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconMinusCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15877)"><path d="M5.33331 7.20004C4.89149 7.20004 4.53331 7.55821 4.53331 8.00004C4.53331 8.44187 4.89149 8.80004 5.33331 8.80004V7.20004ZM10.6666 8.80004C11.1085 8.80004 11.4666 8.44187 11.4666 8.00004C11.4666 7.55821 11.1085 7.20004 10.6666 7.20004V8.80004ZM13.8666 8.00004C13.8666 11.2401 11.2401 13.8667 7.99998 13.8667V15.4667C12.1237 15.4667 15.4666 12.1238 15.4666 8.00004H13.8666ZM7.99998 13.8667C4.75991 13.8667 2.13331 11.2401 2.13331 8.00004H0.533313C0.533313 12.1238 3.87625 15.4667 7.99998 15.4667V13.8667ZM2.13331 8.00004C2.13331 4.75997 4.75991 2.13337 7.99998 2.13337V0.533374C3.87625 0.533374 0.533313 3.87631 0.533313 8.00004H2.13331ZM7.99998 2.13337C11.2401 2.13337 13.8666 4.75997 13.8666 8.00004H15.4666C15.4666 3.87631 12.1237 0.533374 7.99998 0.533374V2.13337ZM5.33331 8.80004H10.6666V7.20004H5.33331V8.80004Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_68_15877"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconMinusCircle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13556", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMinusCircle size={size} /> });