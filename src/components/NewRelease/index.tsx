import { Box, Image } from '@chakra-ui/react'
import React from 'react'

export default function NewRelease() {
  return (
    <>
    <Box  overflowX={'hidden'}>
        <Box color={'#fff'} fontSize={22} padding={10}>New Release</Box>
        <Box display={'flex'} gap={20} justifyContent={'space-between'} alignItems={'center'}>
            <Box> <Image src='/img/newrelease1.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease2.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease3.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease4.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease5.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease6.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease1.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease3.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease1.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease5.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease1.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease2.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease4.png' alt=''/> </Box>
            <Box> <Image src='/img/newrelease5.png' alt=''/> </Box>
        </Box>
    </Box>
    </>
  )
}
