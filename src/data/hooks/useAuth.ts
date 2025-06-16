import { useContext } from "react";
import { AuthContext } from "../../data/contexts/AuthContext";
import { AuthContextType } from "../../data/types/auth";

/**
 * Hook to access authentication context
 * @throws Error if used outside of AuthProvider
 */
export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
