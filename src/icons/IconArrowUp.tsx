import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconArrowUp = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.46959 2.80292C7.76248 2.51003 8.23736 2.51003 8.53025 2.80292L13.1969 7.46959C13.4898 7.76248 13.4898 8.23736 13.1969 8.53025C12.904 8.82314 12.4291 8.82314 12.1363 8.53025L8.74992 5.14391V12.6666C8.74992 13.0808 8.41413 13.4166 7.99992 13.4166C7.58571 13.4166 7.24992 13.0808 7.24992 12.6666V5.14391L3.86358 8.53025C3.57069 8.82314 3.09582 8.82314 2.80292 8.53025C2.51003 8.23736 2.51003 7.76248 2.80292 7.46959L7.46959 2.80292Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconArrowUp, "https://staging.figma.com/design/YfiqA0yWMXuLJAzkZNpBdy?node-id=4039:13040", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconArrowUp size={size} /> });