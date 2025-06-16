import { createContext } from "react";
import { ProductsContextType } from "../types/products";

/**
 * Products context
 */
export const ProductsContext = createContext<ProductsContextType | null>(null);
