import React from 'react'
import { Box, Center, Image, ListItem, UnorderedList } from '@chakra-ui/react'
import { Col, Row } from 'react-flexbox-grid'
import classes from './SideBar.module.scss'
import { Link } from 'react-router-dom'
import home from '/img/hommme.png'
import playlist from '/img/playlists.png'
import radio from '/img/radio.png'
import video from '/img/videos.png'
import profile from '/img/profile.png'
import logout from '/img/logout.png'

export default function SideBar() {
  return (
    <>
    <aside className='d-sm-none d-md-none d-lg-block'>
      <Row>
        <Col lg={12}>
        <Row>
          <Col lg={1}>
            <Box pt={2}>
            <Box className={classes.icon}>
              <Box p={3}>
                <Image src={home} alt='home'/>
              </Box>
              <Box p={3}>
                <Image src={playlist} alt='playlist'/>
              </Box>
              <Box p={3}>
                <Image src={radio} alt='radio'/>
              </Box>
            
              <Box p={3}>
                <Image src={video} alt='video'/>
              </Box>
            </Box>
            </Box>
          </Col>
        </Row>
        <Row>
          <Col lg={1}>
            <Box pt={5}>
              <Box className={classes.icons}>
                <Box p={3}>
                  <Image src={profile} alt='profile'/>
                </Box>
                <Box p={3}>
                  <Image src={logout} alt='logout'/>
                </Box>
              </Box>
            </Box>
          </Col>
        </Row>
        </Col>
      </Row>
    </aside>
    </>
  )
}
