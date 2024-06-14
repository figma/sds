import { useEffect, useState } from "react";

type MediaQueryKey =
  | "isMobile"
  | "isTablet"
  | "isDesktop"
  | "isTabletUp"
  | "isTabletDown";

const breakpoints = {
  mobile: 375,
  tablet: 768,
  desktop: 1200,
};

const mediaQueries: { [K in MediaQueryKey]: string } = {
  isMobile: `(max-width: ${breakpoints.tablet - 1}px)`,
  isTablet: `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
  isDesktop: `(min-width: ${breakpoints.desktop}px)`,
  isTabletUp: `(min-width: ${breakpoints.tablet}px)`,
  isTabletDown: `(max-width: ${breakpoints.desktop - 1}px)`,
};

const mediaQueryKeys: MediaQueryKey[] = [
  "isMobile",
  "isTablet",
  "isDesktop",
  "isTabletUp",
  "isTabletDown",
];

type MediaQueryMatches = { [K in MediaQueryKey]: boolean };

export const useMediaQuery = () => {
  const [matches, setMatches] = useState<MediaQueryMatches>({
    isDesktop: false,
    isTablet: false,
    isTabletDown: true,
    isTabletUp: false,
    isMobile: true,
  });

  useEffect(() => {
    const matchesLoop = () => {
      let changes = false;
      const clonedMatches = { ...matches };
      for (let key of mediaQueryKeys) {
        clonedMatches[key];
        const media = window.matchMedia(mediaQueries[key]);
        if (media.matches !== clonedMatches[key]) {
          clonedMatches[key] = media.matches;
          changes = true;
        }
      }
      if (changes) {
        setMatches(clonedMatches);
      }
    };
    matchesLoop();
    const listener = () => matchesLoop();
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches]);

  return matches;
};
