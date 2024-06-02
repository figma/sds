import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconGlobe = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15799)"><path d="M10.6668 8.00001L11.4667 8.01667C11.4669 8.00557 11.4669 7.99445 11.4667 7.98335L10.6668 8.00001ZM5.3335 8.00001L4.53367 7.98335C4.53344 7.99445 4.53344 8.00557 4.53367 8.01667L5.3335 8.00001ZM13.8668 8.00001C13.8668 11.2401 11.2402 13.8667 8.00016 13.8667V15.4667C12.1239 15.4667 15.4668 12.1237 15.4668 8.00001H13.8668ZM8.00016 13.8667C4.76009 13.8667 2.1335 11.2401 2.1335 8.00001H0.533496C0.533496 12.1237 3.87644 15.4667 8.00016 15.4667V13.8667ZM2.1335 8.00001C2.1335 4.75994 4.76009 2.13334 8.00016 2.13334V0.533343C3.87644 0.533343 0.533496 3.87628 0.533496 8.00001H2.1335ZM8.00016 2.13334C11.2402 2.13334 13.8668 4.75994 13.8668 8.00001H15.4668C15.4668 3.87628 12.1239 0.533343 8.00016 0.533343V2.13334ZM1.3335 8.80001H14.6668V7.20001H1.3335V8.80001ZM7.40949 1.87288C8.94622 3.55527 9.81954 5.73858 9.867 8.01667L11.4667 7.98335C11.4111 5.31749 10.3891 2.76256 8.59084 0.793805L7.40949 1.87288ZM9.867 7.98335C9.81954 10.2614 8.94622 12.4448 7.40949 14.1271L8.59084 15.2062C10.3891 13.2375 11.4111 10.6825 11.4667 8.01667L9.867 7.98335ZM8.59084 14.1271C7.0541 12.4448 6.18078 10.2614 6.13332 7.98335L4.53367 8.01667C4.58921 10.6825 5.61118 13.2375 7.40949 15.2062L8.59084 14.1271ZM6.13332 8.01667C6.18078 5.73858 7.0541 3.55527 8.59084 1.87288L7.40949 0.793805C5.61118 2.76256 4.58921 5.31749 4.53367 7.98335L6.13332 8.01667Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_68_15799"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconGlobe, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13519", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconGlobe size={size} /> });