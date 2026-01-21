import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Input,
  VStack,
  Heading,
  Text,
  Link,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Stack,
} from '@chakra-ui/react';
import { loginSchema, LoginFormData } from '../../lib/validations';
import { useLogin } from '../../hooks/graphql/useAuth';

const LoginForm = () => {
  const navigate = useNavigate();
  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: LoginFormData) => {
    await loginMutation.mutateAsync(data);
    navigate('/chat');
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} bg="white" borderWidth={1} borderRadius="lg" shadow="lg">
      <VStack gap={4} align="stretch">
        <Heading size="lg" textAlign="center">
          Login
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={4}>
            {/* Email Field */}
            <FormControl isInvalid={!!errors.email}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                {...register('email')}
              />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                {...register('password')}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              width="100%"
              isLoading={loginMutation.isPending}
              loadingText="Logging in..."
              mt={2}
            >
              Login
            </Button>
          </Stack>
        </form>

        {/* Register Link */}
        <Text textAlign="center" fontSize="sm">
          Don't have an account?{' '}
          <Link color="blue.500" onClick={() => navigate('/register')} cursor="pointer" fontWeight="medium">
            Register
          </Link>
        </Text>

        {/* Mock Credentials */}
        <Box mt={4} p={4} bg="gray.50" borderRadius="md">
          <Text fontSize="sm" fontWeight="bold" mb={2}>
            Mock User Credentials:
          </Text>
          <Text fontSize="xs" color="gray.600">Email: user1@test.com</Text>
          <Text fontSize="xs" color="gray.600">Password: password123</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default LoginForm;
