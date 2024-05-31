import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconClipboard = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M6.08329 2.08337V2.6661C6.08329 2.6659 6.08329 2.6663 6.08329 2.6661C6.08329 2.6663 6.08329 2.66711 6.08329 2.66731V3.25004H9.91663V2.08337H6.08329ZM11.4142 1.91671C11.3711 1.17309 10.7544 0.583374 9.99996 0.583374H5.99996C5.24553 0.583374 4.62884 1.17309 4.5857 1.91671H3.99996C3.44743 1.91671 2.91752 2.1362 2.52682 2.5269C2.13612 2.9176 1.91663 3.44751 1.91663 4.00004V13.3334C1.91663 13.8859 2.13612 14.4158 2.52682 14.8065C2.91752 15.1972 3.44742 15.4167 3.99996 15.4167H12C12.5525 15.4167 13.0824 15.1972 13.4731 14.8065C13.8638 14.4158 14.0833 13.8859 14.0833 13.3334V4.00004C14.0833 3.44751 13.8638 2.9176 13.4731 2.5269C13.0824 2.1362 12.5525 1.91671 12 1.91671H11.4142ZM11.4142 3.41671C11.3711 4.16032 10.7544 4.75004 9.99996 4.75004H5.99996C5.24553 4.75004 4.62884 4.16032 4.5857 3.41671H3.99996C3.84525 3.41671 3.69688 3.47817 3.58748 3.58756C3.47808 3.69696 3.41663 3.84533 3.41663 4.00004V13.3334C3.41663 13.4881 3.47808 13.6365 3.58748 13.7459C3.69688 13.8552 3.84525 13.9167 3.99996 13.9167H12C12.1547 13.9167 12.303 13.8553 12.4124 13.7459C12.5218 13.6365 12.5833 13.4881 12.5833 13.3334V4.00004C12.5833 3.84533 12.5218 3.69696 12.4124 3.58756C12.303 3.47817 12.1547 3.41671 12 3.41671H11.4142Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconClipboard, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13174", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconClipboard size={size} /> });