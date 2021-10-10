import { useContext } from "react"
import { PlayContext } from "../../contexts/IsPlayingContext"
import { TracksContext } from "../../contexts/TracksContext"
import { ITrack } from "../../types"
import { Container } from "./styles"

export function Track({ track }: ITrack) {
   const { id, album, name, author } = track
   const { current, setCurrent } = useContext(TracksContext)
   const { isPlaying, setIsPlaying, setAutoPlay } = useContext(PlayContext)

   function handleCurrent() {
      if (id !== current.id) setCurrent(track)
      if (!isPlaying) setIsPlaying(!isPlaying)

      setAutoPlay(true)
   }

   return (
      <Container 
         color={
            id === current.id ? '#F05453' : '#E1DDE7'
         }
         onClick={handleCurrent}
      >
         <img src={album} alt="" />
         <div>
            <h2>{name}</h2>
            <h3>{author}</h3>
         </div>
      </Container>
   )
}