'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Box, Text, Textarea, Button, VStack, HStack, Avatar, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton } from '@chakra-ui/react';
import { useFormik } from "formik";
import { AttachmentIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Image } from '@chakra-ui/react';
import { Grid, GridItem } from "@chakra-ui/react";
import PostsActionComponent from './posts-action';
import { postService } from '@/_services/post-service';
import moment from 'moment';


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
}

const mockPosts: Post[] = [];
export default function PostsComponent() {
  const [posts, setPosts] = useState<Post[]>(mockPosts);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10
  });

  const postTime = (createdDate: Date) => {
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

  return (
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
                  <Text>{post.profile.position} <span>{ postTime(post.createdAt) }</span></Text>
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
          <CardBody>
            <Text>
              {post.content}
            </Text>
          </CardBody>

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
            <Button flex='1' variant='ghost' leftIcon={<BiLike />}>
              {/* Like */}
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<BiChat />}>
              {/* Comment */}
            </Button>
            <Button flex='1' variant='ghost' leftIcon={<BiShare />}>
              {/* Share */}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </VStack>
  )
}