/**
 * A simple mock user
 */
export type User = {
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
  /**
   * User email
   */
  email?: string;
  /**
   * User ID
   */
  id?: string;
};

/**
 * Login credentials
 */
export type Credentials = {
  email: string;
  password: string;
};

/**
 * Authentication context type
 */
export interface AuthContextType {
  /**
   * The current user. null if unauthenticated.
   */
  user: User | null;
  /**
   * Whether an authentication operation is in progress
   */
  isLoading: boolean;
  /**
   * Any authentication error
   */
  error: Error | null;
  /**
   * Method to log a user in
   */
  login: (credentials: Credentials) => Promise<void>;
  /**
   * Method to log a user out
   */
  logout: () => void;
  /**
   * Clear any authentication errors
   */
  clearError: () => void;
}
