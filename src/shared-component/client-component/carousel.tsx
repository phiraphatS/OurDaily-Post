'use client'
import React, { useEffect, useTransition } from 'react';
import { Box, Button, Image } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from 'next-nprogress-bar';

export default function CarouselComponent() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const goToLogin = () => {
    startTransition(() => {
      router.push('/authen');
    })
  }
  
  return (
    <Box width="full" height="100vh" overflow="hidden">
      <Carousel 
        showThumbs={false} 
        dynamicHeight={true} 
        useKeyboardArrows={false} 
        autoPlay={true} 
        infiniteLoop={true} 
        showStatus={false}
        showArrows={false}
        swipeable={false}
        showIndicators={false}
        interval={3000}
        transitionTime={1300}
      >
        {[
          "/assets/background/page-background2.png",
        ].map((src, index) => (
          <div key={index}>
            <Image 
              style={{
                height: "100vh",
                width: "auto",
                objectFit: "cover"
              }} 
              src={src} 
              alt={`Slide ${index + 1}`} 
            />

              <div
                style={{
                  width: "100%",
                  height: "100%",
                  backdropFilter: "brightness(0.6)",
                  position: "absolute",
                  top: 0,
                  left: 0,
                }} 
              ></div>
          </div>
        ))
        }
      </Carousel>

      {/* create link text on middle of page */}
      <Box 
        position="absolute" 
        top="50%" 
        left="50%" 
        transform="translate(-50%, -50%)" 
        textAlign="center"
        color="white"
        display="flex"
        flexDirection="column"
        gap={4}
        background={`rgba(0, 0, 0, 0.5)`}
        borderRadius={10}
        padding={4}
        >
        <h1 style={{ fontSize: "1.3rem", fontWeight: "bolder", whiteSpace: "nowrap" }}>Pitchanan Boonthan</h1>
        <Button colorScheme='pink' variant="solid" onClick={goToLogin}>
          Let's Start
        </Button>
      </Box> 
    </Box>
  );
}