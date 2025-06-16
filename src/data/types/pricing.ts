/**
 * Pricing plan types
 */
export type PricingInterval = "month" | "year";

export type PricingPlan = {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  interval: PricingInterval;
  features: string[];
  popular?: boolean;
  sku: string;
};

/**
 * Pricing context type
 */
export interface PricingContextType {
  /**
   * Available monthly plans
   */
  monthlyPlans: PricingPlan[];
  /**
   * Available annual plans
   */
  annualPlans: PricingPlan[];
  /**
   * Current plan
   */
  currentPlan?: PricingPlan;
  /**
   * Whether pricing data is loading
   */
  isLoading: boolean;
  /**
   * Set the current plan
   */
  setCurrentPlan: (plan: PricingPlan) => void;
}
