import { createContext } from "react";
import { AuthContextType } from "../types/auth";

/**
 * Authentication context
 */
export const AuthContext = createContext<AuthContextType | null>(null);
