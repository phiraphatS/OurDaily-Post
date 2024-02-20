import { Image, Text, Box, Card, CardHeader, Flex, Avatar, Heading, IconButton, CardBody, Grid, GridItem, CardFooter, Button, AvatarGroup, useDisclosure } from '@chakra-ui/react';
import moment from 'moment';
import React from 'react'
import { BiSolidHeart, BiHeart, BiChat, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import CommentDrawerComponent from './comment-drawer';

interface IPost {
    id: number;
    content: string;
    img: string[];
    createdAt: Date;
    profile: {
        avatar: string;
        fullName: string;
        position: string;
    };
    action: {
        like: {
            id: number;
            avatar: string;
            fullName: string;
        }[];
        comment: {
            id: number;
            avatar: string;
            fullName: string;
        }[];
        commentCount: number;
        // share: number;
    }
    isLiked: boolean;
}

interface IProps {
    post: IPost;
    onLike: (postId: number) => void;
}

export default function PostCardComponent(props: IProps) {
    const { post, onLike } = props;
    const { isOpen: isCommentOpen, onOpen: onCommentOpen, onClose: onCommentClose } = useDisclosure();

    const fromNow = (createdDate: Date) => {
        return moment(createdDate).fromNow()
    };

    const commentPost = () => {
        onCommentOpen();
    }

    const avatarActionGroup = (like: any[]) => {
        return <>
            {like && like.length > 0 && (
                <AvatarGroup
                    size='xs'
                    max={2}
                    position='absolute'
                    bottom='0'
                    left='70%'
                    transform='translateX(-50%)'
                >
                    {like.map(({ id, avatar, fullName }) => (
                        <Avatar
                            key={id}
                            name={fullName}
                            src={avatar}
                            className='fade-in'
                        />
                    ))}
                </AvatarGroup>
            )}
        </>
    }

    return (
        <Card
            maxW='lg'
            width='full'
            key={post.id}
        >
            <CardHeader>
                <Flex gap={4}>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <Avatar name={post.profile.fullName} src={post.profile.avatar} />
                        <Box>
                            <Heading size='sm'>{post.profile.fullName}</Heading>
                            <Text>{post.profile.position} <span>{fromNow(post.createdAt)}</span></Text>
                        </Box>
                    </Flex>
                    <IconButton
                        variant='ghost'
                        colorScheme='gray'
                        aria-label='See menu'
                        icon={<BsThreeDotsVertical />}
                    />
                </Flex>
            </CardHeader>
            {post.content && post.content.length > 0 && (
                <CardBody>
                    <Text>
                        {post.content}
                    </Text>
                </CardBody>
            )}

            {post.img.length > 0 && (<>
                <CardBody>
                    {post.img.length === 1 && (
                        <Image
                            objectFit="cover"
                            src={post.img[0]}
                            alt={`Image 1`}
                            width="100%"
                            height="300px"
                        />
                    )}
                    {post.img.length == 2 && (
                        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                            {post.img.map((image, index) => (
                                <GridItem key={index}>
                                    <Image
                                        objectFit="cover"
                                        src={image}
                                        alt={`Image ${index + 1}`}
                                        width="100%"
                                        height="250px"
                                    />
                                </GridItem>
                            ))}
                        </Grid>
                    )}
                    {post.img.length > 2 && (
                        <>
                            <Grid
                                templateColumns={`repeat(${post.img.length > 4 ? 3 : (post.img.length - 1)}, 1fr)`}
                                gap={2}
                            >
                                {post.img.slice(0, 4).map((image, index) => {
                                    let row = <></>
                                    if (index === 0) {
                                        row = (
                                            <GridItem
                                                key={index}
                                                colSpan={post.img.length - 1}
                                            >
                                                <Image
                                                    objectFit="cover"
                                                    src={image}
                                                    alt={`Image ${index + 1}`}
                                                    width="100%"
                                                    height="200px"
                                                />
                                            </GridItem>
                                        )
                                    } else {
                                        if (index === 3 && post.img.length > 4) {
                                            row = <GridItem key={index}>
                                                <Image
                                                    objectFit="cover"
                                                    src={`https://via.placeholder.com/800x800?text=%2B${post.img.length - 4}...`}
                                                    alt={`+${post.img.length - 4}`}
                                                    width="100%"
                                                    height="100px"
                                                />
                                            </GridItem>
                                        } else {
                                            row = <GridItem key={index}>
                                                <Image
                                                    objectFit="cover"
                                                    src={image}
                                                    alt={`Image ${index + 1}`}
                                                    width="100%"
                                                    height="100px"
                                                />
                                            </GridItem>
                                        }
                                    }
                                    return row;
                                })}
                            </Grid>
                        </>
                    )}
                </CardBody>
            </>)}

            <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                    '& > button': {
                        minW: '50px',
                    },
                }}
            >
                {post.isLiked ? (
                    <Button
                        flex='1'
                        variant='ghost'
                        onClick={() => onLike(post.id)}
                        position='relative'
                    >
                        <BiSolidHeart color='red' />
                        {avatarActionGroup(post.action?.like || [])}
                    </Button>
                ) : (
                    <Button
                        flex='1'
                        variant='ghost'
                        onClick={() => onLike(post.id)}
                        position='relative'
                    >
                        <BiHeart />
                        {avatarActionGroup(post.action?.like || [])}
                    </Button>
                )}
                <Button flex='1' variant='ghost' onClick={commentPost}>
                    <BiChat />
                    <Box
                        position='absolute'
                        bottom='1'
                        left='65%'
                        transform='translateX(-50%)'
                    >
                        <Text fontSize={'xs'}>{post.action?.commentCount}</Text>
                    </Box>
                </Button>
                <Button flex='1' variant='ghost'>
                    <BiShare />
                </Button>
            </CardFooter>
            { isCommentOpen && (
                <CommentDrawerComponent isOpen={isCommentOpen} onClose={onCommentClose} postId={post.id} />
            )}
        </Card>
    )
}
