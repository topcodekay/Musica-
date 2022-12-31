import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import classes from './Chart.module.scss'

export default function Oldies() {
  const songText = 'Golden age of 80s'
  const artist = 'Sean Swadder'
  const songsDuration = '2:34:45'
  return (
    <>
    <Box className={classes.musicButton}>
        <Box>
          <Flex>
            <Box>
              <Image src='/img/golden.png' alt='' w={63} h={63}/>
            </Box>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
            <Box>
              <Flex flexDirection={'column'}>
                <Box h={20} p={5}>
                  <Text fontSize='17px'>{songText}</Text>
                </Box>
                <Box className={classes.singer} h={14} p={5}>
                <Text fontSize='12px'>{artist}</Text>
                </Box>
                <Box h={14} p={5}>
                <Text fontSize='12px'>{songsDuration}</Text>
                </Box>
              </Flex>
            </Box>
            <Box>
              <Image src='/img/likessong.png' alt=''/>
            </Box>
            </Flex>
            </Flex>
        </Box>
    </Box>
    </>
  )
}
