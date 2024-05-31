import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconTrendingUp = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12828)"><path fillRule="evenodd" clipRule="evenodd" d="M10.5834 4C10.5834 3.58579 10.9192 3.25 11.3334 3.25H15.3334C15.7476 3.25 16.0834 3.58579 16.0834 4V8C16.0834 8.41421 15.7476 8.75 15.3334 8.75C14.9192 8.75 14.5834 8.41421 14.5834 8V5.81066L9.53041 10.8637C9.23752 11.1566 8.76264 11.1566 8.46975 10.8637L5.66675 8.06066L1.19708 12.5303C0.904185 12.8232 0.429311 12.8232 0.136418 12.5303C-0.156475 12.2374 -0.156475 11.7626 0.136418 11.4697L5.13642 6.46967C5.42931 6.17678 5.90418 6.17678 6.19708 6.46967L9.00008 9.27267L13.5228 4.75H11.3334C10.9192 4.75 10.5834 4.41421 10.5834 4Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12828"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconTrendingUp, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13643", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTrendingUp size={size} /> });