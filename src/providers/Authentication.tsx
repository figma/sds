import { ReactNode, createContext, useState } from "react";

type User = {
  name: string;
  avatar?: string;
  username?: string;
};

export const AuthenticationContext = createContext<{
  currentUser: User | null;
  login: (userData: User) => void;
  logout: () => void;
}>({
  currentUser: null,
  login: (_) => {},
  logout: () => {},
});

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
