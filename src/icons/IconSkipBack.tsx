import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconSkipBack = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M12.9915 1.99078C13.2513 2.11567 13.4166 2.37845 13.4166 2.66676V13.3334C13.4166 13.6217 13.2513 13.8845 12.9915 14.0094C12.7316 14.1343 12.4232 14.0992 12.1981 13.9191L5.5314 8.58574C5.35349 8.44341 5.24992 8.22793 5.24992 8.00009C5.24992 7.77225 5.35349 7.55677 5.5314 7.41444L12.1981 2.0811C12.4232 1.901 12.7316 1.86589 12.9915 1.99078ZM7.2005 8.00009L11.9166 11.773V4.22722L7.2005 8.00009ZM3.33325 2.58342C3.74747 2.58342 4.08325 2.91921 4.08325 3.33342V12.6668C4.08325 13.081 3.74747 13.4168 3.33325 13.4168C2.91904 13.4168 2.58325 13.081 2.58325 12.6668V3.33342C2.58325 2.91921 2.91904 2.58342 3.33325 2.58342Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconSkipBack, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13616", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconSkipBack size={size} /> });