import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconMaximize = (props: IconProps) => (
  <Icon {...props}><path d="M5.33333 2.8C5.77516 2.8 6.13333 2.44183 6.13333 2C6.13333 1.55817 5.77516 1.2 5.33333 1.2V2.8ZM3.33333 2V1.2V2ZM2 3.33333H1.2H2ZM1.2 5.33333C1.2 5.77516 1.55817 6.13333 2 6.13333C2.44183 6.13333 2.8 5.77516 2.8 5.33333H1.2ZM13.2 5.33333C13.2 5.77516 13.5582 6.13333 14 6.13333C14.4418 6.13333 14.8 5.77516 14.8 5.33333H13.2ZM12.6667 2V1.2V2ZM10.6667 1.2C10.2248 1.2 9.86667 1.55817 9.86667 2C9.86667 2.44183 10.2248 2.8 10.6667 2.8V1.2ZM10.6667 13.2C10.2248 13.2 9.86667 13.5582 9.86667 14C9.86667 14.4418 10.2248 14.8 10.6667 14.8V13.2ZM14.8 10.6667C14.8 10.2248 14.4418 9.86667 14 9.86667C13.5582 9.86667 13.2 10.2248 13.2 10.6667H14.8ZM2.8 10.6667C2.8 10.2248 2.44183 9.86667 2 9.86667C1.55817 9.86667 1.2 10.2248 1.2 10.6667H2.8ZM2 12.6667H1.2H2ZM5.33333 14.8C5.77516 14.8 6.13333 14.4418 6.13333 14C6.13333 13.5582 5.77516 13.2 5.33333 13.2V14.8ZM5.33333 1.2H3.33333V2.8H5.33333V1.2ZM3.33333 1.2C2.76754 1.2 2.22492 1.42476 1.82484 1.82484L2.95621 2.95621C3.05623 2.85619 3.19188 2.8 3.33333 2.8V1.2ZM1.82484 1.82484C1.42476 2.22492 1.2 2.76754 1.2 3.33333H2.8C2.8 3.19188 2.85619 3.05623 2.95621 2.95621L1.82484 1.82484ZM1.2 3.33333V5.33333H2.8V3.33333H1.2ZM14.8 5.33333V3.33333H13.2V5.33333H14.8ZM14.8 3.33333C14.8 2.76754 14.5752 2.22492 14.1752 1.82484L13.0438 2.95621C13.1438 3.05623 13.2 3.19189 13.2 3.33333H14.8ZM14.1752 1.82484C13.7751 1.42476 13.2325 1.2 12.6667 1.2V2.8C12.8081 2.8 12.9438 2.85619 13.0438 2.95621L14.1752 1.82484ZM12.6667 1.2H10.6667V2.8H12.6667V1.2ZM10.6667 14.8H12.6667V13.2H10.6667V14.8ZM12.6667 14.8C13.2325 14.8 13.7751 14.5752 14.1752 14.1752L13.0438 13.0438C12.9438 13.1438 12.8081 13.2 12.6667 13.2V14.8ZM14.1752 14.1752C14.5752 13.7751 14.8 13.2325 14.8 12.6667H13.2C13.2 12.8081 13.1438 12.9438 13.0438 13.0438L14.1752 14.1752ZM14.8 12.6667V10.6667H13.2V12.6667H14.8ZM1.2 10.6667V12.6667H2.8V10.6667H1.2ZM1.2 12.6667C1.2 13.2325 1.42476 13.7751 1.82484 14.1752L2.95621 13.0438C2.85619 12.9438 2.8 12.8081 2.8 12.6667H1.2ZM1.82484 14.1752C2.22492 14.5752 2.76754 14.8 3.33333 14.8V13.2C3.19189 13.2 3.05623 13.1438 2.95621 13.0438L1.82484 14.1752ZM3.33333 14.8H5.33333V13.2H3.33333V14.8Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconMaximize, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13548", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMaximize size={size} /> });