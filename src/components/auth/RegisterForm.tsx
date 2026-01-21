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
import { registerSchema, RegisterFormData } from '../../lib/validations';
import { useRegister } from '../../hooks/graphql/useAuth';

const RegisterForm = () => {
  const navigate = useNavigate();
  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    mode: 'onBlur',
  });

  const onSubmit = async (data: RegisterFormData) => {
    await registerMutation.mutateAsync(data);
    navigate('/chat');
  };

  return (
    <Box maxW="md" mx="auto" mt={8} p={6} bg="white" borderWidth={1} borderRadius="lg" shadow="lg">
      <VStack gap={4} align="stretch">
        <Heading size="lg" textAlign="center">
          Register
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

            {/* Username Field */}
            <FormControl isInvalid={!!errors.username}>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                placeholder="Choose a username"
                {...register('username')}
              />
              <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
            </FormControl>

            {/* Password Field */}
            <FormControl isInvalid={!!errors.password}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Create a password"
                {...register('password')}
              />
              <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            {/* Submit Button */}
            <Button
              type="submit"
              colorScheme="blue"
              width="100%"
              isLoading={registerMutation.isPending}
              loadingText="Creating account..."
              mt={2}
            >
              Register
            </Button>
          </Stack>
        </form>

        {/* Login Link */}
        <Text textAlign="center" fontSize="sm">
          Already have an account?{' '}
          <Link color="blue.500" onClick={() => navigate('/login')} cursor="pointer" fontWeight="medium">
            Login
          </Link>
        </Text>
      </VStack>
    </Box>
  );
};

export default RegisterForm;
