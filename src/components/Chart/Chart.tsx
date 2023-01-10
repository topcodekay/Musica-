import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Oldies from './Oldies'
import Reggae from './Reggae'
import Tunes from './Tunes'
import classes from './Chart.module.scss'

function Chart() {

  return (
    <>
    <Box display={'flex'} flexDirection={'column'} gap={10}>
        <Box fontSize={24} color={'#fff'}>Top Charts</Box>
        <Box className={classes.charts}>
            <Box display={'flex'} flexDirection={'column'} gap={10}>
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