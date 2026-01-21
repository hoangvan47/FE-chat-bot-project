/**
 * Core Configuration
 * Centralized app configuration
 */

export const BACKEND_API = {
  api: import.meta.env.VITE_GRAPHQL_URL || 'http://localhost:3000/graphql',
  ws: import.meta.env.VITE_WS_URL || 'ws://localhost:3000/graphql', // For subscriptions
};

export const APP_CONFIG = {
  // App settings
  APP_NAME: 'Template.NET Chat Bot',
  APP_VERSION: '1.0.0',
  
  // API settings
  API_TIMEOUT: 30000, // 30 seconds
  REQUEST_RETRY_COUNT: 3,
  
  // Cache settings
  CACHE_TIME: 5 * 60 * 1000, // 5 minutes
  STALE_TIME: 1 * 60 * 1000, // 1 minute
  
  // Pagination
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
} as const;
