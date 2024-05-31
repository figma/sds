import figma from "@figma/code-connect";
import { IconProps, Icon } from "ui";
export const IconEye = (props: IconProps) => (
  <Icon {...props}><g clipPath="url(#clip0_4039_12785)"><path fillRule="evenodd" clipRule="evenodd" d="M1.5236 8.00001C1.59258 8.11788 1.6803 8.26232 1.7863 8.42644C2.0917 8.89932 2.54385 9.52795 3.13051 10.1537C4.31749 11.4198 5.96632 12.5833 8.00002 12.5833C10.0337 12.5833 11.6825 11.4198 12.8695 10.1537C13.4562 9.52795 13.9083 8.89932 14.2137 8.42644C14.3197 8.26232 14.4075 8.11788 14.4764 8C14.4075 7.88213 14.3197 7.73769 14.2137 7.57357C13.9083 7.10069 13.4562 6.47206 12.8695 5.84629C11.6825 4.58018 10.0337 3.41667 8.00002 3.41667C5.96632 3.41667 4.31749 4.58018 3.13051 5.84629C2.54385 6.47206 2.0917 7.10069 1.7863 7.57357C1.6803 7.73769 1.59258 7.88213 1.5236 8.00001ZM15.3334 8.00001C16.0042 7.6646 16.004 7.66435 16.0039 7.66407L16.0036 7.66343L16.0028 7.66178L16.0004 7.65702L15.9926 7.64179C15.9861 7.62913 15.9769 7.61154 15.9652 7.58932C15.9417 7.5449 15.9077 7.48196 15.8633 7.40314C15.7747 7.24561 15.6445 7.02406 15.4738 6.75978C15.1334 6.23266 14.6272 5.52795 13.9638 4.82038C12.6508 3.41984 10.633 1.91667 8.00002 1.91667C5.36706 1.91667 3.34921 3.41984 2.0362 4.82038C1.37285 5.52795 0.866673 6.23266 0.526241 6.75978C0.355559 7.02406 0.225315 7.24561 0.136703 7.40314C0.0923692 7.48196 0.0583723 7.5449 0.0348661 7.58932C0.0231106 7.61154 0.0139708 7.62913 0.00746642 7.64179L-0.00031431 7.65702L-0.00271983 7.66178L-0.00355072 7.66343L-0.00387307 7.66407C-0.00400837 7.66435 -0.0041334 7.6646 0.666687 8.00001L-0.00413342 7.6646C-0.109706 7.87574 -0.109706 8.12427 -0.00413342 8.33542L0.666687 8.00001C-0.0041334 8.33542 -0.00400837 8.33567 -0.00387307 8.33594L-0.00355072 8.33658L-0.00271983 8.33823L-0.00031431 8.34299L0.00746642 8.35822C0.0139708 8.37088 0.0231106 8.38847 0.0348661 8.41069C0.0583723 8.45511 0.0923692 8.51805 0.136703 8.59687C0.225315 8.7544 0.355559 8.97595 0.526241 9.24023C0.866673 9.76735 1.37285 10.4721 2.0362 11.1796C3.34921 12.5802 5.36706 14.0833 8.00002 14.0833C10.633 14.0833 12.6508 12.5802 13.9638 11.1796C14.6272 10.4721 15.1334 9.76735 15.4738 9.24023C15.6445 8.97595 15.7747 8.7544 15.8633 8.59687C15.9077 8.51805 15.9417 8.45511 15.9652 8.41069C15.9769 8.38847 15.9861 8.37088 15.9926 8.35822L16.0004 8.34299L16.0028 8.33823L16.0036 8.33658L16.0039 8.33594C16.004 8.33567 16.0042 8.33542 15.3334 8.00001ZM15.3334 8.00001L16.0042 8.33542C16.1097 8.12427 16.1097 7.87574 16.0042 7.6646L15.3334 8.00001ZM8.00002 6.75001C7.30966 6.75001 6.75002 7.30965 6.75002 8.00001C6.75002 8.69036 7.30966 9.25001 8.00002 9.25001C8.69038 9.25001 9.25002 8.69036 9.25002 8.00001C9.25002 7.30965 8.69038 6.75001 8.00002 6.75001ZM5.25002 8.00001C5.25002 6.48122 6.48124 5.25001 8.00002 5.25001C9.5188 5.25001 10.75 6.48122 10.75 8.00001C10.75 9.51879 9.5188 10.75 8.00002 10.75C6.48124 10.75 5.25002 9.51879 5.25002 8.00001Z" fill="var(--svg-fill-color)"/></g><defs><clipPath id="clip0_4039_12785"><rect width="16" height="16" fill="white"/></clipPath></defs></Icon>
);
figma.connect(IconEye, "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13495", { props: { size: figma.enum("Size", { "20": "20", "24": "24", "32": "32", "40": "40", "48": "48" }) }, example: ({ size }) => <IconEye size={size} /> });