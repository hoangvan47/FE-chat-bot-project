import { Box } from '@chakra-ui/react';
import LoginForm from '../components/auth/LoginForm';

const LoginPage = () => {
  return (
    <Box minH="100vh" bg="gray.50" py={8}>
      <LoginForm />
    </Box>
  );
};

export default LoginPage;
