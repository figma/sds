import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconPercent = (props: IconProps) => (
  <Icon {...props}><path d="M12.6667 3.33329L3.33335 12.6666M6.00002 4.33329C6.00002 5.25377 5.25383 5.99996 4.33335 5.99996C3.41288 5.99996 2.66669 5.25377 2.66669 4.33329C2.66669 3.41282 3.41288 2.66663 4.33335 2.66663C5.25383 2.66663 6.00002 3.41282 6.00002 4.33329ZM13.3334 11.6666C13.3334 12.5871 12.5872 13.3333 11.6667 13.3333C10.7462 13.3333 10 12.5871 10 11.6666C10 10.7462 10.7462 9.99996 11.6667 9.99996C12.5872 9.99996 13.3334 10.7462 13.3334 11.6666Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></Icon>
);
figma.connect(IconPercent, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13575", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPercent size={size} /> });