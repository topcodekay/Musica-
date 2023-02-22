import React from 'react'
import { Box, Center, Image, Link, ListItem, UnorderedList } from '@chakra-ui/react'
import { Col, Row } from 'react-flexbox-grid'
import logo from '/img/logo.png'
import Profile from '/img/profile.png'
import Logout from '/img/logout.png'
import Search from './SearchBox'
import classes from './Header.module.scss'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  return (
    <>
    <header className={classes.header}>
        <Row>
            <Col xs={12}>
            <Row>
            <Col xs={1} sm={1} md={1} lg={1}>
                <Center>
            <Image src={logo} alt='' mt={3}/>
            </Center>
        </Col>
        <Col xs={1} sm={4} md={6} lg={11}>
            <Search/>
        </Col>
        </Row>
        </Col>
        </Row>
        <HeaderMenu/>
        </header>
    {/* <Row>
    <Col>
    <Box>
        <UnorderedList>
        {nav.map((navbar: any) =>(
            <ListItem key={navbar.title}>
                <Link href={'#'}>{navbar.title}</Link>
            </ListItem>
        ))}
        </UnorderedList>
    </Box>
    <Box>
        <UnorderedList>
        <ListItem>
            <Link href={'#'}> <Image src={Profile} alt='profile'/> </Link>
        </ListItem>
        <ListItem>
            <Link href={'#'}> <Image src={Logout} alt='logout'/> </Link>
        </ListItem>
        </UnorderedList>
    </Box>

</Col>
</Row> */}

    </>
  )
}
