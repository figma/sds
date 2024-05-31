import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconCloudLightning = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12236)"><path fillRule="evenodd" clipRule="evenodd" d="M4.99854 -0.00050915C5.99228 -0.165729 7.0115 -0.0815789 7.96468 0.244387C8.91787 0.570353 9.77519 1.12793 10.4597 1.86706C11.0104 2.46171 11.4353 3.1589 11.7116 3.91666H11.9999M9.08281 6.70929C9.42746 6.93906 9.52059 7.40471 9.29082 7.74936L7.40151 10.5833H10.0001C10.2767 10.5833 10.5309 10.7356 10.6614 10.9794C10.7919 11.2233 10.7776 11.5192 10.6242 11.7494L7.95749 15.7494C7.72773 16.094 7.26207 16.1871 6.91743 15.9574C6.57278 15.7276 6.47965 15.262 6.70941 14.9173L8.59873 12.0833H6.00012C5.72352 12.0833 5.46938 11.9311 5.33886 11.6872C5.20835 11.4434 5.22265 11.1474 5.37608 10.9173L8.04275 6.9173C8.27251 6.57266 8.73816 6.47953 9.08281 6.70929Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12236"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconCloudLightning, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13175", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCloudLightning size={size} /> });