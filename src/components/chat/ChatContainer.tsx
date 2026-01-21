import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { useSendMessage } from '../../hooks/graphql/useChat';
import { Message } from '../../types';

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentThreadId, setCurrentThreadId] = useState<string | null>(null);

  const sendMessageMutation = useSendMessage();

  const handleSendMessage = async (content: string) => {
    // Optimistically add user message
    const tempUserMessage: Message = {
      id: Date.now().toString(),
      threadId: currentThreadId || '',
      content,
      sender: 'user',
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, tempUserMessage]);

    try {
      const result = await sendMessageMutation.mutateAsync({
        content,
        threadId: currentThreadId || undefined,
      });

      // Set thread ID if new
      if (result.threadId && !currentThreadId) {
        setCurrentThreadId(result.threadId);
      }

      // Add AI response
      if (result.aiMessage) {
        const aiMessage: Message = {
          id: Date.now().toString() + '_ai',
          threadId: result.threadId || currentThreadId || '',
          content: result.aiMessage,
          sender: 'assistant',
          createdAt: new Date().toISOString(),
        };
        setMessages((prev) => [...prev, aiMessage]);
      }
    } catch (error) {
      // Remove optimistic message on error
      setMessages((prev) => prev.filter((m) => m.id !== tempUserMessage.id));
    }
  };

  return (
    <Flex h="calc(100vh - 60px)" flexDirection="column">
      <MessageList messages={messages} isLoading={sendMessageMutation.isPending} />
      <ChatInput onSendMessage={handleSendMessage} isLoading={sendMessageMutation.isPending} />
    </Flex>
  );
};

export default ChatContainer;
