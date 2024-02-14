'use client'
import React, { useEffect, useState } from 'react';
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

const mockPosts = [
  {
    id: 1,
    content: 'this is the first post!',
    img: [
      "https://via.placeholder.com/800x800?text=First+Image",
      "https://via.placeholder.com/800x800?text=Second+Image",
      "https://via.placeholder.com/800x800?text=Third+Image",
      "https://via.placeholder.com/800x800?text=Fourth+Image",
      // "https://via.placeholder.com/800x800?text=Fifth+Image",
    ],
    createdAt: new Date(),
    profile: {
      avatar: "https://via.placeholder.com/150x150?text=Avatar+Image",
      fullName: "John Doe",
      position: "Software Engineer"
    }
  },
  {
    id: 2,
    content: 'this is the second post!',
    img: [
      "https://via.placeholder.com/800x800?text=First+Image",
    ],
    createdAt: new Date(),
    profile: {
      avatar: "https://via.placeholder.com/150x150?text=Avatar+Image",
      fullName: "John Doe",
      position: "Software Engineer"
    }
  },
  {
    id: 3,
    content: 'this is the third post!',
    img: [
      "https://via.placeholder.com/800x800?text=First+Image",
      "https://via.placeholder.com/800x800?text=Second+Image",
    ],
    createdAt: new Date(),
    profile: {
      avatar: "https://via.placeholder.com/150x150?text=Avatar+Image",
      fullName: "John Doe",
      position: "Software Engineer"
    }
  },
];
export default function PostsComponent() {
  const [posts, setPosts] = useState(mockPosts);

  const postTime = (createdDate: Date) => {
    //generate and return post time to sting
    const now = new Date();
    //date now, 1 minute, 5 minute, 10 minute, 20 minute, 1 hour, 1 day, 1 week, 1 month, 1 year, and more than 1 year
    const time = now.getTime() - createdDate.getTime();
    const postTime = (createdDate: Date) => {
      const now = new Date();
      const time = now.getTime() - createdDate.getTime();

      switch (true) {
        case time < 60000:
          return "Just now";
        case time < 300000:
          return "5 minutes ago";
        case time < 600000:
          return "10 minutes ago";
        case time < 1200000:
          return "20 minutes ago";
        case time < 3600000:
          return "1 hour ago";
        case time < 86400000:
          return "1 day ago";
        case time < 604800000:
          return "1 week ago";
        case time < 2592000000:
          return "1 month ago";
        case time < 31536000000:
          return "1 year ago";
        default:
          return "more than 1 year ago";
      }
    };
  }

  useEffect(() => {
    fetchPosts()

    return () => {
      //cleanup
    }
  },[])

  const fetchPosts = (_page = 1, _limit = 10) => {
    postService.getFeeds({
      page: _page,
      limit: _limit
    }).then((res: any) => {
      setPosts(res.results);
    }).catch((err: any) => {
      console.log(err);
    })
  }
  
  return (
    <VStack spacing={4} width="full">
      <PostsActionComponent refresh={fetchPosts}/>
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
                  <Text>{post.profile.position}</Text>
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

          <CardBody>
            {post.img.length > 0 && (<>
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
            </>)}
            {/* <Grid templateColumns="repeat(2, 1fr)" gap={4}>
            {post.img.slice(0, 4).map((image, index) => (
              <GridItem key={index}>
                <Image
                  objectFit="cover"
                  src={image}
                  alt={`Image ${index + 1}`}
                  width="100%"
                  height="200px"
                />
              </GridItem>
            ))}
            {post.img.length > 4 && (
              <GridItem>
                <Image
                  objectFit="cover"
                  src={`+...(${post.img.length - 4})`}
                  alt={`+...(${post.img.length - 4})`}
                  width="100%"
                  height="200px"
                />
              </GridItem>
            )}
          </Grid> */}
          </CardBody>

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