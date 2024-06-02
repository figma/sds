import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconServer = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15971)"><path d="M4.00004 3.19992C3.55821 3.19992 3.20004 3.55809 3.20004 3.99992C3.20004 4.44175 3.55821 4.79992 4.00004 4.79992V3.19992ZM4.00671 4.79992C4.44854 4.79992 4.80671 4.44175 4.80671 3.99992C4.80671 3.55809 4.44854 3.19992 4.00671 3.19992V4.79992ZM4.00004 11.1999C3.55821 11.1999 3.20004 11.5581 3.20004 11.9999C3.20004 12.4417 3.55821 12.7999 4.00004 12.7999V11.1999ZM4.00671 12.7999C4.44854 12.7999 4.80671 12.4417 4.80671 11.9999C4.80671 11.5581 4.44854 11.1999 4.00671 11.1999V12.7999ZM2.66671 2.13325H13.3334V0.533252H2.66671V2.13325ZM13.3334 2.13325C13.6279 2.13325 13.8667 2.37203 13.8667 2.66659H15.4667C15.4667 1.48838 14.5116 0.533252 13.3334 0.533252V2.13325ZM13.8667 2.66659V5.33325H15.4667V2.66659H13.8667ZM13.8667 5.33325C13.8667 5.6278 13.6279 5.86659 13.3334 5.86659V7.46659C14.5116 7.46659 15.4667 6.51146 15.4667 5.33325H13.8667ZM13.3334 5.86659H2.66671V7.46659H13.3334V5.86659ZM2.66671 5.86659C2.37216 5.86659 2.13337 5.6278 2.13337 5.33325H0.533374C0.533374 6.51146 1.4885 7.46659 2.66671 7.46659V5.86659ZM2.13337 5.33325V2.66659H0.533374V5.33325H2.13337ZM2.13337 2.66659C2.13337 2.37203 2.37216 2.13325 2.66671 2.13325V0.533252C1.4885 0.533252 0.533374 1.48838 0.533374 2.66659H2.13337ZM2.66671 10.1333H13.3334V8.53325H2.66671V10.1333ZM13.3334 10.1333C13.6279 10.1333 13.8667 10.372 13.8667 10.6666H15.4667C15.4667 9.48838 14.5116 8.53325 13.3334 8.53325V10.1333ZM13.8667 10.6666V13.3333H15.4667V10.6666H13.8667ZM13.8667 13.3333C13.8667 13.6278 13.6279 13.8666 13.3334 13.8666V15.4666C14.5116 15.4666 15.4667 14.5115 15.4667 13.3333H13.8667ZM13.3334 13.8666H2.66671V15.4666H13.3334V13.8666ZM2.66671 13.8666C2.37216 13.8666 2.13337 13.6278 2.13337 13.3333H0.533374C0.533374 14.5115 1.4885 15.4666 2.66671 15.4666V13.8666ZM2.13337 13.3333V10.6666H0.533374V13.3333H2.13337ZM2.13337 10.6666C2.13337 10.372 2.37216 10.1333 2.66671 10.1333V8.53325C1.4885 8.53325 0.533374 9.48838 0.533374 10.6666H2.13337ZM4.00004 4.79992H4.00671V3.19992H4.00004V4.79992ZM4.00004 12.7999H4.00671V11.1999H4.00004V12.7999Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_68_15971"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconServer, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13605", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconServer size={size} /> });