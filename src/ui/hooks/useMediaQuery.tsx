import { useMemo, useSyncExternalStore } from "react";

const breakpoints = {
  mobile: 375,
  tablet: 600,
  desktop: 1024,
};

export function useCustomMediaQuery(mediaQuery: string): boolean {
  const [subscribe, getSnapshot] = useMemo(() => {
    const mediaQueryList = globalThis.matchMedia(mediaQuery);

    function subscribe(onStoreChange: () => void) {
      mediaQueryList.addEventListener("change", onStoreChange);
      return () => mediaQueryList.removeEventListener("change", onStoreChange);
    }

    const getSnapshot = () => mediaQueryList.matches;

    return [subscribe, getSnapshot];
  }, [mediaQuery]);

  return useSyncExternalStore(subscribe, getSnapshot);
}

export const useMediaQuery = () => {
  const isMobile = useCustomMediaQuery(
    `(max-width: ${breakpoints.tablet - 1}px)`,
  );
  const isTablet = useCustomMediaQuery(
    `(min-width: ${breakpoints.tablet}px) and (max-width: ${breakpoints.desktop - 1}px)`,
  );
  const isDesktop = useCustomMediaQuery(
    `(min-width: ${breakpoints.desktop}px)`,
  );
  const isTabletUp = useCustomMediaQuery(
    `(min-width: ${breakpoints.tablet}px)`,
  );
  const isTabletDown = useCustomMediaQuery(
    `(max-width: ${breakpoints.desktop - 1}px)`,
  );

  const matches = useMemo(() => {
    return {
      isMobile,
      isTablet,
      isDesktop,
      isTabletUp,
      isTabletDown,
    };
  }, [isMobile, isTablet, isDesktop, isTabletUp, isTabletDown]);

  return matches;
};
