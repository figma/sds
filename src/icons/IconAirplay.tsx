import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconAirplay = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M2.66665 2.75C2.51194 2.75 2.36356 2.81146 2.25417 2.92085C2.14477 3.03025 2.08331 3.17862 2.08331 3.33333V10C2.08331 10.1547 2.14477 10.3031 2.25417 10.4125C2.36356 10.5219 2.51194 10.5833 2.66665 10.5833H3.33331C3.74753 10.5833 4.08331 10.9191 4.08331 11.3333C4.08331 11.7475 3.74753 12.0833 3.33331 12.0833H2.66665C2.11411 12.0833 1.58421 11.8638 1.19351 11.4731C0.802806 11.0824 0.583313 10.5525 0.583313 10V3.33333C0.583313 2.7808 0.802806 2.2509 1.19351 1.86019C1.58421 1.46949 2.11411 1.25 2.66665 1.25H13.3333C13.8858 1.25 14.4158 1.46949 14.8065 1.86019C15.1972 2.25089 15.4166 2.7808 15.4166 3.33333V10C15.4166 10.5525 15.1972 11.0824 14.8065 11.4731C14.4158 11.8638 13.8858 12.0833 13.3333 12.0833H12.6666C12.2524 12.0833 11.9166 11.7475 11.9166 11.3333C11.9166 10.9191 12.2524 10.5833 12.6666 10.5833H13.3333C13.488 10.5833 13.6364 10.5219 13.7458 10.4125C13.8552 10.3031 13.9166 10.1547 13.9166 10V3.33333C13.9166 3.17862 13.8552 3.03025 13.7458 2.92085C13.6364 2.81146 13.488 2.75 13.3333 2.75H2.66665ZM7.99998 9.25C8.22256 9.25 8.43365 9.34887 8.57615 9.51986L11.9095 13.5199C12.0958 13.7434 12.1359 14.0546 12.0125 14.3181C11.8891 14.5817 11.6243 14.75 11.3333 14.75H4.66665C4.37563 14.75 4.11089 14.5817 3.98745 14.3181C3.86402 14.0546 3.90418 13.7434 4.09048 13.5199L7.42381 9.51986C7.56631 9.34887 7.7774 9.25 7.99998 9.25ZM6.26793 13.25H9.73203L7.99998 11.1715L6.26793 13.25Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconAirplay, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13019", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconAirplay size={size} /> });