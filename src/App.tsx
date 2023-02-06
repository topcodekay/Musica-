import { Box } from '@chakra-ui/react'
import Chart from './components/Chart/Chart'
import Oldies from './components/Chart/Oldies';
import { HeaderMain } from './components/main'
import NewRelease from './components/NewRelease';
import Player from './components/Player';

function App() {

  return (
    <Box>
      <HeaderMain/>
      <NewRelease/>
      <Player/>
    </Box>
  )
}

export default App
