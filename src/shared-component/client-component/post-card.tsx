import { Image, Text, Box, Card, CardHeader, Flex, Avatar, Heading, IconButton, CardBody, Grid, GridItem, CardFooter, Button, AvatarGroup, useDisclosure } from '@chakra-ui/react';
import moment from 'moment';
import React, { useEffect, useMemo } from 'react'
import { BiSolidHeart, BiHeart, BiChat, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import CommentDrawerComponent from './comment-drawer';
import PostHeaderMenu from './post-header-menu';
import { postService } from '@/_services/post-service';
import { useSession } from 'next-auth/react';

interface IPost {
    id: number;
    content: string;
    img: {
        url: string;
        key: string;
    }[];
    createdAt: Date;
    profile: {
        id: number;
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
    setPosts: React.Dispatch<React.SetStateAction<IPost[]>>;
    onLike: (postId: number) => void;
}

export default function PostCardComponent(props: IProps) {
    const { post, onLike } = props;
    const { isOpen: isCommentOpen, onOpen: onCommentOpen, onClose: onCommentClose } = useDisclosure();
    const { data: session } = useSession();
    const accessToken = session?.accessToken;
    const [mediaItemBaseUrl, setMediaItemBaseUrl] = React.useState<string[]>([]);

    const isPersonal = post.profile.id === 2;
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

    const updateCommentCount = (count: number) => {
        const postId = props.post.id;
        const { setPosts } = props;
        setPosts((pre) => (
            pre.map((post) => (
                post.id === postId ? { ...post, action: { ...post.action, commentCount: count } } : post
            ))
        ))
    }

    const lookPost = () => {
        console.log(post);
    }

    const deletePost = () => {
        const params = {
            post_id: post.id
        }

        postService.deletePost(params).then((res: any) => {
            if (res.status === true) {
                const setPosts = props.setPosts;
                setPosts((pre) => (
                    pre.filter((post) => post.id !== params.post_id)
                ))
            }
        })
    }

    const getMediaItemBaseUrl = async () => {
        try {
            if (!accessToken) {
                return post.img.map((obj) => obj.url);
            }

            const getMultipleMediaItemsEndpoint = 'https://photoslibrary.googleapis.com/v1/mediaItems:batchGet';

            const queryStrings = post.img.map((obj) => `mediaItemIds=${obj.key}`).join('&');
            const urlEndpoint = `${getMultipleMediaItemsEndpoint}?${queryStrings}`;

            const getMediaItemHeaders = {
                Authorization: `Bearer ${accessToken}`,
                "Content-type": "application/json"
            }

            const response = await fetch(urlEndpoint, {
                method: 'GET',
                headers: getMediaItemHeaders,
            });

            if (response.status !== 200) {
                return post.img.map((obj) => obj.url);
            }

            const mediaItems = await response.json();
            const baseUrl: string[] = [];
            mediaItems.mediaItemResults.forEach((item: any) => {
                if (item.mediaItem) {
                    baseUrl.push(item.mediaItem.baseUrl);
                }
            });

            return baseUrl;
        } catch (error) {
            console.error('Error creating media item:', error);
            return [];
        }
    }

    useEffect(() => {
        getMediaItemBaseUrl().then((res) => {
            setMediaItemBaseUrl(res);
        });
    }, [post.img, accessToken]);

    return (
        <Card
            maxW='lg'
            width='full'
            key={post.id}
            transition={'all 0.5s'}
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
                    <PostHeaderMenu lookPost={lookPost} deletePost={deletePost} isPersonal={isPersonal} />
                </Flex>
            </CardHeader>
            {post.content && post.content.length > 0 && (
                <CardBody>
                    <Text>
                        {post.content}
                    </Text>
                </CardBody>
            )}

            {mediaItemBaseUrl.length > 0 && (<>
                <CardBody>
                    {mediaItemBaseUrl.length === 1 && (
                        <Image
                            objectFit="cover"
                            src={`${mediaItemBaseUrl[0]}=w800-h800-c`}
                            alt={`Image 1`}
                            width="100%"
                            height="300px"
                        />
                    )}
                    {mediaItemBaseUrl.length == 2 && (
                        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                            {mediaItemBaseUrl.map((image, index) => (
                                <GridItem key={index}>
                                    <Image
                                        objectFit="cover"
                                        src={`${image}=w800-h800-c`}
                                        alt={`Image ${index + 1}`}
                                        width="100%"
                                        height="250px"
                                    />
                                </GridItem>
                            ))}
                        </Grid>
                    )}
                    {mediaItemBaseUrl.length > 2 && (
                        <>
                            <Grid
                                templateColumns={`repeat(${mediaItemBaseUrl.length > 4 ? 3 : (mediaItemBaseUrl.length - 1)}, 1fr)`}
                                gap={2}
                            >
                                {mediaItemBaseUrl.slice(0, 4).map((image, index) => {
                                    let row = <></>
                                    if (index === 0) {
                                        row = (
                                            <GridItem
                                                key={index}
                                                colSpan={mediaItemBaseUrl.length - 1}
                                            >
                                                <Image
                                                    objectFit="cover"
                                                    src={`${image}=w800-h800-c`}
                                                    alt={`Image ${index + 1}`}
                                                    width="100%"
                                                    height="200px"
                                                />
                                            </GridItem>
                                        )
                                    } else {
                                        if (index === 3 && mediaItemBaseUrl.length > 4) {
                                            row = <GridItem key={index}>
                                                <Image
                                                    objectFit="cover"
                                                    src={`https://via.placeholder.com/800x800?text=%2B${mediaItemBaseUrl.length - 4}...`}
                                                    alt={`+${mediaItemBaseUrl.length - 4}`}
                                                    width="100%"
                                                    height="100px"
                                                />
                                            </GridItem>
                                        } else {
                                            row = <GridItem key={index}>
                                                <Image
                                                    objectFit="cover"
                                                    src={`${image}=w800-h800-c`}
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
                <CommentDrawerComponent isOpen={isCommentOpen} onClose={onCommentClose} postId={post.id} updateCommentCount={updateCommentCount} />
            )}
        </Card>
    )
}
