import React from 'react'
import { Box, Flex, Image, Link, Text } from '@chakra-ui/react'
import classes from "./Banner.module.scss"

export default function Likes() {
    let songLikes = '33K Likes'
  return (
    <> 
    <Box pb={10}>
        <Flex justifyContent='spaceBetween'  alignItems='center' gap='8' minWidth='100%'>
    <Box>
          <Link href={'#'}>
            <a>
        <Flex minWidth='fit-content' mr={1}>
        <Image src='/img/ellipse2.png' alt=''  className={classes.image}/>
        <Image src='/img/ellipse3.png' alt=''  className={classes.image}/>
        <Image src='/img/ellipse4.png' alt=''  className={classes.image}/>
        <Image src='/img/ellipse5.png' alt=''  className={classes.image}/>
        <Image src='/img/ellipse6.png' alt=''  className={classes.image}/>
      </Flex>
        </a>
        </Link>
      </Box>
      <Box pr={10} pl={10}>
        <Image src='/img/love.png' alt=''/>
      </Box>

      <Box>
        <Text fontSize='xs' pr={-1} className={classes.text}>{songLikes}</Text>
      </Box>
      </Flex>
    </Box>
    </>
  )
}
