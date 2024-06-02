import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui/primitives";
export const IconVideo = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_16087)"><path d="M15.3332 4.66683H16.1332C16.1332 4.36716 15.9657 4.09262 15.6992 3.9555C15.4328 3.81837 15.112 3.84166 14.8682 4.01584L15.3332 4.66683ZM10.6665 8.00016L10.2015 7.34918C9.99128 7.49934 9.8665 7.7418 9.8665 8.00016C9.8665 8.25852 9.99128 8.50098 10.2015 8.65115L10.6665 8.00016ZM15.3332 11.3335L14.8682 11.9845C15.112 12.1587 15.4328 12.182 15.6992 12.0448C15.9657 11.9077 16.1332 11.6332 16.1332 11.3335H15.3332ZM14.8682 4.01584L10.2015 7.34918L11.1315 8.65115L15.7982 5.31782L14.8682 4.01584ZM10.2015 8.65115L14.8682 11.9845L15.7982 10.6825L11.1315 7.34918L10.2015 8.65115ZM16.1332 11.3335V4.66683H14.5332V11.3335H16.1332ZM1.99984 4.1335H9.33317V2.5335H1.99984V4.1335ZM9.33317 4.1335C9.62772 4.1335 9.8665 4.37228 9.8665 4.66683H11.4665C11.4665 3.48862 10.5114 2.5335 9.33317 2.5335V4.1335ZM9.8665 4.66683V11.3335H11.4665V4.66683H9.8665ZM9.8665 11.3335C9.8665 11.628 9.62772 11.8668 9.33317 11.8668V13.4668C10.5114 13.4668 11.4665 12.5117 11.4665 11.3335H9.8665ZM9.33317 11.8668H1.99984V13.4668H9.33317V11.8668ZM1.99984 11.8668C1.70529 11.8668 1.4665 11.628 1.4665 11.3335H-0.133496C-0.133496 12.5117 0.82163 13.4668 1.99984 13.4668V11.8668ZM1.4665 11.3335V4.66683H-0.133496V11.3335H1.4665ZM1.4665 4.66683C1.4665 4.37228 1.70529 4.1335 1.99984 4.1335V2.5335C0.82163 2.5335 -0.133496 3.48862 -0.133496 4.66683H1.4665Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_68_16087"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconVideo, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13664", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconVideo size={size} /> });