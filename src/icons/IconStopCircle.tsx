import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconStopCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_16011)"><path d="M5.99992 5.99992V5.19992C5.55809 5.19992 5.19992 5.55809 5.19992 5.99992H5.99992ZM9.99992 5.99992H10.7999C10.7999 5.55809 10.4417 5.19992 9.99992 5.19992V5.99992ZM9.99992 9.99992V10.7999C10.4417 10.7999 10.7999 10.4417 10.7999 9.99992H9.99992ZM5.99992 9.99992H5.19992C5.19992 10.4417 5.55809 10.7999 5.99992 10.7999V9.99992ZM13.8666 7.99992C13.8666 11.24 11.24 13.8666 7.99992 13.8666V15.4666C12.1236 15.4666 15.4666 12.1236 15.4666 7.99992H13.8666ZM7.99992 13.8666C4.75985 13.8666 2.13325 11.24 2.13325 7.99992H0.533252C0.533252 12.1236 3.87619 15.4666 7.99992 15.4666V13.8666ZM2.13325 7.99992C2.13325 4.75985 4.75985 2.13325 7.99992 2.13325V0.533252C3.87619 0.533252 0.533252 3.87619 0.533252 7.99992H2.13325ZM7.99992 2.13325C11.24 2.13325 13.8666 4.75985 13.8666 7.99992H15.4666C15.4666 3.87619 12.1236 0.533252 7.99992 0.533252V2.13325ZM5.99992 6.79992H9.99992V5.19992H5.99992V6.79992ZM9.19992 5.99992V9.99992H10.7999V5.99992H9.19992ZM9.99992 9.19992H5.99992V10.7999H9.99992V9.19992ZM6.79992 9.99992V5.99992H5.19992V9.99992H6.79992Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_68_16011"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconStopCircle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13625", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconStopCircle size={size} /> });