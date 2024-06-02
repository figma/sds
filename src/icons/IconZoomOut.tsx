import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconZoomOut = (props: IconProps) => (
  <Icon {...props}><path d="M13.4343 14.5657C13.7467 14.8781 14.2533 14.8781 14.5657 14.5657C14.8781 14.2533 14.8781 13.7467 14.5657 13.4343L13.4343 14.5657ZM11.6657 10.5343C11.3533 10.2219 10.8467 10.2219 10.5343 10.5343C10.2219 10.8467 10.2219 11.3533 10.5343 11.6657L11.6657 10.5343ZM5.33333 6.53333C4.89151 6.53333 4.53333 6.89151 4.53333 7.33333C4.53333 7.77516 4.89151 8.13333 5.33333 8.13333V6.53333ZM9.33333 8.13333C9.77516 8.13333 10.1333 7.77516 10.1333 7.33333C10.1333 6.89151 9.77516 6.53333 9.33333 6.53333V8.13333ZM11.8667 7.33333C11.8667 9.83702 9.83702 11.8667 7.33333 11.8667V13.4667C10.7207 13.4667 13.4667 10.7207 13.4667 7.33333H11.8667ZM7.33333 11.8667C4.82964 11.8667 2.8 9.83702 2.8 7.33333H1.2C1.2 10.7207 3.94599 13.4667 7.33333 13.4667V11.8667ZM2.8 7.33333C2.8 4.82964 4.82964 2.8 7.33333 2.8V1.2C3.94599 1.2 1.2 3.94599 1.2 7.33333H2.8ZM7.33333 2.8C9.83702 2.8 11.8667 4.82964 11.8667 7.33333H13.4667C13.4667 3.94599 10.7207 1.2 7.33333 1.2V2.8ZM14.5657 13.4343L11.6657 10.5343L10.5343 11.6657L13.4343 14.5657L14.5657 13.4343ZM5.33333 8.13333H9.33333V6.53333H5.33333V8.13333Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconZoomOut, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13681", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconZoomOut size={size} /> });