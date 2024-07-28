import React from 'react';
import { Box } from '@chakra-ui/react';
import LoginForm from '@/shared-component/client-component/login';
import styles from '../../styles/authen.module.scss';
import { authenticationService } from '@/_services/authentication-service';

async function LoginComponent() {
  const test = 'test';
  return (
    <Box 
      width="full" 
      height="100vh"
      overflow="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className={styles.main}
    >
      <LoginForm styles={styles}/>
    </Box>
  )
}

export default LoginComponent;