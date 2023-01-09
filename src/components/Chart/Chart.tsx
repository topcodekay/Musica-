import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Oldies from './Oldies'
import Reggae from './Reggae'
import Tunes from './Tunes'
import classes from './Chart.module.scss'

function Chart() {

  return (
    <>
    <Box>
        <Box className={classes.charts}>
            <Text fontSize={24} color={'#fff'} h={29} w={123}>Top Charts</Text>
            <Box>
                <Box><Oldies/></Box>
                
                <Box> <Reggae/> </Box>
                <Tunes/>
                <Box>  </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Chart