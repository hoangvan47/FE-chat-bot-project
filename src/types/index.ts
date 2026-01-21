

export interface User {
  id: string;
  email: string;
  username: string;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  threadId: string;
  content: string;
  sender: 'user' | 'assistant';
  imageUrl?: string | null;
  createdAt: string;
}

export interface Thread {
  id: string;
  userId?: string | null;
  title?: string | null;
  latestMessage?: string | null;
  createdAt: string;
  updatedAt: string;
  messages?: Message[];
}

export interface PageInfo {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User | null;
  accessToken?: string | null;
  refreshToken?: string | null;
}

export interface ChatResponse {
  success: boolean;
  message: string;
  threadId?: string | null;
  aiMessage?: string | null;
  usage?: {
    promptTokens: number;
    completionTokens: number;
    totalTokens: number;
  } | null;
}

export interface ThreadsResponse {
  success: boolean;
  threads: Thread[];
  pageInfo: PageInfo;
}

export interface ThreadResponse {
  success: boolean;
  thread: Thread | null;
}
