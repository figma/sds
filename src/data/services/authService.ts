import { Credentials, User } from "../types/auth";

/**
 * Mock authentication service
 */
export const authService = {
  /**
   * Mock login function
   */
  async login(credentials: Credentials): Promise<User> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock validation
    if (credentials.email === "error@example.com") {
      throw new Error("Invalid credentials");
    }

    // Return mock user
    return {
      id: "1",
      name: "John Doe",
      email: credentials.email,
      username: credentials.email.split("@")[0],
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${credentials.email}`,
    };
  },

  /**
   * Mock logout function
   */
  async logout(): Promise<void> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Clear any stored tokens, etc.
    localStorage.removeItem("auth-token");
  },

  /**
   * Check if user is authenticated (mock)
   */
  isAuthenticated(): boolean {
    return localStorage.getItem("auth-token") !== null;
  },

  /**
   * Get current user from storage (mock)
   */
  getCurrentUser(): User | null {
    const userData = localStorage.getItem("current-user");
    return userData ? JSON.parse(userData) : null;
  },

  /**
   * Store user data (mock)
   */
  storeUser(user: User): void {
    localStorage.setItem("current-user", JSON.stringify(user));
    localStorage.setItem("auth-token", "mock-token");
  },
};
