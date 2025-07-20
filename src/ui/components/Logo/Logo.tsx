import { AnchorOrButton, type AnchorOrButtonProps } from "utils";

export type LogoProps = AnchorOrButtonProps & { label?: string };
export function Logo({ label = "Company logo", ...props }: LogoProps) {
  return (
    <AnchorOrButton {...props} aria-label={label}>
      <svg
        width="172"
        height="247"
        viewBox="0 0 172 247"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M164 46.5C164 67.763 146.763 85 125.5 85L86 85L86 8.0001L125.5 8.0001C146.763 8.0001 164 25.2371 164 46.5V46.5Z"
          stroke="var(--logo-color)"
          strokeWidth="15.081"
        />
        <path
          d="M8 46.5C8 67.763 25.237 85 46.5 85L86 85L86 8.0001L46.5 8.0001C25.237 8.0001 8 25.2371 8 46.5V46.5Z"
          stroke="var(--logo-color)"
          strokeWidth="15.081"
        />
        <path
          d="M8 123.501C8 144.764 25.237 162.001 46.5 162.001H86L86 85.0011L46.5 85.0011C25.237 85.0011 8 102.238 8 123.501V123.501Z"
          stroke="var(--logo-color)"
          strokeWidth="15.081"
        />
        <path
          d="M8 200.5C8 221.763 25.4854 239 46.7484 239V239C68.2875 239 86 221.539 86 200L86 162H46.5C25.237 162 8 179.237 8 200.5V200.5Z"
          stroke="var(--logo-color)"
          strokeWidth="15.081"
        />
        <path
          d="M86 123.501C86 144.764 103.237 162.001 124.5 162.001H125.5C146.763 162.001 164 144.764 164 123.501V123.501C164 102.238 146.763 85.0011 125.5 85.0011H124.5C103.237 85.0011 86 102.238 86 123.501V123.501Z"
          stroke="var(--logo-color)"
          strokeWidth="15.081"
        />
      </svg>
    </AnchorOrButton>
  );
}
