import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Col, Row } from 'react-flexbox-grid'
import classes from './New.module.scss'

export default function NewRelease() {
  return (
    <>
    <Row className={classes.release}>
      <Col xs={12}>
      <Row>
        <Col lg={11} lgOffset={1}>
        <Box  overflowX={'hidden'}>
        <Box color={'#fff'} fontSize={22}>New Release</Box>
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
         </Col>
      </Row>
      </Col>
    </Row>
    
    </>
  )
}
