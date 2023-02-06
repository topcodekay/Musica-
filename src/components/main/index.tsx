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
  const charts = [
    {
      id: 'e1',
      title: 'Golden Age of 80s',
      duration: '2:34:45',
      artist: 'Sean Swadder',
    },
    {
      id: 'e1',
      title: 'Reggae \'n\' Blues',
      artist: 'DJ YK Mule',
      duration: '1:02:42',
    },
    {
      id: 'e1',
      title: 'Tomorrow\'s Tunes ',
      artist: 'Obi Datti',
      duration: '2:01:25',
    },
  ]
  return (
    <>
    <Row className={classes.header}>
        <Col xs={12}>
          <Row>
            <Col xs={1} sm={1} md={1} lg={1}>
              <Box pb={10} h={34}>
                <Image src="/img/logo.png" alt="Musica Logo" mt={2}/>
                </Box>
            </Col>
            <Col xs={1} sm={4} md={6} lg={11}>
              <SearchBox />
            </Col>
          </Row>
          <Row>  
            <Col xs={2} sm={2} lg={1}>
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
            <Col xs={7} sm={6}  lg={7}>
            <Banner/>
            </Col>
            <Col xs={5} sm={6}  lg={4}>
              <Chart/>
            {/* <Oldies image='golden.png' title={charts[1].title} artist={charts[1].artist} duration={charts[1].duration}/> */}
            </Col>
          </Row>
            </Col>
      </Row>
    </>
  )
}
