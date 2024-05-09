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
  let errorMessage = "ready";
  let isSuccessful = false;

  return (
    <Box 
      width="full" 
      height="100vh"
      overflow="hidden"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      // className={styles.main}
    >
      {/* {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      {props.searchParams?.email && <div>{props.searchParams.email}</div>}
      {props.searchParams?.password && <div>{props.searchParams.password}</div>}
      {isSuccessful && <div>login successful</div>} */}
      <LoginForm styles={styles}/>
    </Box>
  )
}

export default LoginComponent;