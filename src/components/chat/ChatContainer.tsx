import { useState, useMemo } from 'react';
import { Flex } from '@chakra-ui/react';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import { useSendMessage } from '../../hooks/graphql/useChat';
import { Message } from '../../types';

const ChatContainer = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentThreadId, setCurrentThreadId] = useState<string | null>(null);

  const sendMessageMutation = useSendMessage();

  // Get previous user messages for suggestions
  const previousUserMessages = useMemo(
    () => messages.filter((m) => m.sender === 'user').map((m) => m.content),
    [messages]
  );

  const handleSendMessage = async (content: string, imageUrl?: string | null) => {
    // Optimistically add user message
    const tempUserMessage: Message = {
      id: Date.now().toString(),
      threadId: currentThreadId || '',
      content,
      sender: 'user',
      imageUrl: imageUrl || null,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, tempUserMessage]);

    try {
      const result = await sendMessageMutation.mutateAsync({
        content,
        threadId: currentThreadId || undefined,
        imageUrl: imageUrl || undefined,
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
          imageUrl: null,
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
      <ChatInput
        onSendMessage={handleSendMessage}
        isLoading={sendMessageMutation.isPending}
        previousMessages={previousUserMessages}
      />
    </Flex>
  );
};

export default ChatContainer;
