import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconColumns = (props: IconProps) => (
  <Icon {...props}><path d="M12.6667 2V1.2V2ZM3.33333 2V1.2V2ZM2 3.33333H1.2H2ZM2 12.6667H1.2H2ZM8 2.8H12.6667V1.2H8V2.8ZM12.6667 2.8C12.8081 2.8 12.9438 2.85619 13.0438 2.95621L14.1752 1.82484C13.7751 1.42476 13.2325 1.2 12.6667 1.2V2.8ZM13.0438 2.95621C13.1438 3.05623 13.2 3.19189 13.2 3.33333H14.8C14.8 2.76754 14.5752 2.22492 14.1752 1.82484L13.0438 2.95621ZM13.2 3.33333V12.6667H14.8V3.33333H13.2ZM13.2 12.6667C13.2 12.8081 13.1438 12.9438 13.0438 13.0438L14.1752 14.1752C14.5752 13.7751 14.8 13.2325 14.8 12.6667H13.2ZM13.0438 13.0438C12.9438 13.1438 12.8081 13.2 12.6667 13.2V14.8C13.2325 14.8 13.7751 14.5752 14.1752 14.1752L13.0438 13.0438ZM12.6667 13.2H8V14.8H12.6667V13.2ZM8 1.2H3.33333V2.8H8V1.2ZM3.33333 1.2C2.76754 1.2 2.22492 1.42476 1.82484 1.82484L2.95621 2.95621C3.05623 2.85619 3.19188 2.8 3.33333 2.8V1.2ZM1.82484 1.82484C1.42476 2.22492 1.2 2.76754 1.2 3.33333H2.8C2.8 3.19188 2.85619 3.05623 2.95621 2.95621L1.82484 1.82484ZM1.2 3.33333V12.6667H2.8V3.33333H1.2ZM1.2 12.6667C1.2 13.2325 1.42476 13.7751 1.82484 14.1752L2.95621 13.0438C2.85619 12.9438 2.8 12.8081 2.8 12.6667H1.2ZM1.82484 14.1752C2.22492 14.5752 2.76754 14.8 3.33333 14.8V13.2C3.19189 13.2 3.05623 13.1438 2.95621 13.0438L1.82484 14.1752ZM3.33333 14.8H8V13.2H3.33333V14.8ZM7.2 2V14H8.8V2H7.2Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconColumns, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13185", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconColumns size={size} /> });