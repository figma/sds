import { ReactNode, createContext, useState } from "react";

/**
 * A simple mock user
 */
type User = {
  /**
   * The full name of the user
   */
  name: string;
  /**
   * A url to a user avatar image
   */
  avatar?: string;
  /**
   * A username
   */
  username?: string;
};

/**
 * Stubbed out authentication context
 */
export const AuthenticationContext = createContext<{
  /**
   * The current user. unauthenticated session if null.
   */
  currentUser: User | null;
  /**
   * Method to log a user in
   */
  login: (userData: User) => void;
  /**
   * Method to log a user out
   */
  logout: () => void;
}>({
  currentUser: null,
  login: (_userData: User) => {},
  logout: () => {},
});

/**
 * Stubbed out authentication provider
 */
export function AuthenticationProvider({ children }: { children?: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  function login(userData: User) {
    setCurrentUser(userData);
  }

  function logout() {
    setCurrentUser(null);
  }

  return (
    <AuthenticationContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
