import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconPlus = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M7.99992 2.58325C8.41413 2.58325 8.74992 2.91904 8.74992 3.33325V7.24992H12.6666C13.0808 7.24992 13.4166 7.58571 13.4166 7.99992C13.4166 8.41413 13.0808 8.74992 12.6666 8.74992H8.74992V12.6666C8.74992 13.0808 8.41413 13.4166 7.99992 13.4166C7.58571 13.4166 7.24992 13.0808 7.24992 12.6666V8.74992H3.33325C2.91904 8.74992 2.58325 8.41413 2.58325 7.99992C2.58325 7.58571 2.91904 7.24992 3.33325 7.24992H7.24992V3.33325C7.24992 2.91904 7.58571 2.58325 7.99992 2.58325Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconPlus, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13590", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPlus size={size} /> });