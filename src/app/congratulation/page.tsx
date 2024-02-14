import React, { Suspense } from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from '@/styles/congratulation/congratulation.module.scss'
import { Box } from '@chakra-ui/react'
import CarouselComponent from '@/shared-component/client-component/carousel';

export default function CongratulationComponent() {
  return (
      <Box width="full" overflow="hidden">
        <CarouselComponent/>
      </Box>
  )
}
