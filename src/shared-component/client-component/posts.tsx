'use client'
import React, { useState } from 'react';
import { Box, Text, Textarea, Button, VStack, HStack, Avatar, Card, CardBody, CardFooter, CardHeader, Flex, Heading, IconButton } from '@chakra-ui/react';
import { useFormik } from "formik";
import { AttachmentIcon } from '@chakra-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { BiLike, BiChat, BiShare } from 'react-icons/bi';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Image } from '@chakra-ui/react';
import { Grid, GridItem } from "@chakra-ui/react";

const mockPosts = [
  {
    id: 1,
    content: 'this is the first post! I love you very much',
    img: [
      "https://via.placeholder.com/800x800?text=First+Image",
      "https://via.placeholder.com/800x800?text=Second+Image",
      "https://via.placeholder.com/800x800?text=Third+Image",
      "https://via.placeholder.com/800x800?text=Fourth+Image",
      // "https://via.placeholder.com/800x800?text=Fifth+Image",
    ],
    createdAt: new Date(),
    profile: {
      avartar: "https://via.placeholder.com/150x150?text=Avatar+Image",
      fullName: "John Doe",
      position: "Software Engineer"
    }
  },
  {
    id: 2,
    content: 'this is the second post! I love you very much',
    img: [
      "https://via.placeholder.com/800x800?text=First+Image",
    ],
    createdAt: new Date(),
    profile: {
      avartar: "https://via.placeholder.com/150x150?text=Avatar+Image",
      fullName: "John Doe",
      position: "Software Engineer"
    }
  },
  {
    id: 3,
    content: 'this is the third post! I love you very much',
    img: [
      "https://via.placeholder.com/800x800?text=First+Image",
      "https://via.placeholder.com/800x800?text=Second+Image",
    ],
    createdAt: new Date(),
    profile: {
      avartar: "https://via.placeholder.com/150x150?text=Avatar+Image",
      fullName: "John Doe",
      position: "Software Engineer"
    }
  },
];
export default function PostsComponent() {
  const [posts, setPosts] = useState(mockPosts);
<<<<<<< Updated upstream

  const formik = useFormik({
    initialValues: {
      newPost: ''
    },
    onSubmit: (values) => {
      console.log('values', values);
    }
  });

  const handlePostChange = (event: { target: { value: string } }) => {
    formik.setFieldValue('newPost', event.target.value);
  };

  const handlePostSubmit = () => {
    console.log('newPost', formik.values.newPost);

  };

=======
  const postTime = (createdDate: Date) => {
    //generate and return post time to sting
    const now = new Date();
    
  }
>>>>>>> Stashed changes
  return (
    <VStack spacing={4} width="full">
      <Box
        width="full"
        maxW='lg'
        // paddingLeft={5} 
        // paddingRight={5}
        display="flex"
        flexDirection="column"
        gap={4}
        alignItems={"end"}
      >
        <Textarea
          value={formik.values.newPost}
          onChange={handlePostChange}
          placeholder="Write your post here..."
        />
        <HStack spacing={4} justify='end' width="full">
          <Button><FontAwesomeIcon icon={faImages} /></Button>
          <Button onClick={handlePostSubmit}>Post</Button>
        </HStack>
      </Box>
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
                <Avatar name={post.profile.fullName} src={post.profile.avartar} />
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