import figma from "@figma/code-connect";
import { Icon, IconProps } from "primitives";
export const IconRotateCcw = (props: IconProps) => (
  <Icon {...props}>
    <g clipPath="url(#clip0_68_15957)">
      <path
        d="M1.46675 2.66655C1.46675 2.22472 1.10858 1.86655 0.666748 1.86655C0.22492 1.86655 -0.133252 2.22472 -0.133252 2.66655H1.46675ZM0.666748 6.66655H-0.133252C-0.133252 7.10838 0.22492 7.46655 0.666748 7.46655L0.666748 6.66655ZM4.66675 7.46655C5.10858 7.46655 5.46675 7.10838 5.46675 6.66655C5.46675 6.22472 5.10858 5.86655 4.66675 5.86655V7.46655ZM3.09462 9.73405C2.9478 9.31733 2.49097 9.09853 2.07424 9.24534C1.65752 9.39216 1.43872 9.849 1.58554 10.2657L3.09462 9.73405ZM3.76008 3.75988L4.3079 4.34289C4.31378 4.33736 4.31958 4.33175 4.32529 4.32605L3.76008 3.75988ZM-0.133252 2.66655V6.66655H1.46675V2.66655H-0.133252ZM0.666748 7.46655H4.66675V5.86655H0.666748V7.46655ZM1.58554 10.2657C2.07544 11.6562 3.00397 12.8499 4.23124 13.6668L5.1178 12.3348C4.1793 11.7102 3.46925 10.7974 3.09462 9.73405L1.58554 10.2657ZM4.23124 13.6668C5.4585 14.4837 6.91801 14.8796 8.38986 14.7949L8.29792 13.1975C7.17239 13.2623 6.0563 12.9595 5.1178 12.3348L4.23124 13.6668ZM8.38986 14.7949C9.86171 14.7102 11.2662 14.1494 12.3916 13.1971L11.3581 11.9757C10.4974 12.7039 9.42345 13.1327 8.29792 13.1975L8.38986 14.7949ZM12.3916 13.1971C13.517 12.2448 14.3025 10.9525 14.6296 9.51497L13.0695 9.15995C12.8193 10.2592 12.2187 11.2474 11.3581 11.9757L12.3916 13.1971ZM14.6296 9.51497C14.9567 8.07744 14.8078 6.57253 14.2053 5.227L12.745 5.88091C13.2058 6.90985 13.3197 8.06066 13.0695 9.15995L14.6296 9.51497ZM14.2053 5.227C13.6028 3.88146 12.5793 2.76819 11.289 2.05492L10.5149 3.4552C11.5016 4.00064 12.2843 4.85197 12.745 5.88091L14.2053 5.227ZM11.289 2.05492C9.99876 1.34165 8.51165 1.06703 7.05174 1.27243L7.27466 2.85683C8.39105 2.69976 9.52826 2.90976 10.5149 3.4552L11.289 2.05492ZM7.05174 1.27243C5.59184 1.47783 4.23823 2.15213 3.19487 3.19372L4.32529 4.32605C5.12315 3.52954 6.15826 3.0139 7.27466 2.85683L7.05174 1.27243ZM3.21226 3.17688L0.118927 6.08355L1.21457 7.24955L4.3079 4.34289L3.21226 3.17688Z"
        fill="var(--svg-fill-color)"
      />
    </g>
    <defs>
      <clipPath id="clip0_68_15957">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </Icon>
);
figma.connect(
  IconRotateCcw,
  "https://figma.com/design/J0KLPKXiONDRssXD1AX9Oi?node-id=4049:13597",
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
    example: ({ size }) => <IconRotateCcw size={size} />,
  },
);
