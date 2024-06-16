import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconRepeat = (props: IconProps) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_68_15953)">
      <path
        d="M11.899 0.101063C11.5866 -0.211357 11.0801 -0.211357 10.7676 0.101063C10.4552 0.413482 10.4552 0.920014 10.7676 1.23243L11.899 0.101063ZM14 3.33341L14.5657 3.8991C14.8781 3.58668 14.8781 3.08015 14.5657 2.76773L14 3.33341ZM10.7676 5.4344C10.4552 5.74682 10.4552 6.25335 10.7676 6.56577C11.0801 6.87819 11.5866 6.87819 11.899 6.56577L10.7676 5.4344ZM1.2 7.33341C1.2 7.77524 1.55817 8.13341 2 8.13341C2.44183 8.13341 2.8 7.77524 2.8 7.33341H1.2ZM4.66667 3.33341V4.13341V3.33341ZM4.10098 15.8991C4.4134 16.2115 4.91993 16.2115 5.23235 15.8991C5.54477 15.5867 5.54477 15.0801 5.23235 14.7677L4.10098 15.8991ZM2 12.6667L1.43431 12.1011C1.28429 12.2511 1.2 12.4546 1.2 12.6667C1.2 12.8789 1.28429 13.0824 1.43431 13.2324L2 12.6667ZM5.23235 10.5658C5.54477 10.2533 5.54477 9.74681 5.23235 9.4344C4.91993 9.12198 4.4134 9.12198 4.10098 9.4344L5.23235 10.5658ZM14.8 8.66675C14.8 8.22492 14.4418 7.86675 14 7.86675C13.5582 7.86675 13.2 8.22492 13.2 8.66675H14.8ZM11.3333 12.6667V11.8667V12.6667ZM10.7676 1.23243L13.4343 3.8991L14.5657 2.76773L11.899 0.101063L10.7676 1.23243ZM13.4343 2.76773L10.7676 5.4344L11.899 6.56577L14.5657 3.8991L13.4343 2.76773ZM2.8 7.33341V6.00008H1.2V7.33341H2.8ZM2.8 6.00008C2.8 5.50501 2.99667 5.03022 3.34673 4.68015L2.21536 3.54878C1.56524 4.1989 1.2 5.08066 1.2 6.00008H2.8ZM3.34673 4.68015C3.6968 4.33008 4.1716 4.13341 4.66667 4.13341V2.53341C3.74725 2.53341 2.86549 2.89865 2.21536 3.54878L3.34673 4.68015ZM4.66667 4.13341L14 4.13341V2.53341L4.66667 2.53341L4.66667 4.13341ZM5.23235 14.7677L2.56569 12.1011L1.43431 13.2324L4.10098 15.8991L5.23235 14.7677ZM2.56569 13.2324L5.23235 10.5658L4.10098 9.4344L1.43431 12.1011L2.56569 13.2324ZM13.2 8.66675V10.0001H14.8V8.66675H13.2ZM13.2 10.0001C13.2 10.4952 13.0033 10.9699 12.6533 11.32L13.7846 12.4514C14.4348 11.8013 14.8 10.9195 14.8 10.0001H13.2ZM12.6533 11.32C12.3032 11.6701 11.8284 11.8667 11.3333 11.8667V13.4667C12.2528 13.4667 13.1345 13.1015 13.7846 12.4514L12.6533 11.32ZM11.3333 11.8667H2L2 13.4667L11.3333 13.4667V11.8667Z"
        fill="var(--svg-fill-color)"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_15953">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
figma.connect(
  IconRepeat,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13596",
  {
    props: {
      size: figma.enum("Size", {
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
      }),
    },
    example: ({ size }) => <IconRepeat size={size} />,
  },
);
