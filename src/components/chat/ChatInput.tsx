import { useState, KeyboardEvent } from 'react';
import { 
  Box, 
  Textarea, 
  Button, 
  HStack, 
  IconButton, 
  Image, 
  Tag, 
  TagLabel,
  TagCloseButton,
  VStack,
  Text,
} from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoSparkles } from 'react-icons/io5';
import toast from 'react-hot-toast';
import { useCloudinaryUpload } from '../../hooks/useCloudinaryUpload';
import { useInputSuggestions } from '../../hooks/useInputSuggestions';

interface ChatInputProps {
  onSendMessage: (content: string, imageUrl?: string | null) => void;
  isLoading?: boolean;
  previousMessages?: string[];
}

const ChatInput = ({ onSendMessage, isLoading, previousMessages = [] }: ChatInputProps) => {
  const [message, setMessage] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  // Cloudinary upload hook
  const { openUploadWidget } = useCloudinaryUpload({
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || '',
    uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET || '',
    folder: 'chat-bot',
    onSuccess: (result) => {
      setImageUrl(result.url);
      toast.success('📷 Image uploaded successfully!');
    },
    onError: (error) => {
      toast.error('❌ Upload failed: ' + error.message);
    },
  });

  // Input suggestions hook
  const { suggestions } = useInputSuggestions({
    previousMessages,
    maxSuggestions: 5,
    minLength: 2,
  });

  const handleSubmit = () => {
    if (message.trim() || imageUrl) {
      onSendMessage(message.trim(), imageUrl);
      setMessage('');
      setImageUrl(null);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleUpload = () => {
    if (!import.meta.env.VITE_CLOUDINARY_CLOUD_NAME) {
      toast.error('Cloudinary not configured. Check .env.local');
      return;
    }
    openUploadWidget();
  };

  // Filter suggestions based on current input
  const filteredSuggestions = message.length >= 2
    ? suggestions.filter(s => s.toLowerCase().includes(message.toLowerCase()))
    : [];

  return (
    <Box
      p={6}
      bg="white"
      borderTop="1px"
      borderColor="gray.200"
      position="sticky"
      bottom={0}
    >
      <VStack gap={2} align="stretch">
        {/* Image Preview */}
        {imageUrl && (
          <HStack bg="blue.50" p={2} borderRadius="md">
            <Image
              src={imageUrl}
              alt="Uploaded image preview"
              boxSize="50px"
              borderRadius="md"
              objectFit="cover"
            />
            <Tag size="sm" colorScheme="blue">
              <TagLabel>Image ready to send</TagLabel>
              <TagCloseButton onClick={() => setImageUrl(null)} />
            </Tag>
          </HStack>
        )}

        {/* Input Area */}
        <HStack gap={3} align="flex-end">
          <IconButton
            aria-label="Upload image"
            variant="ghost"
            size="lg"
            onClick={handleUpload}
            icon={<AiOutlinePlus size={20} />}
            colorScheme="gray"
          />

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
            leftIcon={<IoSparkles size={18} />}
          >
            Generate Free
          </Button>
        </HStack>

        {/* Input Suggestions */}
        {filteredSuggestions.length > 0 && (
          <Box>
            <Text fontSize="xs" color="gray.500" mb={1}>
              💡 Suggestions:
            </Text>
            <HStack gap={2} flexWrap="wrap">
              {filteredSuggestions.map((suggestion, index) => (
                <Tag
                  key={index}
                  size="sm"
                  variant="subtle"
                  colorScheme="blue"
                  cursor="pointer"
                  _hover={{ bg: 'blue.100' }}
                  onClick={() => setMessage(suggestion)}
                >
                  {suggestion}
                </Tag>
              ))}
            </HStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default ChatInput;
