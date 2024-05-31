import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconAtSign = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_11407)"><path fillRule="evenodd" clipRule="evenodd" d="M4.83104 1.29481C6.34448 0.579603 8.05535 0.397396 9.68547 0.777817C11.3156 1.15824 12.7691 2.07891 13.8096 3.39014C14.8501 4.70137 15.4165 6.32603 15.4166 7.99995V8.66666C15.4166 9.39601 15.1269 10.0955 14.6111 10.6112C14.0954 11.1269 13.3959 11.4167 12.6666 11.4167C11.9372 11.4167 11.2378 11.1269 10.7221 10.6112C10.6374 10.5265 10.5588 10.4369 10.4866 10.3431C9.8636 11.004 8.97995 11.4167 7.99993 11.4167C6.11295 11.4167 4.58326 9.88697 4.58326 7.99999C4.58326 6.11302 6.11295 4.58333 7.99993 4.58333C8.71696 4.58333 9.38241 4.80421 9.93194 5.18164C10.0021 4.84014 10.3043 4.58333 10.6666 4.58333C11.0808 4.58333 11.4166 4.91911 11.4166 5.33333V8.66666C11.4166 8.99818 11.5483 9.31612 11.7827 9.55054C12.0171 9.78496 12.3351 9.91666 12.6666 9.91666C12.9981 9.91666 13.3161 9.78497 13.5505 9.55054C13.7849 9.31612 13.9166 8.99818 13.9166 8.66666V8.00004C13.9166 8.00003 13.9166 8.00006 13.9166 8.00004C13.9165 6.66468 13.4647 5.36858 12.6346 4.32256C11.8045 3.27652 10.645 2.54205 9.34457 2.23857C8.04414 1.93508 6.67929 2.08044 5.47194 2.651C4.26459 3.22156 3.28576 4.18376 2.6946 5.38116C2.10345 6.57856 1.93473 7.94072 2.21589 9.24616C2.49705 10.5516 3.21155 11.7235 4.24322 12.5714C5.27488 13.4193 6.56302 13.8932 7.8982 13.9162C9.23338 13.9392 10.5371 13.5098 11.5973 12.6979C11.9261 12.446 12.3969 12.5085 12.6487 12.8373C12.9006 13.1662 12.8381 13.6369 12.5093 13.8888C11.1803 14.9065 9.54608 15.4448 7.87241 15.416C6.19874 15.3872 4.58402 14.7931 3.29081 13.7303C1.9976 12.6674 1.10196 11.1984 0.749517 9.56198C0.397075 7.92559 0.608563 6.21809 1.34959 4.71712C2.09062 3.21616 3.31761 2.01002 4.83104 1.29481ZM9.91659 7.99999C9.91659 6.94145 9.05847 6.08333 7.99993 6.08333C6.94138 6.08333 6.08326 6.94145 6.08326 7.99999C6.08326 9.05854 6.94138 9.91666 7.99993 9.91666C9.05847 9.91666 9.91659 9.05854 9.91659 7.99999Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_11407"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconAtSign, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4039:13043", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconAtSign size={size} /> });