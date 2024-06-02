import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconLinkedin = (props: IconProps) => (
  <Icon {...props}><path d="M14.6667 14V14.8C15.1085 14.8 15.4667 14.4419 15.4667 14H14.6667ZM12 14H11.2C11.2 14.4419 11.5582 14.8 12 14.8V14ZM9.33333 14V14.8C9.77516 14.8 10.1333 14.4419 10.1333 14H9.33333ZM6.66666 14H5.86666C5.86666 14.4419 6.22483 14.8 6.66666 14.8V14ZM1.33333 6.00004V5.20004C0.8915 5.20004 0.533328 5.55821 0.533328 6.00004H1.33333ZM3.99999 6.00004H4.79999C4.79999 5.55821 4.44182 5.20004 3.99999 5.20004V6.00004ZM3.99999 14V14.8C4.44182 14.8 4.79999 14.4419 4.79999 14H3.99999ZM1.33333 14H0.533328C0.533328 14.4419 0.8915 14.8 1.33333 14.8L1.33333 14ZM10.6667 6.13337C11.5154 6.13337 12.3293 6.47052 12.9294 7.07063L14.0608 5.93926C13.1606 5.03909 11.9397 4.53337 10.6667 4.53337V6.13337ZM12.9294 7.07063C13.5295 7.67075 13.8667 8.48468 13.8667 9.33337H15.4667C15.4667 8.06033 14.9609 6.83944 14.0608 5.93926L12.9294 7.07063ZM13.8667 9.33337V14H15.4667V9.33337H13.8667ZM14.6667 13.2H12V14.8H14.6667V13.2ZM12.8 14V9.33337H11.2V14H12.8ZM12.8 9.33337C12.8 8.76758 12.5752 8.22496 12.1752 7.82488L11.0438 8.95625C11.1438 9.05627 11.2 9.19193 11.2 9.33337H12.8ZM12.1752 7.82488C11.7751 7.4248 11.2325 7.20004 10.6667 7.20004V8.80004C10.8081 8.80004 10.9438 8.85623 11.0438 8.95625L12.1752 7.82488ZM10.6667 7.20004C10.1009 7.20004 9.55824 7.4248 9.15817 7.82488L10.2895 8.95625C10.3896 8.85623 10.5252 8.80004 10.6667 8.80004V7.20004ZM9.15817 7.82488C8.75809 8.22496 8.53333 8.76758 8.53333 9.33337H10.1333C10.1333 9.19193 10.1895 9.05627 10.2895 8.95625L9.15817 7.82488ZM8.53333 9.33337V14H10.1333V9.33337H8.53333ZM9.33333 13.2H6.66666V14.8H9.33333V13.2ZM7.46666 14V9.33337H5.86666V14H7.46666ZM7.46666 9.33337C7.46666 8.48468 7.8038 7.67075 8.40392 7.07063L7.27255 5.93926C6.37237 6.83944 5.86666 8.06033 5.86666 9.33337H7.46666ZM8.40392 7.07063C9.00404 6.47052 9.81797 6.13337 10.6667 6.13337V4.53337C9.39362 4.53337 8.17272 5.03909 7.27255 5.93926L8.40392 7.07063ZM1.33333 6.80004H3.99999V5.20004H1.33333V6.80004ZM3.19999 6.00004V14H4.79999V6.00004H3.19999ZM3.99999 13.2H1.33333V14.8H3.99999V13.2ZM2.13333 14V6.00004H0.533328V14H2.13333ZM3.19999 2.66671C3.19999 2.96126 2.96121 3.20004 2.66666 3.20004V4.80004C3.84487 4.80004 4.79999 3.84491 4.79999 2.66671H3.19999ZM2.66666 3.20004C2.37211 3.20004 2.13333 2.96126 2.13333 2.66671H0.533328C0.533328 3.84491 1.48845 4.80004 2.66666 4.80004V3.20004ZM2.13333 2.66671C2.13333 2.37216 2.37211 2.13337 2.66666 2.13337V0.533374C1.48845 0.533374 0.533328 1.4885 0.533328 2.66671H2.13333ZM2.66666 2.13337C2.96121 2.13337 3.19999 2.37216 3.19999 2.66671H4.79999C4.79999 1.4885 3.84487 0.533374 2.66666 0.533374V2.13337Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconLinkedin, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13539", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconLinkedin size={size} /> });