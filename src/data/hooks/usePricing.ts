import { useContext } from "react";
import { PricingContext } from "../../data/contexts/PricingContext";
import { PricingContextType } from "../../data/types/pricing";

/**
 * Hook to access pricing context
 * @throws Error if used outside of PricingProvider
 */
export function usePricing(): PricingContextType {
  const context = useContext(PricingContext);
  if (!context) {
    throw new Error("usePricing must be used within a PricingProvider");
  }
  return context;
}
