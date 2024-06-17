import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconFlag = (props: IconProps) => (
  <Icon {...props}><path d="M2.66663 10C2.66663 10 3.33329 9.33333 5.33329 9.33333C7.33329 9.33333 8.66663 10.6667 10.6666 10.6667C12.6666 10.6667 13.3333 10 13.3333 10V2C13.3333 2 12.6666 2.66667 10.6666 2.66667C8.66663 2.66667 7.33329 1.33333 5.33329 1.33333C3.33329 1.33333 2.66663 2 2.66663 2V10ZM2.66663 10V14.6667" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconFlag, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13504", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconFlag size={size} /> });