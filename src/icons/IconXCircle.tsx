import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconXCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12417)"><path fillRule="evenodd" clipRule="evenodd" d="M8.00016 2.0835C4.73248 2.0835 2.0835 4.73248 2.0835 8.00016C2.0835 11.2678 4.73248 13.9168 8.00016 13.9168C11.2678 13.9168 13.9168 11.2678 13.9168 8.00016C13.9168 4.73248 11.2678 2.0835 8.00016 2.0835ZM0.583496 8.00016C0.583496 3.90405 3.90405 0.583496 8.00016 0.583496C12.0963 0.583496 15.4168 3.90405 15.4168 8.00016C15.4168 12.0963 12.0963 15.4168 8.00016 15.4168C3.90405 15.4168 0.583496 12.0963 0.583496 8.00016ZM5.46983 5.46983C5.76273 5.17694 6.2376 5.17694 6.53049 5.46983L8.00016 6.9395L9.46983 5.46983C9.76273 5.17694 10.2376 5.17694 10.5305 5.46983C10.8234 5.76273 10.8234 6.2376 10.5305 6.53049L9.06082 8.00016L10.5305 9.46983C10.8234 9.76273 10.8234 10.2376 10.5305 10.5305C10.2376 10.8234 9.76273 10.8234 9.46983 10.5305L8.00016 9.06082L6.53049 10.5305C6.2376 10.8234 5.76273 10.8234 5.46983 10.5305C5.17694 10.2376 5.17694 9.76273 5.46983 9.46983L6.9395 8.00016L5.46983 6.53049C5.17694 6.2376 5.17694 5.76273 5.46983 5.46983Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12417"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconXCircle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13674", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconXCircle size={size} /> });