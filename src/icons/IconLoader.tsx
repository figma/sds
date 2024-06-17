import figma from "@figma/code-connect";
import { IconProps, Icon } from "primitives";
export const IconLoader = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_68_15843)"><path d="M8.00004 1.33337V4.00004M8.00004 12V14.6667M3.28671 3.28671L5.17337 5.17337M10.8267 10.8267L12.7134 12.7134M1.33337 8.00004H4.00004M12 8.00004H14.6667M3.28671 12.7134L5.17337 10.8267M10.8267 5.17337L12.7134 3.28671" stroke="var(--svg-stroke-color)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></g><defs><clipPath id="clip0_68_15843"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconLoader, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13541", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconLoader size={size} /> });