import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconCornerLeftDown = (props: IconProps) => (
  <Icon {...props}><path d="M9.89898 10.5657C10.2114 10.2533 10.2114 9.74675 9.89898 9.43433C9.58656 9.12191 9.08003 9.12191 8.76761 9.43433L9.89898 10.5657ZM5.99996 13.3334L5.43427 13.899C5.5843 14.0491 5.78779 14.1334 5.99996 14.1334C6.21213 14.1334 6.41562 14.0491 6.56564 13.899L5.99996 13.3334ZM3.23231 9.43433C2.91989 9.12191 2.41336 9.12191 2.10094 9.43433C1.78852 9.74675 1.78852 10.2533 2.10094 10.5657L3.23231 9.43433ZM13.3333 3.46669C13.7751 3.46669 14.1333 3.10851 14.1333 2.66669C14.1333 2.22486 13.7751 1.86669 13.3333 1.86669V3.46669ZM8.66663 2.66669V1.86669V2.66669ZM5.99996 5.33335H5.19996H5.99996ZM8.76761 9.43433L5.43427 12.7677L6.56564 13.899L9.89898 10.5657L8.76761 9.43433ZM6.56564 12.7677L3.23231 9.43433L2.10094 10.5657L5.43427 13.899L6.56564 12.7677ZM13.3333 1.86669H8.66663V3.46669H13.3333V1.86669ZM8.66663 1.86669C7.74721 1.86669 6.86545 2.23192 6.21532 2.88205L7.34669 4.01342C7.69676 3.66335 8.17155 3.46669 8.66663 3.46669V1.86669ZM6.21532 2.88205C5.5652 3.53218 5.19996 4.41394 5.19996 5.33335H6.79996C6.79996 4.83828 6.99663 4.36349 7.34669 4.01342L6.21532 2.88205ZM5.19996 5.33335V13.3334H6.79996V5.33335H5.19996Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconCornerLeftDown, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13469", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCornerLeftDown size={size} /> });