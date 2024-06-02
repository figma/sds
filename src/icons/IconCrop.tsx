import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconCrop = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15715)"><path d="M4.88666 0.67362C4.89049 0.231809 4.53543 -0.129454 4.09362 -0.133283C3.65181 -0.137112 3.29055 0.217943 3.28672 0.659754L4.88666 0.67362ZM4.00002 10.6667L3.20002 10.6598V10.6667H4.00002ZM15.3334 12.8C15.7752 12.8 16.1334 12.4418 16.1334 12C16.1334 11.5582 15.7752 11.2 15.3334 11.2V12.8ZM0.659754 3.28672C0.217943 3.29055 -0.137112 3.65181 -0.133283 4.09362C-0.129454 4.53543 0.231809 4.89049 0.67362 4.88666L0.659754 3.28672ZM10.6667 4.00002V3.19999L10.6598 3.20005L10.6667 4.00002ZM11.2 15.3334C11.2 15.7752 11.5582 16.1334 12 16.1334C12.4418 16.1334 12.8 15.7752 12.8 15.3334H11.2ZM3.28672 0.659754L3.20005 10.6598L4.79999 10.6736L4.88666 0.67362L3.28672 0.659754ZM3.20002 10.6667C3.20002 11.2325 3.42478 11.7751 3.82486 12.1752L4.95623 11.0438C4.85621 10.9438 4.80002 10.8081 4.80002 10.6667H3.20002ZM3.82486 12.1752C4.22494 12.5753 4.76756 12.8 5.33335 12.8V11.2C5.19191 11.2 5.05625 11.1438 4.95623 11.0438L3.82486 12.1752ZM5.33335 12.8H15.3334V11.2H5.33335V12.8ZM0.67362 4.88666L10.6736 4.79999L10.6598 3.20005L0.659754 3.28672L0.67362 4.88666ZM10.6667 4.80002C10.8081 4.80002 10.9438 4.85621 11.0438 4.95623L12.1752 3.82486C11.7751 3.42478 11.2325 3.20002 10.6667 3.20002V4.80002ZM11.0438 4.95623C11.1438 5.05625 11.2 5.19191 11.2 5.33335H12.8C12.8 4.76756 12.5753 4.22494 12.1752 3.82486L11.0438 4.95623ZM11.2 5.33335V15.3334H12.8V5.33335H11.2Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_68_15715"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconCrop, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13477", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCrop size={size} /> });