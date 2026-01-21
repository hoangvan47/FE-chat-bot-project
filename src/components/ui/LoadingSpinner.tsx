import { Spinner, Center, Text, VStack } from '@chakra-ui/react';

interface LoadingSpinnerProps {
  text?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  fullScreen?: boolean;
}

/**
 * Loading Spinner Component
 * Can be used inline or full-screen
 */
export const LoadingSpinner = ({ 
  text = 'Loading...', 
  size = 'md',
  fullScreen = false 
}: LoadingSpinnerProps) => {
  const spinner = (
    <VStack gap={3}>
      <Spinner
        size={size}
        color="blue.500"
        thickness="3px"
        speed="0.65s"
      />
      {text && (
        <Text fontSize="sm" color="gray.600">
          {text}
        </Text>
      )}
    </VStack>
  );

  if (fullScreen) {
    return (
      <Center h="100vh" w="100vw" bg="gray.50">
        {spinner}
      </Center>
    );
  }

  return <Center py={8}>{spinner}</Center>;
};

/**
 * Inline Spinner (smaller, for buttons/cards)
 */
export const InlineSpinner = ({ text }: { text?: string }) => {
  return (
    <Center gap={2}>
      <Spinner size="sm" color="blue.500" />
      {text && <Text fontSize="sm">{text}</Text>}
    </Center>
  );
};
