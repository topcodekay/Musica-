import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { Row, Col } from 'react-flexbox-grid'

export default function Intro() {
  return (
    <>
    <Row>
        <Col xs={12}>
            <Row>
                <Col xs lg={3}>
                    <Box>
                        <Image src="/img/logo.png" alt='Musica'/>
                    </Box>
                </Col>
            </Row>
        </Col>
    </Row>
    </>
  )
}
