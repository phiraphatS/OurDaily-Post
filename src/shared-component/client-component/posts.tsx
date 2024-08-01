'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Image, Box, Text, Textarea, Button, VStack, HStack, Avatar, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, AvatarBadge, AvatarGroup, useDisclosure, Skeleton, SkeletonText, SkeletonCircle } from '@chakra-ui/react';
import { BiLike, BiChat, BiShare, BiHeart, BiSolidHeart } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Grid, GridItem } from "@chakra-ui/react";
import PostsActionComponent from './posts-action';
import { postService } from '@/_services/post-service';
import moment from 'moment';
import CommentDrawerComponent from './comment-drawer';
import PostCardComponent from './post-card';
import { useInView } from 'react-intersection-observer'
import PostCardSkeletonsComponent from './post-card-skeleton';

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

const numberOfFetch = 10;
const mockPosts: IPost[] = [];
export default function PostsComponent() {
    const [posts, setPosts] = useState<IPost[]>(mockPosts);
    const [offset, setOffset] = useState(0);
    const [isEnd, setIsEnd] = useState(false);
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
            fetchPosts()
        }
    }, [inView])

    const fetchPosts = (isResetPagination?: boolean) => {
        const offsetParams = isResetPagination ? 0 : offset;
        if (isResetPagination) {
            setOffset(0);
            setIsEnd(false);
        }
        
        const pagination = {
            offset: offsetParams,
            limit: numberOfFetch
        }
        postService.getFeeds(pagination).then((res: any) => {
            if (res.results.length === 0) {
                setIsEnd(true);
                return;
            }
            if (isResetPagination)
                setPosts(res.results);
            else
                setPosts(pre => ([...pre, ...res.results]));

            if (res.results.length < numberOfFetch)
                setIsEnd(true);
            else
                setOffset(offset + numberOfFetch);
        }).catch((err: any) => {
            console.log(err);
        })
    }

    const likePost = (postId: number) => {
        const backupAction = posts.find((post) => post.id === postId)?.action || {
            like: [],
            comment: [],
            commentCount: 0,
        };
        setPosts(posts.map((post) => (
            post.id === postId ? { ...post, isLiked: !post.isLiked } : post
        )))

        const params = {
            post_id: postId
        }
        postService.likePost(params).then((res: any) => {
            if (res && res.status === true) {
                const isLiked = res.results.isLike;
                const user = res.results.user;
                setPosts(posts.map((post) => (
                    post.id === postId ? {
                        ...post, isLiked: isLiked, action: post.action ? {
                            ...post.action,
                            like: isLiked ? [user, ...post.action.like] : post.action.like.filter((u) => u.id !== user.id),
                        } : {
                            like: [],
                            comment: [],
                            commentCount: 0,
                        }
                    } : post
                )))
            } else {
                throw new Error('Failed to like post');
            }
        }).catch((err: any) => {
            console.log(err);
            setPosts(posts.map((post) => (
                post.id === postId ? { ...post, isLiked: !post.isLiked, action: backupAction } : post
            )))
        })
    }

    return (<>
        <VStack 
            spacing={4} 
            width="full" 
            paddingLeft={3} 
            paddingRight={3}
            style={{ transition: 'all 0.5s' }}
        >
            <PostsActionComponent refresh={() => fetchPosts(true)} />
            {posts.length === 0 && <Text>You've never seen any posts.</Text>}
            {posts.map((post) => (
                <PostCardComponent post={post} onLike={likePost} setPosts={setPosts} key={post.id} />
            ))}
            {!isEnd && (
                <Box ref={ref} width="full">
                    <PostCardSkeletonsComponent/>
                </Box>
            )}
        </VStack>

    </>
    )
}