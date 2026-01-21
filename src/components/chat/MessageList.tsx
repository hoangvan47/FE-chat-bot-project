import { useEffect, useRef } from 'react';
import { VStack, Box, Spinner, Center, Text } from '@chakra-ui/react';
import Message from './Message';
import { Message as MessageType } from '../../types';

interface MessageListProps {
  messages: MessageType[];
  isLoading?: boolean;
}

const MessageList = ({ messages, isLoading }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Box
      flex={1}
      overflowY="auto"
      p={6}
      bg="gray.50"
      css={{
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#CBD5E0',
          borderRadius: '3px',
        },
        '&::-webkit-scrollbar-thumb:hover': {
          background: '#A0AEC0',
        },
      }}
    >
      {messages.length === 0 && !isLoading && (
        <Center h="100%" flexDirection="column">
          <Text fontSize="lg" color="gray.500" fontWeight="bold">
            👋 Welcome to Template.net AI Chat
          </Text>
          <Text fontSize="sm" color="gray.400" mt={2}>
            Start a conversation by typing a message below
          </Text>
        </Center>
      )}

      <VStack gap={4} align="stretch">
        {messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}

        {isLoading && (
          <Center py={4}>
            <Spinner size="md" color="blue.500" />
            <Text ml={3} color="gray.600">
              AI is thinking...
            </Text>
          </Center>
        )}

        <div ref={messagesEndRef} />
      </VStack>
    </Box>
  );
};

export default MessageList;
