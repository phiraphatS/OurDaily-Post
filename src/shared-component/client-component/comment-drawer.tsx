import { Text, HStack, Button, Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, Textarea, FormControl, DrawerHeader, Box, VStack, AvatarBadge, AvatarGroup, Avatar, Heading, } from '@chakra-ui/react'
import React, { } from 'react'
import { useFormik } from 'formik';
import { FilePond } from 'react-filepond';
import { FilePondFile } from 'filepond';
import { postService } from '@/_services/post-service';
import moment from 'moment';

interface IFormValues {
    content: string;
}

interface IProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CommentDrawerComponent({ isOpen, onClose }: IProps) {

    const initialValues: IFormValues = {
        content: '',
    }

    const formik = useFormik({
        initialValues: initialValues,
        // validationSchema: validateSchema,
        onSubmit: async (values) => {
            const params = {
                content: values.content,
            }

            postService.postNow(params).then((res: any) => {
                // reset form, filepond, and close drawer
                formik.resetForm();
                onClose();
            }).catch((err: any) => {
                console.log(err);
            });
        }
    });

    const fromNow = (createdDate: Date) => {
        return moment(createdDate).fromNow()
    };

    return (
        <Drawer
            isOpen={isOpen}
            placement="bottom"
            onClose={onClose}
            returnFocusOnClose={false}
        >
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody>
                        <VStack overflowY="auto" maxH="50vh">
                            <DrawerHeader>
                                <Heading size={'sm'}>
                                    Comment
                                </Heading>
                            </DrawerHeader>
                            {/* mockup comment */}
                            {
                                // [
                                //     {
                                //         id: 1,
                                //         profile: {
                                //             avatar: 'https://bit.ly/dan-abramov',
                                //             fullname: 'Dan Abramov',
                                //             position: 'Boyfriend'
                                //         },
                                //         content: 'Hello, I am Dan Abramov',
                                //         createdAt: new Date(),
                                //     },
                                // ]
                                Array.from
                                ({ length: 15 },((comment, i) => (
                                    <Box key={i} padding={2} width="full">
                                        <HStack>
                                            <Avatar src={'https://bit.ly/dan-abramov'} size='sm' />
                                            <Box>
                                                <Heading size='xs'>{'Dan Abramov'}</Heading>
                                                <Text fontSize='sm'>{'Boyfriend'} <span>{fromNow(new Date())}</span></Text>
                                            </Box>
                                        </HStack>
                                        <Box padding={2}>
                                            <Text fontSize='sm'>{'Hello, I am Dan Abramov'}</Text>
                                        </Box>
                                    </Box>
                                )))
                            }
                        </VStack>
                    </DrawerBody>
                    <form onSubmit={formik.handleSubmit} autoComplete='off'>
                        <DrawerBody>
                            <FormControl>
                                <Textarea
                                    // required
                                    value={formik.values.content}
                                    onChange={(e) => { formik.setFieldValue('content', e.target.value) }}
                                    id="content"
                                    name="content"
                                    placeholder="What's on your mind?"
                                    rows={3}
                                />
                            </FormControl>
                            <Box padding={2} />
                        </DrawerBody>

                        <DrawerFooter borderTopWidth="1px">
                            <HStack spacing={4} align="stretch">
                                <Button colorScheme="blue" type="submit">
                                    Comment
                                </Button>
                            </HStack>
                        </DrawerFooter>
                    </form>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}
