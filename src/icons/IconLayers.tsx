import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconLayers = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12570)"><path fillRule="evenodd" clipRule="evenodd" d="M7.66467 0.662493C7.87582 0.55692 8.12435 0.55692 8.33549 0.662493L15.0022 3.99583C15.2562 4.12287 15.4167 4.38257 15.4167 4.66665C15.4167 4.95073 15.2562 5.21042 15.0022 5.33747L8.33549 8.6708C8.12435 8.77637 7.87582 8.77637 7.66467 8.6708L0.998006 5.33747C0.743918 5.21042 0.583416 4.95073 0.583416 4.66665C0.583416 4.38257 0.743918 4.12287 0.998006 3.99583L7.66467 0.662493ZM3.01047 4.66665L8.00008 7.16145L12.9897 4.66665L8.00008 2.17184L3.01047 4.66665ZM0.662596 7.66457C0.847838 7.29409 1.29834 7.14392 1.66883 7.32916L8.00008 10.4948L14.3313 7.32916C14.7018 7.14392 15.1523 7.29409 15.3376 7.66457C15.5228 8.03505 15.3726 8.48556 15.0022 8.6708L8.33549 12.0041C8.12435 12.1097 7.87582 12.1097 7.66467 12.0041L0.998006 8.6708C0.627522 8.48556 0.477354 8.03505 0.662596 7.66457ZM0.662596 10.9979C0.847838 10.6274 1.29834 10.4773 1.66883 10.6625L8.00008 13.8281L14.3313 10.6625C14.7018 10.4773 15.1523 10.6274 15.3376 10.9979C15.5228 11.3684 15.3726 11.8189 15.0022 12.0041L8.33549 15.3375C8.12435 15.443 7.87582 15.443 7.66467 15.3375L0.998006 12.0041C0.627522 11.8189 0.477354 11.3684 0.662596 10.9979Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12570"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconLayers, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13532", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconLayers size={size} /> });