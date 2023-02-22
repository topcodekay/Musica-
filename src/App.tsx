import { Box } from '@chakra-ui/react'
import Header from './components/Header/Header'
import HomePage from './components/Home/HomePage'
import SideBar from './components/SideBar/SideBar'
import "../styles/globals.scss"
import classes from './components/Header/Header.module.scss'

function App() {

  return (
    <Box className={classes.header}>
      {/* <HeaderMain/> */}
      {/* <NewRelease/> */}
      {/* <Player/> */}
      <Header/>
      <main className='d-flex flex'>
      <SideBar/>
      <HomePage/>
      </main>
    </Box>
  )
}

export default App
