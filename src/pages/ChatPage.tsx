import { useNavigate } from 'react-router-dom';
import { Flex, Box, Heading, HStack, IconButton } from '@chakra-ui/react';
import { IoArrowBack } from 'react-icons/io5';
import Sidebar from '../components/layout/Sidebar';
import ChatContainer from '../components/chat/ChatContainer';
import { useLogout } from '../hooks/graphql/useAuth';

const ChatPage = () => {
  const navigate = useNavigate();
  const logoutMutation = useLogout();

  const handleLogout = async () => {
    await logoutMutation.mutateAsync();
    navigate('/login');
  };

  return (
    <Flex h="100vh" bg="white">
      <Sidebar onLogout={handleLogout} />

      <Flex flex={1} flexDirection="column">
        {/* Header */}
        <Box
          h="60px"
          px={6}
          borderBottom="1px"
          borderColor="gray.200"
          display="flex"
          alignItems="center"
          bg="white"
        >
          <HStack gap={4}>
            <IconButton
              aria-label="Back"
              variant="ghost"
              size="sm"
            >
              <IoArrowBack />
            </IconButton>
            <Heading size="md">
              <Box as="span" color="blue.600">TEMPLATE</Box>
              <Box as="span" color="gray.600">.NET</Box>
            </Heading>
          </HStack>
        </Box>

        {/* Chat Container */}
        <ChatContainer />
      </Flex>
    </Flex>
  );
};

export default ChatPage;
