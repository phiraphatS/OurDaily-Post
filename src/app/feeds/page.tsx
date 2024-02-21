import PostsComponent from '@/shared-component/client-component/posts'
import { Box } from '@chakra-ui/react'
import React from 'react'

export default function FeedsComponent() {
  return (
    <Box paddingTop={20} paddingBottom={10}>
      <PostsComponent/>
    </Box>
  )
}
