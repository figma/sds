import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconPercent = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M4.33335 3.41663C3.82709 3.41663 3.41669 3.82703 3.41669 4.33329C3.41669 4.83955 3.82709 5.24996 4.33335 5.24996C4.83961 5.24996 5.25002 4.83955 5.25002 4.33329C5.25002 3.82703 4.83961 3.41663 4.33335 3.41663ZM1.91669 4.33329C1.91669 2.9986 2.99867 1.91663 4.33335 1.91663C5.66804 1.91663 6.75002 2.9986 6.75002 4.33329C6.75002 5.66798 5.66804 6.74996 4.33335 6.74996C2.99867 6.74996 1.91669 5.66798 1.91669 4.33329ZM13.197 2.80296C13.4899 3.09586 13.4899 3.57073 13.197 3.86362L3.86368 13.197C3.57079 13.4899 3.09592 13.4899 2.80302 13.197C2.51013 12.9041 2.51013 12.4292 2.80302 12.1363L12.1364 2.80296C12.4293 2.51007 12.9041 2.51007 13.197 2.80296ZM11.6667 10.75C11.1604 10.75 10.75 11.1604 10.75 11.6666C10.75 12.1729 11.1604 12.5833 11.6667 12.5833C12.1729 12.5833 12.5834 12.1729 12.5834 11.6666C12.5834 11.1604 12.1729 10.75 11.6667 10.75ZM9.25002 11.6666C9.25002 10.3319 10.332 9.24996 11.6667 9.24996C13.0014 9.24996 14.0834 10.3319 14.0834 11.6666C14.0834 13.0013 13.0014 14.0833 11.6667 14.0833C10.332 14.0833 9.25002 13.0013 9.25002 11.6666Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconPercent, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13575", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPercent size={size} /> });