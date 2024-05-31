import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconArrowRight = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.46965 2.80292C7.76254 2.51003 8.23742 2.51003 8.53031 2.80292L13.197 7.46959C13.4899 7.76248 13.4899 8.23736 13.197 8.53025L8.53031 13.1969C8.23742 13.4898 7.76254 13.4898 7.46965 13.1969C7.17676 12.904 7.17676 12.4291 7.46965 12.1363L10.856 8.74992H3.33331C2.9191 8.74992 2.58331 8.41413 2.58331 7.99992C2.58331 7.58571 2.9191 7.24992 3.33331 7.24992H10.856L7.46965 3.86358C7.17676 3.57069 7.17676 3.09582 7.46965 2.80292Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconArrowRight, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13036", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowRight size={size} /> });