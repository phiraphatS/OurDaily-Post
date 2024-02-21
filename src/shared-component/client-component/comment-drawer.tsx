'use client'
import { Text, HStack, Button, Drawer, DrawerBody, DrawerFooter, DrawerOverlay, DrawerContent, Textarea, FormControl, DrawerHeader, Box, VStack, AvatarBadge, AvatarGroup, Avatar, Heading, useDisclosure, SkeletonCircle, SkeletonText, Skeleton, Spinner, } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import { FilePond } from 'react-filepond';
import { FilePondFile } from 'filepond';
import { postService } from '@/_services/post-service';
import moment from 'moment';
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

interface IFormValues {
    content: string;
}

interface IProps {
    isOpen: boolean;
    postId: number;
    onClose: () => void;
}

interface IComment {
    id: number;
    content: string;
    createdAt: Date;
    profile: {
        avatar: string;
        fullName: string;
        position: string;
    };

}

const getComments = async (postId: number) => {
    const param = {
        postId: postId
    }
    return postService.getCommentPost(param)
}

export default function CommentDrawerComponent({ isOpen, postId, onClose }: IProps) {

    // Access the client
    const queryClient = useQueryClient()

    // Queries
    const { isPending, error, data, isFetching } = useQuery({ queryKey: ['getComment'], queryFn: () => getComments(postId) })
    const isSuccess = !isPending && !error
    const results = isSuccess ? data.results : []
    // Mutations
    const mutation = useMutation({
        mutationFn: async () => {
            const params = {
                postId: postId,
                content: formik.values.content,
            }

            return postService.commentPost(params)
        },
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['getComment'] })
        },
    })

    const initialValues: IFormValues = {
        content: '',
    }

    const formik = useFormik({
        initialValues: initialValues,
        // validationSchema: validateSchema,
        onSubmit: async (values) => {
            mutation.mutate(undefined, {
                onSuccess: () => {
                    formik.resetForm();
                }
            });
            // formik.resetForm();
        }
    });

    const fromNow = (createdDate: Date) => {
        return moment(createdDate).fromNow()
    };

    const destroyOnclose = () => {
        queryClient.removeQueries({ queryKey: ['getComment'] });
        formik.resetForm();
        onClose();
    }

    return (
        <Drawer
            isOpen={isOpen}
            placement="bottom"
            onClose={destroyOnclose}
            returnFocusOnClose={false}
            autoFocus={false}
        >
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerHeader borderBottom={'1px'} borderColor={'#f7f7f7'}>
                        <Heading size={'sm'}>
                            Comments
                        </Heading>
                    </DrawerHeader>
                    <DrawerBody>
                        <VStack overflow={'auto'} maxH="50vh" width={'full'}>
                            {(isFetching || mutation.isPending) && (
                                <Box width={'full'} bg='white' display={'flex'} flexDirection={'column'}>
                                    {/* <SkeletonCircle size='10' /> */}
                                    <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
                                </Box>
                            )}
                            {/* mockup comment */}
                            {results && results.map((comment: IComment, i: number) => (
                                <Box key={comment.id} padding={2} width="full">
                                    <HStack spacing={3}>
                                        <Avatar src={comment.profile.avatar} size='sm' />
                                        <Box>
                                            <Heading size='xs'>{comment.profile.fullName}</Heading>
                                            <Text fontSize='sm'>{comment.profile.position} <span>{fromNow(comment.createdAt)}</span></Text>
                                        </Box>
                                    </HStack>
                                    <Box padding={2}>
                                        <Text fontSize='sm'>{comment.content}</Text>
                                    </Box>
                                </Box>
                            ))}

                            {/* {isFetching && (<Text fontSize='sm'>
                                <Spinner
                                    thickness='4px'
                                    speed='0.65s'
                                    emptyColor='gray.200'
                                    color='blue.500'
                                    size='sm'
                                    marginRight={2}
                                /> 
                                Loading...
                            </Text>)} */}

                        </VStack>
                    </DrawerBody>
                    <form onSubmit={formik.handleSubmit} autoComplete='off'>
                        <DrawerBody>
                            <FormControl>
                                <Textarea
                                    required
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
