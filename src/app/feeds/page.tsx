import PostsComponent from '@/shared-component/client-component/posts'
import { Box } from '@chakra-ui/react'
import React from 'react'

export default function FeedsComponent() {
  return (
    <Box py={10} px={4} h='100%'>
      <Box pt={5} pb={10} bg="#fff" h='100%' borderRadius={10}>
        <PostsComponent/>
      </Box>
    </Box>
  )
}
