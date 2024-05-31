import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconCoffee = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12723)"><path fillRule="evenodd" clipRule="evenodd" d="M3.99992 -0.083374C4.41413 -0.083374 4.74992 0.252412 4.74992 0.666626V2.66663C4.74992 3.08084 4.41413 3.41663 3.99992 3.41663C3.58571 3.41663 3.24992 3.08084 3.24992 2.66663V0.666626C3.24992 0.252412 3.58571 -0.083374 3.99992 -0.083374ZM6.66659 -0.083374C7.0808 -0.083374 7.41659 0.252412 7.41659 0.666626V2.66663C7.41659 3.08084 7.0808 3.41663 6.66659 3.41663C6.25237 3.41663 5.91659 3.08084 5.91659 2.66663V0.666626C5.91659 0.252412 6.25237 -0.083374 6.66659 -0.083374ZM9.33325 -0.083374C9.74747 -0.083374 10.0833 0.252412 10.0833 0.666626V2.66663C10.0833 3.08084 9.74747 3.41663 9.33325 3.41663C8.91904 3.41663 8.58325 3.08084 8.58325 2.66663V0.666626C8.58325 0.252412 8.91904 -0.083374 9.33325 -0.083374ZM0.583252 5.33329C0.583252 4.91908 0.919038 4.58329 1.33325 4.58329H12.6666C13.5727 4.58329 14.4418 4.94326 15.0825 5.58401C15.7233 6.22476 16.0833 7.0938 16.0833 7.99996C16.0833 8.90612 15.7233 9.77516 15.0825 10.4159C14.4612 11.0372 13.6252 11.3945 12.7489 11.4156C12.7278 12.292 12.3705 13.1279 11.7492 13.7492C11.1085 14.39 10.2394 14.75 9.33325 14.75H3.99992C3.09376 14.75 2.22472 14.39 1.58397 13.7492C0.943221 13.1085 0.583252 12.2394 0.583252 11.3333V5.33329ZM12.7499 9.91481C13.2279 9.89403 13.6821 9.695 14.0219 9.35525C14.3813 8.9958 14.5833 8.50829 14.5833 7.99996C14.5833 7.49163 14.3813 7.00412 14.0219 6.64467C13.6821 6.30492 13.2279 6.10589 12.7499 6.0851V9.91481ZM11.2499 6.08329V11.3333C11.2499 11.8416 11.048 12.3291 10.6885 12.6886C10.3291 13.048 9.84158 13.25 9.33325 13.25H3.99992C3.49159 13.25 3.00408 13.048 2.64463 12.6886C2.28519 12.3291 2.08325 11.8416 2.08325 11.3333V6.08329H11.2499Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12723"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconCoffee, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13183", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCoffee size={size} /> });