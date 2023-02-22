import React from 'react'
import { Box, Text, Image, Heading, Flex } from '@chakra-ui/react'
import classes from './Chart.module.scss'
import fave from '/img/likessong.png'

function Chart({img, title, artist, duration} : any) {

  return (
    <>
    <Box className={classes.musicButton}>
        <Flex>
            <Box p={5}>
                <Image src={img} alt='music image' w={'63px'} h={'63px'} borderRadius={'10px'}/>
            </Box>
            <Flex justifyContent={'space-between'} alignItems={'center'}>
              <article>
                <Heading as={'h5'} w='144px' h='20px' color={'#fff'} fontSize='sm'>{title}</Heading>
                <Text fontSize={'xs'}>{artist}</Text>
                <Text fontSize={'xs'}>{duration}</Text>
              </article>
              <Box>
                <Image src={fave} alt='heart'/>
              </Box>
            </Flex>
        </Flex>
    </Box>
    </>
  )
}

export default Chart