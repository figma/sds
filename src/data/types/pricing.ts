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

export type CartItem = {
  plan: PricingPlan;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  total: number;
  currency: string;
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
   * Current pricing interval
   */
  currentInterval: PricingInterval;
  /**
   * Shopping cart
   */
  cart: Cart;
  /**
   * Whether pricing data is loading
   */
  isLoading: boolean;
  /**
   * Any pricing errors
   */
  error: Error | null;
  /**
   * Switch between monthly and annual pricing
   */
  setInterval: (interval: PricingInterval) => void;
  /**
   * Add a plan to cart
   */
  addToCart: (planId: string) => void;
  /**
   * Remove a plan from cart
   */
  removeFromCart: (planId: string) => void;
  /**
   * Clear the cart
   */
  clearCart: () => void;
  /**
   * Clear any errors
   */
  clearError: () => void;
}
