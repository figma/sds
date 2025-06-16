import { PricingPlan } from "../types/pricing";

/**
 * Mock pricing service
 */
export const pricingService = {
  /**
   * Get pricing plans
   */
  async getPlans(): Promise<{ monthly: PricingPlan[]; annual: PricingPlan[] }> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    const monthlyPlans: PricingPlan[] = [
      {
        id: "beginner-monthly",
        name: "Beginner",
        description: "Perfect for getting started",
        price: 5,
        currency: "$",
        interval: "month",
        features: ["Promises", "Intentions", "240 credits"],
        sku: "1-beginner",
      },
      {
        id: "advanced-monthly",
        name: "Advanced",
        description: "For growing businesses",
        price: 10,
        currency: "$",
        interval: "month",
        features: ["Kept promises", "Better intentions", "480 credits"],
        popular: true,
        sku: "2-advanced",
      },
      {
        id: "business-monthly",
        name: "Business",
        description: "Enterprise-grade features",
        price: 25,
        currency: "$",
        interval: "month",
        features: ["Kept promises", "Best intentions", "Infinite credits"],
        sku: "3-business",
      },
    ];

    const annualPlans: PricingPlan[] = [
      {
        id: "beginner-annual",
        name: "Beginner",
        description: "Perfect for getting started",
        price: 50,
        currency: "$",
        interval: "year",
        features: ["Promises", "Intentions", "240 credits"],
        sku: "1-beginner",
      },
      {
        id: "advanced-annual",
        name: "Advanced",
        description: "For growing businesses",
        price: 100,
        currency: "$",
        interval: "year",
        features: ["Kept promises", "Better intentions", "480 credits"],
        popular: true,
        sku: "2-advanced",
      },
      {
        id: "business-annual",
        name: "Business",
        description: "Enterprise-grade features",
        price: 250,
        currency: "$",
        interval: "year",
        features: ["Kept promises", "Best intentions", "Infinite credits"],
        sku: "3-business",
      },
    ];

    return { monthly: monthlyPlans, annual: annualPlans };
  },

  /**
   * Calculate cart total
   */
  calculateTotal(plans: PricingPlan[]): number {
    return plans.reduce((total, plan) => total + plan.price, 0);
  },
};
