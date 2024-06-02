import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconBook = (props: IconProps) => (
  <Icon {...props}><path d="M2.6665 12.9999H1.8665H2.6665ZM4.33317 11.3333V10.5333V11.3333ZM13.3332 12.1333C13.775 12.1333 14.1332 11.7751 14.1332 11.3333C14.1332 10.8914 13.775 10.5333 13.3332 10.5333V12.1333ZM4.33317 1.33325V0.533252V1.33325ZM13.3332 1.33325H14.1332C14.1332 0.891424 13.775 0.533252 13.3332 0.533252V1.33325ZM13.3332 14.6666V15.4666C13.775 15.4666 14.1332 15.1084 14.1332 14.6666H13.3332ZM2.6665 2.99992H1.8665H2.6665ZM3.4665 12.9999C3.4665 12.7701 3.55781 12.5496 3.72034 12.3871L2.58897 11.2557C2.12638 11.7183 1.8665 12.3457 1.8665 12.9999H3.4665ZM3.72034 12.3871C3.88288 12.2246 4.10332 12.1333 4.33317 12.1333V10.5333C3.67897 10.5333 3.05156 10.7931 2.58897 11.2557L3.72034 12.3871ZM4.33317 12.1333H13.3332V10.5333H4.33317V12.1333ZM4.33317 2.13325H13.3332V0.533252H4.33317V2.13325ZM12.5332 1.33325V14.6666H14.1332V1.33325H12.5332ZM13.3332 13.8666H4.33317V15.4666H13.3332V13.8666ZM4.33317 13.8666C4.10332 13.8666 3.88288 13.7753 3.72034 13.6127L2.58897 14.7441C3.05156 15.2067 3.67897 15.4666 4.33317 15.4666V13.8666ZM3.72034 13.6127C3.55781 13.4502 3.4665 13.2298 3.4665 12.9999H1.8665C1.8665 13.6541 2.12638 14.2815 2.58897 14.7441L3.72034 13.6127ZM3.4665 12.9999V2.99992H1.8665V12.9999H3.4665ZM3.4665 2.99992C3.4665 2.77006 3.55781 2.54962 3.72034 2.38709L2.58897 1.25572C2.12638 1.71831 1.8665 2.34572 1.8665 2.99992H3.4665ZM3.72034 2.38709C3.88288 2.22456 4.10332 2.13325 4.33317 2.13325V0.533252C3.67897 0.533252 3.05156 0.793132 2.58897 1.25572L3.72034 2.38709Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconBook, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13052", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconBook size={size} /> });