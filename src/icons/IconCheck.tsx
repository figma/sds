import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconCheck = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M13.8637 3.46967C14.1566 3.76256 14.1566 4.23744 13.8637 4.53033L6.53034 11.8637C6.23744 12.1566 5.76257 12.1566 5.46968 11.8637L2.13634 8.53033C1.84345 8.23744 1.84345 7.76256 2.13634 7.46967C2.42923 7.17678 2.90411 7.17678 3.197 7.46967L6.00001 10.2727L12.803 3.46967C13.0959 3.17678 13.5708 3.17678 13.8637 3.46967Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconCheck, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13063", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCheck size={size} /> });