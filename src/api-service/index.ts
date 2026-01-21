/**
 * API Service Layer
 * Using Apollo Client instead of graphql-request for compatibility
 */

import { apolloClient } from '../lib/apollo-client';
import { gql } from '@apollo/client';

/**
 * GraphQL SDK using Apollo Client
 * Type-safe operations
 */
export const graphqlSdk = {
  /**
   * Login mutation
   */
  async Login(variables: { email: string; password: string }) {
    const { data } = await apolloClient.mutate({
      mutation: gql`
        mutation Login($email: String!, $password: String!) {
          login(email: $email, password: $password) {
            success
            message
            user {
              id
              email
              username
              createdAt
              updatedAt
            }
            accessToken
            refreshToken
          }
        }
      `,
      variables,
    });
    return data;
  },

  /**
   * Register mutation
   */
  async Register(variables: { email: string; username: string; password: string }) {
    const { data } = await apolloClient.mutate({
      mutation: gql`
        mutation Register($email: String!, $username: String!, $password: String!) {
          register(email: $email, username: $username, password: $password) {
            success
            message
            user {
              id
              email
              username
              createdAt
              updatedAt
            }
            accessToken
            refreshToken
          }
        }
      `,
      variables,
    });
    return data;
  },

  /**
   * Logout mutation
   */
  async Logout() {
    const { data } = await apolloClient.mutate({
      mutation: gql`
        mutation Logout {
          logout {
            success
            message
          }
        }
      `,
    });
    return data;
  },

  /**
   * Send message mutation
   */
  async SendMessage(variables: { content: string; threadId?: string }) {
    const { data } = await apolloClient.mutate({
      mutation: gql`
        mutation SendMessage($content: String!, $threadId: ID) {
          sendMessage(content: $content, threadId: $threadId) {
            success
            message
            threadId
            aiMessage
            usage {
              promptTokens
              completionTokens
              totalTokens
            }
          }
        }
      `,
      variables,
    });
    return data;
  },

  /**
   * Get threads query (with pagination)
   */
  async GetThreads(variables?: { page?: number; limit?: number }) {
    const { data } = await apolloClient.query({
      query: gql`
        query GetThreads($page: Int, $limit: Int) {
          threads(page: $page, limit: $limit) {
            success
            threads {
              id
              title
              latestMessage
              createdAt
              updatedAt
            }
            pageInfo {
              total
              page
              limit
              totalPages
              hasNextPage
              hasPreviousPage
            }
          }
        }
      `,
      variables,
      fetchPolicy: 'network-only',
    });
    return data;
  },

  /**
   * Get thread query
   */
  async GetThread(variables: { threadId: string }) {
    const { data } = await apolloClient.query({
      query: gql`
        query GetThread($threadId: ID!) {
          thread(threadId: $threadId) {
            success
            thread {
              id
              title
              latestMessage
              messages {
                id
                content
                sender
                createdAt
              }
            }
          }
        }
      `,
      variables,
      fetchPolicy: 'network-only',
    });
    return data;
  },

  /**
   * Delete thread mutation
   */
  async DeleteThread(variables: { threadId: string }) {
    const { data } = await apolloClient.mutate({
      mutation: gql`
        mutation DeleteThread($threadId: ID!) {
          deleteThread(threadId: $threadId) {
            success
            message
          }
        }
      `,
      variables,
    });
    return data;
  },
};

// Re-export types from generated file
export * from './generated/graph-ql-client.generated';
