import { Box } from '@chakra-ui/react';
import RegisterForm from '../components/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <Box minH="100vh" bg="gray.50" py={8}>
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;
