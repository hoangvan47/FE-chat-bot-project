import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  refreshToken?: Maybe<Scalars['String']['output']>;
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type ChatResponse = {
  __typename?: 'ChatResponse';
  aiMessage?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  threadId?: Maybe<Scalars['String']['output']>;
  usage?: Maybe<Usage>;
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Message = {
  __typename?: 'Message';
  content: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  sender: Scalars['String']['output'];
  threadId: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteThread: DeleteResponse;
  login: AuthResponse;
  logout: Response;
  refreshToken: AuthResponse;
  register: AuthResponse;
  sendMessage: ChatResponse;
};


export type MutationDeleteThreadArgs = {
  threadId: Scalars['ID']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRegisterArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationSendMessageArgs = {
  content: Scalars['String']['input'];
  threadId?: InputMaybe<Scalars['ID']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  page: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  me: User;
  thread: ThreadResponse;
  threads: ThreadsResponse;
};


export type QueryThreadArgs = {
  threadId: Scalars['ID']['input'];
};


export type QueryThreadsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
};

export type Response = {
  __typename?: 'Response';
  message: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Thread = {
  __typename?: 'Thread';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  latestMessage?: Maybe<Scalars['String']['output']>;
  messages?: Maybe<Array<Message>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  userId?: Maybe<Scalars['String']['output']>;
};

export type ThreadResponse = {
  __typename?: 'ThreadResponse';
  success: Scalars['Boolean']['output'];
  thread?: Maybe<Thread>;
};

export type ThreadsResponse = {
  __typename?: 'ThreadsResponse';
  pageInfo: PageInfo;
  success: Scalars['Boolean']['output'];
  threads: Array<Thread>;
};

export type Usage = {
  __typename?: 'Usage';
  completionTokens?: Maybe<Scalars['Int']['output']>;
  promptTokens?: Maybe<Scalars['Int']['output']>;
  totalTokens?: Maybe<Scalars['Int']['output']>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  updatedAt: Scalars['String']['output'];
  username: Scalars['String']['output'];
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, email: string, username: string, createdAt: string, updatedAt: string } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', success: boolean, message: string, accessToken?: string | null, refreshToken?: string | null, user?: { __typename?: 'User', id: string, email: string, username: string, createdAt: string, updatedAt: string } | null } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: { __typename?: 'Response', success: boolean, message: string } };

export type RegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', success: boolean, message: string, accessToken?: string | null, refreshToken?: string | null, user?: { __typename?: 'User', id: string, email: string, username: string, createdAt: string, updatedAt: string } | null } };

export type SendMessageMutationVariables = Exact<{
  content: Scalars['String']['input'];
  threadId?: InputMaybe<Scalars['ID']['input']>;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: { __typename?: 'ChatResponse', success: boolean, message: string, threadId?: string | null, aiMessage?: string | null, usage?: { __typename?: 'Usage', promptTokens?: number | null, completionTokens?: number | null, totalTokens?: number | null } | null } };

export type DeleteThreadMutationVariables = Exact<{
  threadId: Scalars['ID']['input'];
}>;


export type DeleteThreadMutation = { __typename?: 'Mutation', deleteThread: { __typename?: 'DeleteResponse', success: boolean, message: string } };

export type GetThreadQueryVariables = Exact<{
  threadId: Scalars['ID']['input'];
}>;


export type GetThreadQuery = { __typename?: 'Query', thread: { __typename?: 'ThreadResponse', success: boolean, thread?: { __typename?: 'Thread', id: string, userId?: string | null, title?: string | null, latestMessage?: string | null, createdAt: string, updatedAt: string, messages?: Array<{ __typename?: 'Message', id: string, threadId: string, content: string, sender: string, createdAt: string }> | null } | null } };

export type GetThreadsQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;


export type GetThreadsQuery = { __typename?: 'Query', threads: { __typename?: 'ThreadsResponse', success: boolean, threads: Array<{ __typename?: 'Thread', id: string, title?: string | null, latestMessage?: string | null, createdAt: string, updatedAt: string }>, pageInfo: { __typename?: 'PageInfo', total: number, page: number, limit: number, totalPages: number, hasNextPage: boolean, hasPreviousPage: boolean } } };


export const MeDocument = gql`
    query Me {
  me {
    id
    email
    username
    createdAt
    updatedAt
  }
}
    `;
export const LoginDocument = gql`
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
    `;
export const LogoutDocument = gql`
    mutation Logout {
  logout {
    success
    message
  }
}
    `;
export const RegisterDocument = gql`
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
    `;
export const SendMessageDocument = gql`
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
    `;
export const DeleteThreadDocument = gql`
    mutation DeleteThread($threadId: ID!) {
  deleteThread(threadId: $threadId) {
    success
    message
  }
}
    `;
export const GetThreadDocument = gql`
    query GetThread($threadId: ID!) {
  thread(threadId: $threadId) {
    success
    thread {
      id
      userId
      title
      latestMessage
      createdAt
      updatedAt
      messages {
        id
        threadId
        content
        sender
        createdAt
      }
    }
  }
}
    `;
export const GetThreadsDocument = gql`
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
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Me(variables?: MeQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<MeQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<MeQuery>({ document: MeDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Me', 'query', variables);
    },
    Login(variables: LoginMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LoginMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LoginMutation>({ document: LoginDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Login', 'mutation', variables);
    },
    Logout(variables?: LogoutMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<LogoutMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<LogoutMutation>({ document: LogoutDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Logout', 'mutation', variables);
    },
    Register(variables: RegisterMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<RegisterMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RegisterMutation>({ document: RegisterDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'Register', 'mutation', variables);
    },
    SendMessage(variables: SendMessageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<SendMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<SendMessageMutation>({ document: SendMessageDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'SendMessage', 'mutation', variables);
    },
    DeleteThread(variables: DeleteThreadMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<DeleteThreadMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteThreadMutation>({ document: DeleteThreadDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'DeleteThread', 'mutation', variables);
    },
    GetThread(variables: GetThreadQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetThreadQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetThreadQuery>({ document: GetThreadDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetThread', 'query', variables);
    },
    GetThreads(variables?: GetThreadsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<GetThreadsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetThreadsQuery>({ document: GetThreadsDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'GetThreads', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;