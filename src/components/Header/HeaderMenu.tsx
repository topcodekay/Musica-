import React from 'react'
import { Box, Center, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Image, Text, useDisclosure } from '@chakra-ui/react'
import { Col, Row } from 'react-flexbox-grid'
import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from 'react-router-dom'
import Search from './SearchBox'
import home from '/img/hommme.png'
import playlist from '/img/playlists.png'
import Radio from '/img/radio.png'
import Video from '/img/videos.png'
import Profile from '/img/profile.png'
import Logout from '/img/logout.png'
import classes from './Header.module.scss'




export default function HeaderMenu() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <Row>
            <Col xs={12}>
            <Row>
            <Col xs={2} sm={1} smOffset={2} md={1} mdOffset={2} className="d-sm-block d-md-block d-lg-none">
            <Box className={classes.menuHam} onClick={onOpen}>
                <Center>
                    <GiHamburgerMenu/>
                </Center>
            </Box>
            </Col>
            </Row>
            </Col>
        </Row>

<Drawer placement="left" onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay/>
    <DrawerContent>
        <DrawerHeader 
            borderBottomWidth="1px"
            marginLeft="0px"
            marginTop="1px"
            className="d-md-none">
                <Search/>
        </DrawerHeader>
     <DrawerBody>
            {/* <Link to='/'> */}
                <Box>
                <Image src={home} alt='Home logo'/>
                <Text>Home</Text>
                </Box>
            {/* </Link> */}
            {/* <Link to='/playlist'> */}
                <Box>
                <Image src={playlist} alt='Playlist'/>
                <Text>My Collection</Text>
                </Box>
            {/* </Link> */}
            {/* <Link to='.'> */}
                <Box>
                    <Image src={Radio} alt='Radio'/>
                    <Text>Radio</Text>
                </Box>
            {/* </Link> */}
            {/* <Link to='.'> */}
                <Box>
                    <Image src={Video} alt='Music Video'/>
                    <Text>Music Video</Text>
                </Box>
            {/* </Link> */}
            {/* <Link to='/'> */}
                <Box>
                    <Image src={Profile} alt='Video'/>
                    <Text>Profile</Text>
                </Box>
            {/* </Link> */}
            {/* <Link to='/'> */}
                <Box>
                    <Image src={Logout} alt='Logout'/>
                    <Text>Logout</Text>
                </Box>
            {/* </Link> */}
    </DrawerBody>
    </DrawerContent>
</Drawer>
    </>
  )
}
