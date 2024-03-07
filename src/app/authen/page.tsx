import React from 'react';
import { Box } from '@chakra-ui/react';
import LoginForm from '@/shared-component/client-component/login';
import styles from '../../styles/authen.module.scss';
import { authenticationService } from '@/_services/authentication-service';

interface IProps {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

async function LoginComponent(props: IProps) {
  let errorMessage = "";
  let isSuccessful = false;
  try {
    if (props.searchParams?.email && props.searchParams?.password) {
      await authenticationService.login({
        email: props.searchParams.email,
        password: props.searchParams.password
      }).then(res => {
        if (res && res.status === true) {
          isSuccessful = true;
        } else {
          throw new Error(res.message);
        }
      }).catch((error: any) => {
        throw error;
      });
    }
  } catch (error: any) {
    // set error message
    errorMessage = error.message;
  }

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