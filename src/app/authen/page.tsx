import React from 'react';
import { Box } from '@chakra-ui/react';
import LoginForm from '@/shared-component/client-component/login';

function LoginComponent() {

  return (
    <Box 
      width="full" 
      height="100vh"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <LoginForm />
    </Box>
  )
}

export default LoginComponent;