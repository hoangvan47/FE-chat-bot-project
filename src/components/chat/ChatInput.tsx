import { useState, KeyboardEvent } from 'react';
import { Box, Textarea, Button, HStack, IconButton } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoSparkles } from 'react-icons/io5';
import toast from 'react-hot-toast';

interface ChatInputProps {
  onSendMessage: (content: string) => void;
  isLoading?: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState<string>('');

  const handleSubmit = () => {
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleUpload = () => {
    toast('📎 Upload feature coming soon!', {
      icon: '⚙️',
    });
  };

  return (
    <Box
      p={6}
      bg="white"
      borderTop="1px"
      borderColor="gray.200"
      position="sticky"
      bottom={0}
    >
      <HStack gap={3} align="flex-end">
        <IconButton
          aria-label="Upload file"
          variant="ghost"
          size="lg"
          onClick={handleUpload}
        >
          <AiOutlinePlus size={20} />
        </IconButton>

        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Ask template.net"
          resize="none"
          rows={2}
          flex={1}
          bg="gray.50"
          border="1px"
          borderColor="gray.300"
          borderRadius="md"
          _focus={{
            borderColor: 'blue.500',
            bg: 'white',
          }}
        />

        <Button
          colorScheme="blue"
          onClick={handleSubmit}
          isLoading={isLoading}
          loadingText="Generating..."
          size="lg"
          px={6}
        >
          <IoSparkles size={18} style={{ marginRight: '8px' }} />
          Generate Free
        </Button>
      </HStack>
    </Box>
  );
};

export default ChatInput;
