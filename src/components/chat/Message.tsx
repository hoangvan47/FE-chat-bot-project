import { Box, Text, HStack, Avatar, Image, VStack } from '@chakra-ui/react';
import { Message as MessageType } from '../../types';

interface MessageProps {
  message: MessageType;
}

const Message = ({ message }: MessageProps) => {
  const isUser = message.sender === 'user';

  return (
    <HStack
      gap={3}
      align="start"
      justify={isUser ? 'flex-end' : 'flex-start'}
      w="100%"
      mb={4}
    >
      {!isUser && <Avatar size="sm" name="AI" bg="blue.500" />}

      <VStack
        align={isUser ? 'flex-end' : 'flex-start'}
        gap={2}
        maxW="70%"
      >
        {/* Text Content */}
        <Box
          bg={isUser ? 'blue.500' : 'gray.100'}
          color={isUser ? 'white' : 'black'}
          px={4}
          py={3}
          borderRadius="lg"
          borderBottomRightRadius={isUser ? 0 : 'lg'}
          borderBottomLeftRadius={isUser ? 'lg' : 0}
          shadow="sm"
        >
          <Text fontSize="sm" whiteSpace="pre-wrap">
            {message.content}
          </Text>
        </Box>

        {/* Image if exists */}
        {message.imageUrl && (
          <Image
            src={message.imageUrl}
            alt="Message attachment"
            maxW="300px"
            maxH="300px"
            borderRadius="md"
            shadow="md"
            objectFit="cover"
            cursor="pointer"
            onClick={() => window.open(message.imageUrl!, '_blank')}
            _hover={{ opacity: 0.9 }}
          />
        )}

        {/* Timestamp */}
        <Text fontSize="xs" opacity={0.7} color={isUser ? 'blue.600' : 'gray.500'}>
          {new Date(message.createdAt).toLocaleTimeString()}
        </Text>
      </VStack>

      {isUser && <Avatar size="sm" name="You" bg="green.500" />}
    </HStack>
  );
};

export default Message;
