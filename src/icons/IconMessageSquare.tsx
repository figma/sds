import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconMessageSquare = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M3.33333 2.75C3.17862 2.75 3.03025 2.81146 2.92085 2.92085C2.81146 3.03025 2.75 3.17862 2.75 3.33333V12.1893L4.13634 10.803C4.27699 10.6624 4.46775 10.5833 4.66667 10.5833H12.6667C12.8214 10.5833 12.9697 10.5219 13.0791 10.4125C13.1885 10.3031 13.25 10.1547 13.25 10V3.33333C13.25 3.17862 13.1885 3.03025 13.0791 2.92085C12.9697 2.81146 12.8214 2.75 12.6667 2.75H3.33333ZM1.86019 1.86019C2.2509 1.46949 2.7808 1.25 3.33333 1.25H12.6667C13.2192 1.25 13.7491 1.46949 14.1398 1.86019C14.5305 2.2509 14.75 2.7808 14.75 3.33333V10C14.75 10.5525 14.5305 11.0824 14.1398 11.4731C13.7491 11.8638 13.2192 12.0833 12.6667 12.0833H4.97733L2.53033 14.5303C2.31583 14.7448 1.99324 14.809 1.71299 14.6929C1.43273 14.5768 1.25 14.3033 1.25 14V3.33333C1.25 2.7808 1.46949 2.2509 1.86019 1.86019Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconMessageSquare, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13553", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMessageSquare size={size} /> });