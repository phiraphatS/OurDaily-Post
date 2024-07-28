'use client'
import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, VStack, Tabs, TabList, TabPanels, Tab, TabPanel, Heading, Text, Flex, useColorModeValue } from '@chakra-ui/react';
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { usePathname, useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { FaGoogle, FaFacebook, FaTwitter } from 'react-icons/fa';

const LoginForm = () => {
    const router = useRouter();
    const pathname = usePathname();
    const { data: session } = useSession();

    const bgColor = useColorModeValue('gray.50', 'gray.800');
    const cardBgColor = useColorModeValue('white', 'gray.700');

    const schema = Yup.object().shape({
        email: Yup.string()
            .required("Email is required")
            .email("Invalid email format"),
        password: Yup.string()
            .required("Password is required")
            .min(6, "Password must be at least 6 characters"),
    });

    const handleSubmit = async (values: any, { setSubmitting }: any) => {
        try {
            const result = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
            });

            if (result?.error) {
                console.error(result.error);
                // Handle error (e.g., show error message)
            } else {
                router.push('/feeds'); // Redirect to dashboard on successful login
            }
        } catch (error) {
            console.error('Login failed:', error);
            // Handle error (e.g., show error message)
        } finally {
            setSubmitting(false);
        }
    };

    const handleOAuthSignIn = (provider: string) => {
        signIn(provider, { callbackUrl: '/feeds' });
    };

    if (session) {
        router.push('/feeds');
        return null;
    }

    return (
        <Flex minHeight="100vh" width="full" align="center" justifyContent="center" bg={bgColor}>
            <Box
                borderWidth={1}
                px={4}
                width="full"
                maxWidth="500px"
                borderRadius={4}
                textAlign="center"
                boxShadow="lg"
                bg={cardBgColor}
            >
                <Box p={4}>
                    <Heading>Login</Heading>
                    <Text mt={1} mb={4}>Enter your credentials to access your account</Text>
                    <Tabs isFitted variant="enclosed" mt={6}>
                        <TabList mb="1em">
                            <Tab>Email</Tab>
                            <Tab>OAuth</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <Formik
                                    validationSchema={schema}
                                    initialValues={{ email: "", password: "" }}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, touched, isSubmitting }) => (
                                        <Form>
                                            <VStack spacing={4} align="flex-start">
                                                <FormControl isInvalid={!!errors.email && touched.email}>
                                                    <FormLabel htmlFor="email">Email</FormLabel>
                                                    <Field
                                                        as={Input}
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        variant="filled"
                                                    />
                                                    {errors.email && touched.email && <Text color="red.500">{errors.email}</Text>}
                                                </FormControl>
                                                <FormControl isInvalid={!!errors.password && touched.password}>
                                                    <FormLabel htmlFor="password">Password</FormLabel>
                                                    <Field
                                                        as={Input}
                                                        id="password"
                                                        name="password"
                                                        type="password"
                                                        variant="filled"
                                                    />
                                                    {errors.password && touched.password && <Text color="red.500">{errors.password}</Text>}
                                                </FormControl>
                                                <Button type="submit" colorScheme="blue" width="full" isLoading={isSubmitting}>
                                                    Login
                                                </Button>
                                            </VStack>
                                        </Form>
                                    )}
                                </Formik>
                            </TabPanel>
                            <TabPanel>
                                <VStack spacing={4}>
                                    <Button leftIcon={<FaGoogle />} colorScheme="red" width="full" onClick={() => handleOAuthSignIn('google')}>
                                        Login with Google
                                    </Button>
                                    <Button leftIcon={<FaFacebook />} colorScheme="facebook" width="full" onClick={() => handleOAuthSignIn('facebook')}>
                                        Login with Facebook
                                    </Button>
                                    <Button leftIcon={<FaTwitter />} colorScheme="twitter" width="full" onClick={() => handleOAuthSignIn('twitter')}>
                                        Login with Twitter
                                    </Button>
                                </VStack>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>
            </Box>
        </Flex>
    );
};

export default LoginForm;