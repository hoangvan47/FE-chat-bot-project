/**
 * Core Headers
 * Generate headers for GraphQL requests
 */

/**
 * Get request headers with authentication token
 * @returns Headers object for GraphQL requests
 */
export const getHeaders = (): Record<string, string> => {
  const token = localStorage.getItem('accessToken');

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  return headers;
};

/**
 * Get headers with custom token
 * @param customToken - Custom JWT token
 */
export const getHeadersWithToken = (customToken: string): Record<string, string> => {
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${customToken}`,
  };
};
