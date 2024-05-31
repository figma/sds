import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconMap = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12538)"><path fillRule="evenodd" clipRule="evenodd" d="M4.96107 0.682192C5.17879 0.557778 5.44429 0.550408 5.66858 0.662554L10.6429 3.14971L14.9611 0.682192C15.1932 0.549548 15.4784 0.5505 15.7096 0.684692C15.9409 0.818883 16.0832 1.06602 16.0832 1.33337V12C16.0832 12.2692 15.939 12.5177 15.7053 12.6512L11.0386 15.3179C10.8209 15.4423 10.5554 15.4497 10.3311 15.3375L5.35677 12.8504L1.03861 15.3179C0.806481 15.4505 0.521295 15.4496 0.290059 15.3154C0.0588227 15.1812 -0.0834961 14.9341 -0.0834961 14.6667V4.00004C-0.0834961 3.7309 0.0607185 3.48239 0.2944 3.34886L4.96107 0.682192ZM6.08317 11.5365L9.9165 13.4532V4.46357L6.08317 2.5469V11.5365ZM4.58317 2.62576V11.5648L1.4165 13.3743V4.43528L4.58317 2.62576ZM11.4165 4.43528V13.3743L14.5832 11.5648V2.62576L11.4165 4.43528Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12538"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconMap, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13547", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconMap size={size} /> });