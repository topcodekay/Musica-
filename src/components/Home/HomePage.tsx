import React from 'react'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Likes from './likes'
import classes from './Homepage.module.scss'
import Chart from '../Chart/Chart'
import PlaylistMusic from './PlayListmusic'

export default function HomePage() {
    let playlist = 'Curated playlist'
    let hits = 'R & B Hits'
    let songsList = 'All mine, Lie again, Petty call me everyday, Out of time, No love, Bad Habit, and so much more.'

    const topCharts = PlaylistMusic.map(data => {
        return (
            <Chart 
            key={data.id}
            img={data.images}
            title={data.name}
            artist={data.owner}
            duration={data.timestamp}
            />
        )
    })

  return (
    <>
    <Box display={'flex'} justifyContent={'space-between'} gap={5} className={classes.reposition}>
        <Box className={classes.container}>
            <Box className={classes.banner}>
                <Flex>
                
             <Flex flexDirection={'column'}>
                <Text fontSize={14} color='#fff' p={10}>
                    {playlist}
                </Text>
                <Box p={10}>
                <Heading  as={'h2'} fontSize={35} color='#fff' fontFamily={'Quicksand'} fontWeight='700' w={167}>
                    {hits}
                </Heading>
                <Text fontSize={16} color='#fff' w={256} h={51}>
                    {songsList}
                </Text>
                </Box>
                <Box p={10}>
                    <Likes/>
                </Box>
              </Flex>
              {/* <Box>
                <Image src='/img/artist.png' alt='background'/> */}
              <Box>
                <Image src='/img/vector.png' alt='' className="d-sm-none d-lg-block" w={'100%'} h={'100%'}/>
                <Image src='/img/smallscreen.png' alt='' className="d-sm-block d-lg-none"/>
              </Box>
            {/* </Box> */}
            </Flex>
            </Box>
        </Box>
        <Box className={classes.xsmallscreen}>
            <Text fontSize={'lg'} color={'#fff'} pb={3}>Top Charts</Text>
        <Box display={'flex'} flexDirection={'column'} gap={'10px'}>
            {topCharts}
            </Box>
        </Box>
            </Box>
    </>
  )
}
