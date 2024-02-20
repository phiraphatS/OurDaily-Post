'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Box, Text, Textarea, Button, VStack, HStack, Avatar, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton, AvatarBadge, AvatarGroup, useDisclosure } from '@chakra-ui/react';
import { BiLike, BiChat, BiShare, BiHeart, BiSolidHeart } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Image } from '@chakra-ui/react';
import { Grid, GridItem } from "@chakra-ui/react";
import PostsActionComponent from './posts-action';
import { postService } from '@/_services/post-service';
import moment from 'moment';
import CommentDrawerComponent from './comment-drawer';

interface Post {
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
    // share: number;
  }
  isLiked: boolean;
}

const mockPosts: Post[] = [];
export default function PostsComponent() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10
  });
  const { isOpen: isCommentOpen, onOpen: onCommentOpen, onClose: onCommentClose } = useDisclosure();

  const fromNow = (createdDate: Date) => {
    return moment(createdDate).fromNow()
  };

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

  return ( <>
    <VStack spacing={4} width="full" >
      <PostsActionComponent refresh={fetchPosts} />
      {posts.length === 0 && <Text>You've never seen any posts.</Text>}
      {posts.map((post) => (
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
                onClick={() => likePost(post.id)}
                position='relative'
              >
                <BiSolidHeart color='red' />
                {avatarActionGroup(post.action?.like || [])}
              </Button>
            ) : (
              <Button 
                flex='1' 
                variant='ghost' 
                onClick={() => likePost(post.id)}
                position='relative'
              >
                <BiHeart />
                {avatarActionGroup(post.action?.like || [])}
              </Button>
            )}
            <Button flex='1' variant='ghost' onClick={commentPost}>
              <BiChat />
            </Button>
            <Button flex='1' variant='ghost'>
              <BiShare />
            </Button>
          </CardFooter>
        </Card>
      ))}
      
    </VStack>

    <CommentDrawerComponent isOpen={isCommentOpen} onClose={onCommentClose} />
  </>
  )
}