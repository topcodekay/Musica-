import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import classes from './Chart.module.scss'

export default function Oldies () {
  const songText = 'Tomorrow\'s Tunes'
  const artist = 'Obi Datti'
  const songsDuration = '2:01:25'
  return (
    <>
    <Box className={classes.musicButton}>
        <Box>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Box h={96}>
          <Flex alignItems={'center'}>
            <Box h={30} p={10}>
              <Image src='/img/golden.png' alt=''/>
            </Box>
            <Flex>
            <Box>
              <Flex flexDirection={'column'}>
                <Box h={20} p={3}>
                  <Text fontSize='17px'>{songText}</Text>
                </Box>
                <Box className={classes.singer} h={14} p={3}>
                <Text fontSize='12px'>{artist}</Text>
                </Box>
                <Box h={14} p={3}>
                <Text fontSize='12px'>{songsDuration}</Text>
                </Box>
              </Flex>
            </Box>
            </Flex>
            </Flex>
            </Box>
            <Box className={classes.likeSongs}>
              <Image src='/img/likessong.png' alt='' p={20}/>
            </Box>
            </Flex>
        </Box>
    </Box>
    </>
  )
}