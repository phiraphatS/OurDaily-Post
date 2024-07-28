import React, { Suspense } from 'react'
import { Box } from '@chakra-ui/react'
import CarouselComponent from '@/shared-component/client-component/carousel';

export default function CongratulationComponent() {
  return (
      <Box width="full" overflow="hidden">
        <CarouselComponent/>
      </Box>
  )
}
