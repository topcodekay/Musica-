import React from 'react'
import {Box, Image, Center, UnorderedList, ListItem} from '@chakra-ui/react'
import {Row, Col,} from 'react-flexbox-grid'
import SearchBox from './SearchBox'
import classes from "./Header.module.scss";
import Home from '../Banner/Home';
import Playlist from '../Banner/Playlist';
import Radio from '../Banner/Radio';
import Video from '../Banner/Video';
import Profile from '../Banner/Profile';
import Logout from '../Banner/Logout';
import Banner from '../Banner/Banner';
import Oldies from '../Chart/Oldies';
import Chart from '../Chart/Chart';
import NewRelease from '../NewRelease';
import Player from '../Player';


export const HeaderMain = () => {
  return (
    <>
    <Row className={classes.header}>
        <Col sm={12}>
          <Row>
            <Col lg={1}>
              <Box pb={10} h={34}>
                <Image src="/img/logo.png" alt="Musica Logo" mt={2}/>
                </Box>
            </Col>
            <Col lg={11}>
              <SearchBox />
            </Col>
          </Row>
          <Row>  
            <Col lg={1}>
            <Box pt={10}>
              <Box  className={classes.icons}>
                <Box marginLeft={-8} p={10}><Home/></Box>
                <Box p={10}><Playlist/></Box>
                <Box p={10}><Radio/></Box>
                <Box p={10}><Video/></Box>
              </Box>
              </Box>
              <Box pt={10}>
              <Box  className={classes.icon}>
                <Box p={10}> <Profile/> </Box>
                <Box p={10}> <Logout/> </Box>
              </Box>
              </Box>
            </Col>
            <Col xs={2} lg={7}>
            <Banner/>
            </Col>
            <Col xs={1} lg={4}>
              <Chart/>
            </Col>
          </Row>
          <Row>
            <Col lg={11} lgOffset={1}>
            <NewRelease/>
            </Col>
          </Row>
            </Col>
      </Row>
            <Player/>
    </>
  )
}
