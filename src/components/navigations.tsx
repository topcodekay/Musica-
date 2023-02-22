import { Image } from "@chakra-ui/react"
import home from '/img/hommme.png'
import playlist from '/img/playlists.png'
import radio from '/img/radio.png'
import video from '/img/videos.png'

const navigation = () => [
    {
        title: <Image src={home} alt=''/>
    },
    {
        title: <Image src={playlist} alt=''/>
    },
    {
        title: <Image src={radio} alt=''/>
    },
    {
        title: <Image src={video} alt=''/>
    }
]

export default navigation
