import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconMapPin = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15853)"><path d="M14 6.66663C14 11.3333 8 15.3333 8 15.3333C8 15.3333 2 11.3333 2 6.66663C2 5.07533 2.63214 3.5492 3.75736 2.42398C4.88258 1.29877 6.4087 0.666626 8 0.666626C9.5913 0.666626 11.1174 1.29877 12.2426 2.42398C13.3679 3.5492 14 5.07533 14 6.66663Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 8.66663C9.10457 8.66663 10 7.7712 10 6.66663C10 5.56206 9.10457 4.66663 8 4.66663C6.89543 4.66663 6 5.56206 6 6.66663C6 7.7712 6.89543 8.66663 8 8.66663Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15853"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconMapPin, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13545", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMapPin size={size} /> });