'use client'
import React from 'react';
import { useFormik } from 'formik';
import { Box, Button, FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';

function LoginForm() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: (values) => {
            // Perform login logic here
            console.log(`Logging in with username: ${values.username} and password: ${values.password}`);
        },
    });

    return (
        <VStack spacing={4} p={4} borderRadius="lg">
            <Box as="h2" fontSize="2xl">Login</Box>
            <form onSubmit={formik.handleSubmit}>
                <FormControl id="username">
                    <FormLabel>Username</FormLabel>
                    <Input type="text" {...formik.getFieldProps('username')} isRequired={true} />
                </FormControl>
                <FormControl id="password">
                    <FormLabel>Password</FormLabel>
                    <Input type="password" {...formik.getFieldProps('password')} isRequired={true} />
                </FormControl>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                    <Button mt={4} colorScheme="teal" type="submit">
                        Sign in
                    </Button>

                    <Button mt={4} ml={4} colorScheme="teal" type="button" variant='outline'>
                        Sign up
                    </Button>
                </Box>
                
                <span>Forgot your password? <Button variant='link'>click here</Button></span>
            </form>
        </VStack>
    );
}

export default LoginForm;