import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconCornerUpLeft = (props: IconProps) => (
  <Icon {...props}><path d="M5.4344 9.89904C5.74681 10.2115 6.25335 10.2115 6.56577 9.89904C6.87819 9.58662 6.87819 9.08009 6.56577 8.76767L5.4344 9.89904ZM2.66675 6.00002L2.10106 5.43433C1.78864 5.74675 1.78864 6.25329 2.10106 6.56571L2.66675 6.00002ZM6.56577 3.23237C6.87819 2.91995 6.87819 2.41342 6.56577 2.101C6.25335 1.78858 5.74681 1.78858 5.4344 2.101L6.56577 3.23237ZM12.5334 13.3334C12.5334 13.7752 12.8916 14.1334 13.3334 14.1334C13.7752 14.1334 14.1334 13.7752 14.1334 13.3334H12.5334ZM10.6667 6.00002V5.20002V6.00002ZM6.56577 8.76767L3.23243 5.43433L2.10106 6.56571L5.4344 9.89904L6.56577 8.76767ZM3.23243 6.56571L6.56577 3.23237L5.4344 2.101L2.10106 5.43433L3.23243 6.56571ZM14.1334 13.3334V8.66669H12.5334V13.3334H14.1334ZM14.1334 8.66669C14.1334 7.74727 13.7682 6.86551 13.118 6.21538L11.9867 7.34675C12.3367 7.69682 12.5334 8.17162 12.5334 8.66669H14.1334ZM13.118 6.21538C12.4679 5.56526 11.5862 5.20002 10.6667 5.20002V6.80002C11.1618 6.80002 11.6366 6.99669 11.9867 7.34675L13.118 6.21538ZM10.6667 5.20002H2.66675V6.80002H10.6667V5.20002Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconCornerUpLeft, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13473", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCornerUpLeft size={size} /> });