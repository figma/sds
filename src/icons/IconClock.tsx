import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconClock = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12864)"><path fillRule="evenodd" clipRule="evenodd" d="M8.00004 2.08337C4.73236 2.08337 2.08337 4.73236 2.08337 8.00004C2.08337 11.2677 4.73236 13.9167 8.00004 13.9167C11.2677 13.9167 13.9167 11.2677 13.9167 8.00004C13.9167 4.73236 11.2677 2.08337 8.00004 2.08337ZM0.583374 8.00004C0.583374 3.90393 3.90393 0.583374 8.00004 0.583374C12.0962 0.583374 15.4167 3.90393 15.4167 8.00004C15.4167 12.0962 12.0962 15.4167 8.00004 15.4167C3.90393 15.4167 0.583374 12.0962 0.583374 8.00004ZM8.00004 3.25004C8.41425 3.25004 8.75004 3.58583 8.75004 4.00004V7.53652L11.0021 8.66255C11.3726 8.8478 11.5228 9.2983 11.3375 9.66878C11.1523 10.0393 10.7018 10.1894 10.3313 10.0042L7.66463 8.67086C7.41054 8.54382 7.25004 8.28412 7.25004 8.00004V4.00004C7.25004 3.58583 7.58583 3.25004 8.00004 3.25004Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12864"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconClock, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13173", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconClock size={size} /> });