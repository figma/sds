import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconTable = (props: IconProps) => (
  <Icon {...props}><path d="M3.33333 2V1.2V2ZM2 3.33333H1.2H2ZM12.6667 2V1.2V2ZM2 12.6667H1.2H2ZM6 1.2H3.33333V2.8H6V1.2ZM3.33333 1.2C2.76754 1.2 2.22492 1.42476 1.82484 1.82484L2.95621 2.95621C3.05623 2.85619 3.19188 2.8 3.33333 2.8V1.2ZM1.82484 1.82484C1.42476 2.22492 1.2 2.76754 1.2 3.33333H2.8C2.8 3.19188 2.85619 3.05623 2.95621 2.95621L1.82484 1.82484ZM1.2 3.33333V6H2.8V3.33333H1.2ZM6 2.8H12.6667V1.2H6V2.8ZM12.6667 2.8C12.8081 2.8 12.9438 2.85619 13.0438 2.95621L14.1752 1.82484C13.7751 1.42476 13.2325 1.2 12.6667 1.2V2.8ZM13.0438 2.95621C13.1438 3.05623 13.2 3.19189 13.2 3.33333H14.8C14.8 2.76754 14.5752 2.22492 14.1752 1.82484L13.0438 2.95621ZM13.2 3.33333V6H14.8V3.33333H13.2ZM5.2 2V14H6.8V2H5.2ZM6 14.8H12.6667V13.2H6V14.8ZM12.6667 14.8C13.2325 14.8 13.7751 14.5752 14.1752 14.1752L13.0438 13.0438C12.9438 13.1438 12.8081 13.2 12.6667 13.2V14.8ZM14.1752 14.1752C14.5752 13.7751 14.8 13.2325 14.8 12.6667H13.2C13.2 12.8081 13.1438 12.9438 13.0438 13.0438L14.1752 14.1752ZM14.8 12.6667V6H13.2V12.6667H14.8ZM6 13.2H3.33333V14.8H6V13.2ZM3.33333 13.2C3.19189 13.2 3.05623 13.1438 2.95621 13.0438L1.82484 14.1752C2.22492 14.5752 2.76754 14.8 3.33333 14.8V13.2ZM2.95621 13.0438C2.85619 12.9438 2.8 12.8081 2.8 12.6667H1.2C1.2 13.2325 1.42476 13.7751 1.82484 14.1752L2.95621 13.0438ZM2.8 12.6667V6H1.2V12.6667H2.8ZM2 6.8H14V5.2H2V6.8Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconTable, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13630", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTable size={size} /> });