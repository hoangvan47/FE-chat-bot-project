import { Box, Skeleton, SkeletonText, VStack, HStack } from '@chakra-ui/react';

/**
 * Skeleton Loader for Message List
 * Shows loading state while fetching messages
 */
export const MessageSkeleton = () => {
  return (
    <VStack gap={4} align="stretch" p={6}>
      {[1, 2, 3].map((i) => (
        <HStack key={i} gap={3} align="start" justify={i % 2 === 0 ? 'flex-end' : 'flex-start'}>
          {i % 2 !== 0 && <Skeleton width="32px" height="32px" borderRadius="full" />}
          <Box maxW="70%">
            <Skeleton height="60px" borderRadius="lg" />
          </Box>
          {i % 2 === 0 && <Skeleton width="32px" height="32px" borderRadius="full" />}
        </HStack>
      ))}
    </VStack>
  );
};

/**
 * Skeleton Loader for Login Form
 */
export const FormSkeleton = () => {
  return (
    <Box maxW="md" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
      <VStack gap={4} align="stretch">
        <Skeleton height="32px" width="150px" mx="auto" />
        <SkeletonText noOfLines={1} />
        <Skeleton height="40px" />
        <SkeletonText noOfLines={1} />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
      </VStack>
    </Box>
  );
};

/**
 * Skeleton Loader for Sidebar
 */
export const SidebarSkeleton = () => {
  return (
    <Box w="80px" h="100vh" bg="white" borderRight="1px" borderColor="gray.200" p={4}>
      <VStack gap={4}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Skeleton key={i} width="60px" height="60px" borderRadius="md" />
        ))}
      </VStack>
    </Box>
  );
};

/**
 * Full Page Skeleton for Chat Page
 */
export const ChatPageSkeleton = () => {
  return (
    <HStack gap={0} h="100vh">
      <SidebarSkeleton />
      <VStack flex={1} align="stretch" gap={0}>
        <Skeleton height="60px" borderBottom="1px solid" borderColor="gray.200" />
        <Box flex={1} p={6}>
          <MessageSkeleton />
        </Box>
        <Skeleton height="120px" borderTop="1px solid" borderColor="gray.200" />
      </VStack>
    </HStack>
  );
};
