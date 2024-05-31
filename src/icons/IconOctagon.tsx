import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconOctagon = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12174)"><path fillRule="evenodd" clipRule="evenodd" d="M4.70959 0.803044C4.85024 0.662392 5.04101 0.583374 5.23992 0.583374H10.7599C10.9588 0.583374 11.1496 0.662392 11.2902 0.803044L15.1969 4.70971C15.3376 4.85036 15.4166 5.04113 15.4166 5.24004V10.76C15.4166 10.959 15.3376 11.1497 15.1969 11.2904L11.2902 15.197C11.1496 15.3377 10.9588 15.4167 10.7599 15.4167H5.23992C5.04101 15.4167 4.85024 15.3377 4.70959 15.197L0.802922 11.2904C0.66227 11.1497 0.583252 10.959 0.583252 10.76V5.24004C0.583252 5.04113 0.66227 4.85036 0.802922 4.70971L4.70959 0.803044ZM5.55058 2.08337L2.08325 5.5507V10.4494L5.55058 13.9167H10.4493L13.9166 10.4494V5.5507L10.4493 2.08337H5.55058Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12174"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconOctagon, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13569", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconOctagon size={size} /> });