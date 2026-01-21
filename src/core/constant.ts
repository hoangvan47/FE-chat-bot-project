/**
 * Core Constants
 * Application-wide constants and error messages
 */

/**
 * Error Constants
 */
export const ERROR_500 = new Error('Network request failed. Please check your connection and try again.');

export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network request failed',
  UNAUTHORIZED: 'Unauthorized. Please login again.',
  FORBIDDEN: 'You do not have permission to perform this action',
  NOT_FOUND: 'Resource not found',
  VALIDATION_ERROR: 'Validation failed',
  INTERNAL_ERROR: 'An internal error occurred',
  TIMEOUT: 'Request timeout',
} as const;

/**
 * Toast Messages
 */
export const TOAST_MESSAGES = {
  // Auth
  LOGIN_SUCCESS: 'Login successful!',
  LOGOUT_SUCCESS: 'Logged out successfully',
  REGISTER_SUCCESS: 'Registration successful!',
  
  // Chat
  MESSAGE_SENT: 'Response received!',
  MESSAGE_FAILED: 'Failed to send message',
  
  // Features
  FEATURE_UNDER_DEV: '🚧 Feature under development',
  UPLOAD_COMING_SOON: '📎 Upload feature coming soon!',
  UPGRADE_COMING_SOON: '🚀 Upgrade feature coming soon!',
  
  // Generic
  SOMETHING_WENT_WRONG: 'Something went wrong. Please try again.',
} as const;

/**
 * API Operation Types
 */
export const OPERATION_TYPE = {
  QUERY: 'query',
  MUTATION: 'mutation',
  SUBSCRIPTION: 'subscription',
} as const;

/**
 * Local Storage Keys
 */
export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  USER: 'user',
} as const;

/**
 * Routes
 */
export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  CHAT: '/chat',
  HOME: '/',
} as const;
