import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconMail = (props: IconProps) => (
  <Icon {...props}><path d="M14.6666 3.99996C14.6666 3.26663 14.0666 2.66663 13.3333 2.66663H2.66659C1.93325 2.66663 1.33325 3.26663 1.33325 3.99996M14.6666 3.99996V12C14.6666 12.7333 14.0666 13.3333 13.3333 13.3333H2.66659C1.93325 13.3333 1.33325 12.7333 1.33325 12V3.99996M14.6666 3.99996L7.99992 8.66663L1.33325 3.99996" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconMail, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13544", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMail size={size} /> });