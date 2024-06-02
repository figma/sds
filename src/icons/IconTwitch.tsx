import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconTwitch = (props: IconProps) => (
  <Icon {...props}><path d="M14 1.33325H14.8C14.8 0.891424 14.4418 0.533252 14 0.533252V1.33325ZM2 1.33325V0.533252C1.55817 0.533252 1.2 0.891424 1.2 1.33325L2 1.33325ZM2 11.9999H1.2C1.2 12.4417 1.55817 12.7999 2 12.7999V11.9999ZM5.33333 11.9999H6.13333C6.13333 11.5581 5.77516 11.1999 5.33333 11.1999V11.9999ZM5.33333 14.6666H4.53333C4.53333 14.9902 4.72825 15.2819 5.02719 15.4057C5.32613 15.5295 5.67022 15.4611 5.89902 15.2323L5.33333 14.6666ZM8 11.9999V11.1999C7.78783 11.1999 7.58434 11.2842 7.43431 11.4342L8 11.9999ZM11.3333 11.9999V12.7999C11.5455 12.7999 11.749 12.7156 11.899 12.5656L11.3333 11.9999ZM14 9.33325L14.5657 9.89894C14.7157 9.74891 14.8 9.54543 14.8 9.33325H14ZM6.53333 7.33325C6.53333 7.77508 6.89151 8.13325 7.33333 8.13325C7.77516 8.13325 8.13333 7.77508 8.13333 7.33325H6.53333ZM8.13333 4.66659C8.13333 4.22476 7.77516 3.86659 7.33333 3.86659C6.89151 3.86659 6.53333 4.22476 6.53333 4.66659H8.13333ZM9.86667 7.33325C9.86667 7.77508 10.2248 8.13325 10.6667 8.13325C11.1085 8.13325 11.4667 7.77508 11.4667 7.33325H9.86667ZM11.4667 4.66659C11.4667 4.22476 11.1085 3.86659 10.6667 3.86659C10.2248 3.86659 9.86667 4.22476 9.86667 4.66659H11.4667ZM14 0.533252H2V2.13325H14V0.533252ZM1.2 1.33325V11.9999H2.8V1.33325H1.2ZM2 12.7999H5.33333V11.1999H2V12.7999ZM4.53333 11.9999V14.6666H6.13333V11.9999H4.53333ZM5.89902 15.2323L8.56569 12.5656L7.43431 11.4342L4.76765 14.1009L5.89902 15.2323ZM8 12.7999H11.3333V11.1999H8V12.7999ZM11.899 12.5656L14.5657 9.89894L13.4343 8.76757L10.7676 11.4342L11.899 12.5656ZM14.8 9.33325V1.33325H13.2V9.33325H14.8ZM8.13333 7.33325V4.66659H6.53333V7.33325H8.13333ZM11.4667 7.33325V4.66659H9.86667V7.33325H11.4667Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconTwitch, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13647", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTwitch size={size} /> });