import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconPaperclip = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12116)"><path fillRule="evenodd" clipRule="evenodd" d="M10.52 1.67517C10.0113 1.67517 9.52342 1.87726 9.16369 2.23698L3.03703 8.36365C2.42712 8.97356 2.08447 9.80078 2.08447 10.6633C2.08447 11.5259 2.42712 12.3531 3.03703 12.963C3.64694 13.5729 4.47415 13.9155 5.3367 13.9155C6.19924 13.9155 7.02646 13.5729 7.63637 12.963L13.763 6.83632C14.0559 6.54343 14.5308 6.54343 14.8237 6.83632C15.1166 7.12922 15.1166 7.60409 14.8237 7.89698L8.69703 14.0237C7.80581 14.9149 6.59707 15.4155 5.3367 15.4155C4.07633 15.4155 2.86758 14.9149 1.97637 14.0237C1.08515 13.1324 0.584473 11.9237 0.584473 10.6633C0.584473 9.40295 1.08515 8.19421 1.97637 7.30299L8.10303 1.17632C8.74406 0.535296 9.61348 0.175171 10.52 0.175171C11.4266 0.175171 12.296 0.535296 12.937 1.17632C13.5781 1.81735 13.9382 2.68677 13.9382 3.59332C13.9382 4.49987 13.5781 5.36929 12.937 6.01032L6.80369 12.137C6.8036 12.1371 6.80379 12.1369 6.80369 12.137C6.41288 12.5276 5.88263 12.7474 5.33003 12.7474C4.7773 12.7474 4.24721 12.5278 3.85637 12.137C3.46553 11.7461 3.24596 11.2161 3.24596 10.6633C3.24596 10.1106 3.46553 9.5805 3.85637 9.18966L9.51668 3.53601C9.80975 3.24329 10.2846 3.24357 10.5773 3.53664C10.8701 3.8297 10.8698 4.30458 10.5767 4.5973L4.91703 10.2503C4.91692 10.2504 4.91713 10.2502 4.91703 10.2503C4.80769 10.3598 4.74596 10.5086 4.74596 10.6633C4.74596 10.8182 4.80749 10.9668 4.91703 11.0763C5.02656 11.1859 5.17513 11.2474 5.33003 11.2474C5.48494 11.2474 5.6335 11.1859 5.74303 11.0763L11.8764 4.94966C11.8763 4.94975 11.8765 4.94956 11.8764 4.94966C12.2359 4.58996 12.4382 4.10191 12.4382 3.59332C12.4382 3.0846 12.2361 2.59671 11.8764 2.23698C11.5166 1.87726 11.0288 1.67517 10.52 1.67517Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12116"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconPaperclip, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13570", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconPaperclip size={size} /> });