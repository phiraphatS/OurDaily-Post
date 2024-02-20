'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Image, Box, Text, Textarea, Button, VStack, HStack, Avatar, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, AvatarBadge, AvatarGroup, useDisclosure } from '@chakra-ui/react';
import { BiLike, BiChat, BiShare, BiHeart, BiSolidHeart } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Grid, GridItem } from "@chakra-ui/react";
import PostsActionComponent from './posts-action';
import { postService } from '@/_services/post-service';
import moment from 'moment';
import CommentDrawerComponent from './comment-drawer';
import PostCardComponent from './post-card';

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

const mockPosts: IPost[] = [];
export default function PostsComponent() {
    const [posts, setPosts] = useState<IPost[]>(mockPosts);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 10
    });


    useEffect(() => {
        fetchPosts()

        return () => {
            //cleanup
        }
    }, [])

    const fetchPosts = () => {
        postService.getFeeds(pagination).then((res: any) => {
            setPosts(res.results);
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
        <VStack spacing={4} width="full" paddingLeft={3} paddingRight={3}>
            <PostsActionComponent refresh={fetchPosts} />
            {posts.length === 0 && <Text>You've never seen any posts.</Text>}
            {posts.map((post) => (
                <PostCardComponent post={post} onLike={likePost} key={post.id}/>
            ))}
        </VStack>

    </>
    )
}