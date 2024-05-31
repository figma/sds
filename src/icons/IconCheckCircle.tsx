import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconCheckCircle = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_11963)"><path fillRule="evenodd" clipRule="evenodd" d="M10.4083 2.59169C9.24282 2.0724 7.94076 1.94376 6.69624 2.22494C5.45173 2.50612 4.33145 3.18207 3.50248 4.15196C2.67351 5.12185 2.18027 6.33372 2.09632 7.60684C2.01237 8.87996 2.34221 10.1461 3.03665 11.2165C3.73108 12.2868 4.75291 13.104 5.94973 13.5462C7.14654 13.9883 8.45423 14.0318 9.67775 13.67C10.9013 13.3082 11.9751 12.5607 12.739 11.5388C13.503 10.5169 13.9161 9.2754 13.9168 7.99952V7.38662C13.9168 6.9724 14.2526 6.63662 14.6668 6.63662C15.081 6.63662 15.4168 6.9724 15.4168 7.38662V7.99995C15.4159 9.5993 14.898 11.1559 13.9404 12.4369C12.9828 13.7179 11.6368 14.655 10.1031 15.1084C8.56934 15.5619 6.93013 15.5075 5.42989 14.9532C3.92966 14.3989 2.64878 13.3746 1.77829 12.0329C0.907802 10.6912 0.494341 9.10403 0.599573 7.50815C0.704805 5.91226 1.32309 4.39316 2.36222 3.17738C3.40135 1.9616 4.80564 1.11429 6.36567 0.761821C7.92569 0.409354 9.55786 0.570613 11.0188 1.22155C11.3971 1.39013 11.5672 1.83351 11.3986 2.21187C11.23 2.59022 10.7866 2.76027 10.4083 2.59169ZM15.1969 2.13602C15.4899 2.42877 15.4902 2.90364 15.1974 3.19668L8.53076 9.87002C8.39013 10.0108 8.19933 10.0899 8.00035 10.09C7.80138 10.09 7.61054 10.011 7.46984 9.87028L5.46984 7.87028C5.17694 7.57739 5.17694 7.10251 5.46984 6.80962C5.76273 6.51673 6.2376 6.51673 6.5305 6.80962L7.9999 8.27903L14.1362 2.13655C14.429 1.84351 14.9039 1.84328 15.1969 2.13602Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_11963"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconCheckCircle, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13060", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconCheckCircle size={size} /> });