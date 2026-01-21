/**
 * Auth Hooks - React Query
 * Using GraphQL SDK from api-service
 */

import { useMutation } from '@tanstack/react-query';
import { useAuth } from '../../contexts/AuthContext';
import { graphqlSdk } from '../../api-service';
import type { LoginMutationVariables, RegisterMutationVariables } from '../../api-service';
import toast from 'react-hot-toast';

/**
 * Login hook
 */
export const useLogin = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: async (variables: LoginMutationVariables) => {
      const result = await graphqlSdk.Login(variables);

      if (!result.login.success) {
        throw new Error(result.login.message || 'Login failed');
      }

      return result.login;
    },
    onSuccess: (data) => {
      if (data.user && data.accessToken && data.refreshToken) {
        login(data.user, data.accessToken, data.refreshToken);
        toast.success('Login successful!');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Login failed');
    },
  });
};

/**
 * Register hook
 */
export const useRegister = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: async (variables: RegisterMutationVariables) => {
      const result = await graphqlSdk.Register(variables);

      if (!result.register.success) {
        throw new Error(result.register.message || 'Registration failed');
      }

      return result.register;
    },
    onSuccess: (data) => {
      if (data.user && data.accessToken && data.refreshToken) {
        login(data.user, data.accessToken, data.refreshToken);
        toast.success('Registration successful!');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Registration failed');
    },
  });
};

/**
 * Logout hook
 */
export const useLogout = () => {
  const { logout } = useAuth();

  return useMutation({
    mutationFn: async () => {
      await graphqlSdk.Logout();
    },
    onSuccess: () => {
      logout();
      toast.success('Logged out successfully');
    },
    onError: () => {
      logout(); // Logout anyway
      toast.error('Logout failed but session cleared');
    },
  });
};
