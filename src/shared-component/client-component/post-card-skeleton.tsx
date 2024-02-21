import { Card, CardHeader, Flex, SkeletonCircle, SkeletonText, CardBody, Box } from '@chakra-ui/react'
import React from 'react'
import { ref } from 'yup'

export default function PostCardSkeletonsComponent() {
    return (
        <Card
            maxW='lg'
            width='full'
        >
            <CardHeader>
                <Flex gap={4}>
                    <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                        <SkeletonCircle size='12' />
                        <Box width={'60%'}>
                            <SkeletonText noOfLines={2} spacing='4' skeletonHeight='3' />
                        </Box>
                    </Flex>
                </Flex>
            </CardHeader>
            <CardBody>
                <SkeletonText mt='4' noOfLines={2} spacing='4' skeletonHeight='2' />
            </CardBody>
            {/* <CardBody>
                <Skeleton
                    height='300px'
                    width='100%'
                />
            </CardBody> */}
        </Card>
    )
}
