import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconUsers = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_16083)"><path d="M11.3334 14V12.6667C11.3334 11.9594 11.0525 11.2811 10.5524 10.781C10.0523 10.281 9.37399 10 8.66675 10H3.33341C2.62617 10 1.94789 10.281 1.4478 10.781C0.9477 11.2811 0.666748 11.9594 0.666748 12.6667V14M15.3334 14V12.6667C15.333 12.0758 15.1363 11.5018 14.7743 11.0349C14.4123 10.5679 13.9055 10.2344 13.3334 10.0867M10.6667 2.08667C11.2404 2.23353 11.7488 2.56713 12.1118 3.03487C12.4749 3.50261 12.672 4.07789 12.672 4.67C12.672 5.26211 12.4749 5.83739 12.1118 6.30513C11.7488 6.77287 11.2404 7.10647 10.6667 7.25333M8.66675 4.66667C8.66675 6.13943 7.47284 7.33333 6.00008 7.33333C4.52732 7.33333 3.33341 6.13943 3.33341 4.66667C3.33341 3.19391 4.52732 2 6.00008 2C7.47284 2 8.66675 3.19391 8.66675 4.66667Z" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_16083"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconUsers, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13661", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconUsers size={size} /> });