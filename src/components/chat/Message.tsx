import { Box, Text, HStack, Avatar } from '@chakra-ui/react';
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

      <Box
        maxW="70%"
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
        <Text fontSize="xs" opacity={0.7} mt={2}>
          {new Date(message.createdAt).toLocaleTimeString()}
        </Text>
      </Box>

      {isUser && <Avatar size="sm" name="You" bg="green.500" />}
    </HStack>
  );
};

export default Message;
