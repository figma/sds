import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconGift = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12914)"><path fillRule="evenodd" clipRule="evenodd" d="M5 2.08334C4.75688 2.08334 4.52372 2.17992 4.35181 2.35183C4.17991 2.52374 4.08333 2.7569 4.08333 3.00001C4.08333 3.24313 4.17991 3.47628 4.35181 3.64819C4.52372 3.8201 4.75688 3.91668 5 3.91668H6.9803C6.90799 3.73842 6.82098 3.54899 6.71783 3.36145C6.3034 2.60793 5.74959 2.08334 5 2.08334ZM7.25 5.41668V7.25001H2.08333V5.41668H7.25ZM2.76393 3.91668C2.6458 3.62852 2.58333 3.31748 2.58333 3.00001C2.58333 2.35907 2.83794 1.74438 3.29115 1.29117C3.74437 0.837956 4.35906 0.583344 5 0.583344C6.55055 0.583344 7.48999 1.67805 8 2.58087C8.51 1.67805 9.44944 0.583344 11 0.583344C11.6409 0.583344 12.2556 0.837956 12.7088 1.29117C13.1621 1.74438 13.4167 2.35907 13.4167 3.00001C13.4167 3.31748 13.3542 3.62852 13.2361 3.91668H14.6667C15.0809 3.91668 15.4167 4.25246 15.4167 4.66668V8.00001C15.4167 8.41422 15.0809 8.75001 14.6667 8.75001H14.0833V14.6667C14.0833 15.0809 13.7475 15.4167 13.3333 15.4167H2.66666C2.25245 15.4167 1.91666 15.0809 1.91666 14.6667V8.75001H1.33333C0.919115 8.75001 0.583328 8.41422 0.583328 8.00001V4.66668C0.583328 4.25246 0.919115 3.91668 1.33333 3.91668H2.76393ZM3.41666 8.75001V13.9167H7.25V8.75001H3.41666ZM8.75 8.75001V13.9167H12.5833V8.75001H8.75ZM13.9167 7.25001H8.75V5.41668H13.9167V7.25001ZM11 3.91668C11.2431 3.91668 11.4763 3.8201 11.6482 3.64819C11.8201 3.47628 11.9167 3.24313 11.9167 3.00001C11.9167 2.7569 11.8201 2.52374 11.6482 2.35183C11.4763 2.17992 11.2431 2.08334 11 2.08334C10.2504 2.08334 9.69659 2.60793 9.28216 3.36145C9.17901 3.54899 9.092 3.73842 9.01969 3.91668H11Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12914"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconGift, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13510", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconGift size={size} /> });