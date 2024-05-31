import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconMonitor = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.66659 2.75C2.34442 2.75 2.08325 3.01117 2.08325 3.33333V10C2.08325 10.3222 2.34442 10.5833 2.66659 10.5833H7.99871C7.99911 10.5833 7.99952 10.5833 7.99992 10.5833C8.00032 10.5833 8.00072 10.5833 8.00113 10.5833H13.3333C13.6554 10.5833 13.9166 10.3222 13.9166 10V3.33333C13.9166 3.01117 13.6554 2.75 13.3333 2.75H2.66659ZM8.74992 12.0833H13.3333C14.4838 12.0833 15.4166 11.1506 15.4166 10V3.33333C15.4166 2.18274 14.4838 1.25 13.3333 1.25H2.66659C1.51599 1.25 0.583252 2.18274 0.583252 3.33333V10C0.583252 11.1506 1.51599 12.0833 2.66659 12.0833H7.24992V13.25H5.33325C4.91904 13.25 4.58325 13.5858 4.58325 14C4.58325 14.4142 4.91904 14.75 5.33325 14.75H10.6666C11.0808 14.75 11.4166 14.4142 11.4166 14C11.4166 13.5858 11.0808 13.25 10.6666 13.25H8.74992V12.0833Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconMonitor, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13561", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMonitor size={size} /> });