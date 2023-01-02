import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Oldies from './Oldies'
import Reggae from './Reggae'
import Tunes from './Tunes'


function Chart() {

  return (
    <>
    <Box>
        <Box>
            <Text fontSize={24} color={'#fff'}>Top Charts</Text>
            <Box>
                <Oldies/>
                <Reggae/>
                <Tunes/>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Chart