import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import { PricingContext } from "../contexts/PricingContext";
import { pricingService } from "../services/pricingService";
import { Cart, PricingInterval, PricingPlan } from "../types/pricing";

/**
 * Pricing provider with full state management
 */
export function PricingProvider({ children }: { children?: ReactNode }) {
  const [monthlyPlans, setMonthlyPlans] = useState<PricingPlan[]>([]);
  const [annualPlans, setAnnualPlans] = useState<PricingPlan[]>([]);
  const [currentInterval, setCurrentInterval] =
    useState<PricingInterval>("month");
  const [cart, setCart] = useState<Cart>({
    items: [],
    total: 0,
    currency: "$",
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Load pricing plans on mount
  useEffect(() => {
    async function loadPlans() {
      setIsLoading(true);
      setError(null);

      try {
        const { monthly, annual } = await pricingService.getPlans();
        setMonthlyPlans(monthly);
        setAnnualPlans(annual);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    }

    loadPlans();
  }, []);

  // Update cart total when items change
  useEffect(() => {
    const total = cart.items.reduce(
      (sum, item) => sum + item.plan.price * item.quantity,
      0,
    );
    setCart((prev) => ({ ...prev, total }));
  }, [cart.items]);

  const setInterval = useCallback((interval: PricingInterval) => {
    setCurrentInterval(interval);
    // Clear cart when switching intervals since plans are different
    setCart({ items: [], total: 0, currency: "$" });
  }, []);

  const addToCart = useCallback(
    (planId: string) => {
      const allPlans = [...monthlyPlans, ...annualPlans];
      const plan = allPlans.find((p) => p.id === planId);

      if (!plan) {
        setError(new Error(`Plan with id ${planId} not found`));
        return;
      }

      setCart((prev) => {
        const existingItem = prev.items.find((item) => item.plan.id === planId);

        if (existingItem) {
          // Increment quantity
          return {
            ...prev,
            items: prev.items.map((item) =>
              item.plan.id === planId
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          };
        } else {
          // Add new item
          return {
            ...prev,
            items: [...prev.items, { plan, quantity: 1 }],
          };
        }
      });
    },
    [monthlyPlans, annualPlans],
  );

  const removeFromCart = useCallback((planId: string) => {
    setCart((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.plan.id !== planId),
    }));
  }, []);

  const clearCart = useCallback(() => {
    setCart({ items: [], total: 0, currency: "$" });
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // Memoize the context value to prevent unnecessary re-renders
  const value = useMemo(
    () => ({
      monthlyPlans,
      annualPlans,
      currentInterval,
      cart,
      isLoading,
      error,
      setInterval,
      addToCart,
      removeFromCart,
      clearCart,
      clearError,
    }),
    [
      monthlyPlans,
      annualPlans,
      currentInterval,
      cart,
      isLoading,
      error,
      setInterval,
      addToCart,
      removeFromCart,
      clearCart,
      clearError,
    ],
  );

  return (
    <PricingContext.Provider value={value}>{children}</PricingContext.Provider>
  );
}
