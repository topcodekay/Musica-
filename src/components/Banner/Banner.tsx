import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Likes from './likes'
import classes from './Banner.module.scss'

export default function Banner() {
    let playlist = 'Curated playlist'
    let hits = 'R & B Hits'
    let songsList = 'All mine, Lie again, Petty call me everyday, Out of time, No love, Bad Habit, and so much more.'
  return (
    <>
        <Box className={classes.container}>
            <Box className={classes.banner}>
                <Flex>
                <Box p={20}>
            <Flex flexDirection={'column'}>
                <Text fontSize={14} color='#fff' p={10}>
                    {playlist}
                </Text>
                <Box p={10}>
                <Heading  as={'h2'} fontSize={35} color='#fff' fontFamily={'Quicksand'} fontWeight='700' w={167} h={14}>
                    {hits}
                </Heading>
                <Text fontSize={16} color='#fff' w={276} h={51} zIndex={10}>
                    {songsList}
                </Text>
                </Box>
                <Box p={10}>
                    <Likes/>
                </Box>
            </Flex>
            </Box>
            <Box>
            <Box className={classes.imgStyle}>
                <Image src='/img/vector.png' alt='' w={'100%'} h={'373px'}/>
            </Box>
            </Box>
            </Flex>
            </Box>
        </Box>
    </>
  )
}
