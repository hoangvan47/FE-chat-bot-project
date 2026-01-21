/**
 * Chat Module
 * Export chat services and types
 */

import { graphqlSdk } from '../../index';

/**
 * Chat Service
 * Uses auto-generated SDK from codegen
 */
export const chatService = {
  /**
   * Send message and get AI response
   */
  async sendMessage(content: string, threadId?: string) {
    return await graphqlSdk.SendMessage({ content, threadId });
  },

  /**
   * Get all threads with pagination
   */
  async getThreads(page?: number, limit?: number) {
    return await graphqlSdk.GetThreads({ page, limit });
  },

  /**
   * Get specific thread by ID
   */
  async getThread(threadId: string) {
    return await graphqlSdk.GetThread({ threadId });
  },

  /**
   * Delete thread
   */
  async deleteThread(threadId: string) {
    return await graphqlSdk.DeleteThread({ threadId });
  },
};

// Re-export types (after codegen runs)
export type {
  SendMessageMutation,
  GetThreadsQuery,
  GetThreadQuery,
  Thread,
  Message,
  PageInfo,
} from '../../generated/graph-ql-client.generated';
