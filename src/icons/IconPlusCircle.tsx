import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconPlusCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12216)"><path fillRule="evenodd" clipRule="evenodd" d="M8.00004 2.08325C4.73236 2.08325 2.08337 4.73223 2.08337 7.99992C2.08337 11.2676 4.73236 13.9166 8.00004 13.9166C11.2677 13.9166 13.9167 11.2676 13.9167 7.99992C13.9167 4.73223 11.2677 2.08325 8.00004 2.08325ZM0.583374 7.99992C0.583374 3.90381 3.90393 0.583252 8.00004 0.583252C12.0962 0.583252 15.4167 3.90381 15.4167 7.99992C15.4167 12.096 12.0962 15.4166 8.00004 15.4166C3.90393 15.4166 0.583374 12.096 0.583374 7.99992ZM8.00004 4.58325C8.41425 4.58325 8.75004 4.91904 8.75004 5.33325V7.24992H10.6667C11.0809 7.24992 11.4167 7.58571 11.4167 7.99992C11.4167 8.41413 11.0809 8.74992 10.6667 8.74992H8.75004V10.6666C8.75004 11.0808 8.41425 11.4166 8.00004 11.4166C7.58583 11.4166 7.25004 11.0808 7.25004 10.6666V8.74992H5.33337C4.91916 8.74992 4.58337 8.41413 4.58337 7.99992C4.58337 7.58571 4.91916 7.24992 5.33337 7.24992H7.25004V5.33325C7.25004 4.91904 7.58583 4.58325 8.00004 4.58325Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12216"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconPlusCircle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13588", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPlusCircle size={size} /> });