import { Icon, IconProps } from "components";
export const IconGrid = (props: IconProps) => (
  <Icon {...props}>
    <path
      d="M6.66667 2H2V6.66667H6.66667V2Z"
      stroke="var(--svg-stroke-color)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 2H9.33333V6.66667H14V2Z"
      stroke="var(--svg-stroke-color)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 9.33333H9.33333V14H14V9.33333Z"
      stroke="var(--svg-stroke-color)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66667 9.33333H2V14H6.66667V9.33333Z"
      stroke="var(--svg-stroke-color)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);
