/**
 * Chat Hooks - React Query
 * Using GraphQL SDK from api-service
 */

import { useMutation } from '@tanstack/react-query';
import { graphqlSdk } from '../../api-service';
import type { SendMessageMutationVariables } from '../../api-service';
import toast from 'react-hot-toast';

/**
 * Send message hook
 */
export const useSendMessage = () => {
  return useMutation({
    mutationFn: async (variables: SendMessageMutationVariables) => {
      const result = await graphqlSdk.SendMessage(variables);

      if (!result.sendMessage.success) {
        throw new Error(result.sendMessage.message || 'Failed to send message');
      }

      return result.sendMessage;
    },
    onSuccess: () => {
      toast.success('Response received!');
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to send message');
    },
  });
};

/**
 * Get threads hook (with pagination)
 */
export const useGetThreads = (page = 1, limit = 10) => {
  return useMutation({
    mutationFn: async () => {
      const result = await graphqlSdk.GetThreads({ page, limit });

      if (!result.threads.success) {
        throw new Error('Failed to fetch threads');
      }

      return result.threads;
    },
    onError: (error: Error) => {
      toast.error(error.message || 'Failed to fetch threads');
    },
  });
};
