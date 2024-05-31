import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconTool = (props: IconProps) => (
  <Icon {...props}><path fillRule="evenodd" clipRule="evenodd" d="M10.853 2.0863C10.5963 2.07137 10.3374 2.08686 10.0817 2.13345C9.43175 2.25188 8.83332 2.56557 8.36617 3.03272C7.89902 3.49987 7.58533 4.0983 7.46691 4.74825C7.34848 5.3982 7.43095 6.06881 7.70332 6.6707C7.83202 6.95511 7.7711 7.2895 7.55036 7.51024L2.94369 12.1169C2.81912 12.2415 2.74915 12.4104 2.74915 12.5866C2.74915 12.7627 2.81912 12.9317 2.94369 13.0562C3.06825 13.1808 3.2372 13.2508 3.41336 13.2508C3.58952 13.2508 3.75846 13.1808 3.88303 13.0562L8.4897 8.44958C8.71044 8.22884 9.04482 8.16791 9.32923 8.29661C9.93113 8.56898 10.6017 8.65145 11.2517 8.53303C11.9016 8.4146 12.5001 8.10091 12.9672 7.63376C13.4344 7.16661 13.7481 6.56818 13.8665 5.91823C13.9131 5.66252 13.9286 5.40362 13.9136 5.14696L12.3251 6.73554C12.0602 6.99511 11.7042 7.14048 11.3334 7.14048C10.9625 7.14048 10.6065 6.99508 10.3417 6.73551L10.3363 6.73026L9.26439 5.65827C9.00482 5.39345 8.85945 5.03739 8.85945 4.66657C8.85945 4.29576 9.00485 3.93972 9.26442 3.67491L9.26967 3.66955L10.853 2.0863ZM9.81282 0.657748C10.7628 0.484669 11.7429 0.605199 12.6226 1.00328C12.8469 1.10478 13.0071 1.30991 13.0512 1.55213C13.0953 1.79435 13.0178 2.04281 12.8437 2.2169L10.394 4.66657L11.3334 5.60591L13.783 3.15624C13.9571 2.98215 14.2056 2.90459 14.4478 2.94872C14.69 2.99285 14.8951 3.15306 14.9967 3.37737C15.3947 4.25706 15.5153 5.23718 15.3422 6.18711C15.1691 7.13704 14.7106 8.01166 14.0279 8.69442C13.3451 9.37718 12.4705 9.83565 11.5206 10.0087C10.7455 10.15 9.95025 10.0957 9.20591 9.85469L4.94369 14.1169C4.53782 14.5228 3.98734 14.7508 3.41336 14.7508C2.83937 14.7508 2.2889 14.5228 1.88303 14.1169C1.47716 13.711 1.24915 13.1606 1.24915 12.5866C1.24915 12.0126 1.47716 11.4621 1.88303 11.0562L6.14525 6.79403C5.90423 6.04968 5.84998 5.25448 5.9912 4.47937C6.16428 3.52944 6.62275 2.65482 7.30551 1.97206C7.98827 1.2893 8.86289 0.830827 9.81282 0.657748Z" fill="var(--svg-fill-color)"/></Icon>
);
figma.connect(IconTool, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13640", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconTool size={size} /> });