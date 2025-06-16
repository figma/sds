import { createContext } from "react";
import { PricingContextType } from "../types/pricing";

/**
 * Pricing context
 */
export const PricingContext = createContext<PricingContextType | null>(null);
