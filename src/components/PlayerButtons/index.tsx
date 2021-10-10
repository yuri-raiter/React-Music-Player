import { useContext } from 'react'
import play from '../../images/icons/play.svg'
import pause from '../../images/icons/pause.svg'
import previous from '../../images/icons/previous.svg'
import next from '../../images/icons/next.svg'
import { Container } from './styles'
import { PlayContext } from '../../contexts/IsPlayingContext'
import { AudioContext } from '../../contexts/AudioRefContext'
import { TracksContext } from '../../contexts/TracksContext'

export function PlayerButtons() {
   const { isPlaying, setIsPlaying, setAutoPlay } = useContext(PlayContext)
   const { audioRef, loop, shuffle, setLoop, setShuffle } = useContext(AudioContext)
   const { tracks, current, setCurrent } = useContext(TracksContext)

   function handlePlay() {
      const { current } = audioRef

      if (current) {
         if (current.paused && !isPlaying) {
            current.play()
         }
         else {
            current.pause()
         }
   
         setIsPlaying(!isPlaying)
      }
   }

   function handleNextAndPrev(action: string) {
      tracks.forEach((t, index) => {
         if (t.id === current.id) {
            if (action === 'next') {
               if (index === tracks.length - 1)
                  setCurrent(tracks[0])
               else
                  setCurrent(tracks[index + 1])
            }
            else {
               if (index === 0)
                  setCurrent(tracks[tracks.length - 1])
               else
                  setCurrent(tracks[index - 1])
            }
         }
      })
      if (!isPlaying) setIsPlaying(!isPlaying)
      
      setAutoPlay(true)
   }

   function handleLoop() {
      setLoop(!loop)
   }

   function handleShuffle() {
      setShuffle(!shuffle)
   }

   return (
      <Container loop={loop} shuffle={shuffle}>
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleShuffle}>
            <path d="M10.59 9.17L6.11997 4.7C5.72997 4.31 5.09997 4.31 4.70997 4.7C4.31997 5.09 4.31997 5.72 4.70997 6.11L9.16997 10.57L10.59 9.17ZM15.35 4.85L16.54 6.04L4.69997 17.88C4.30997 18.27 4.30997 18.9 4.69997 19.29C5.08997 19.68 5.71997 19.68 6.10997 19.29L17.96 7.46L19.15 8.65C19.46 8.96 20 8.74 20 8.29V4.5C20 4.22 19.78 4 19.5 4H15.71C15.26 4 15.04 4.54 15.35 4.85V4.85ZM14.83 13.41L13.42 14.82L16.55 17.95L15.35 19.15C15.04 19.46 15.26 20 15.71 20H19.5C19.78 20 20 19.78 20 19.5V15.71C20 15.26 19.46 15.04 19.15 15.36L17.96 16.55L14.83 13.41V13.41Z" fill="#E1DDE7" fillOpacity="0.5" className="shuffle"/>
         </svg>

         <img src={previous} alt="" onClick={() => handleNextAndPrev('prev')} />
         <img src={isPlaying ? pause : play} alt="" onClick={handlePlay} />
         <img src={next} alt="" onClick={() => handleNextAndPrev('next')} />

         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleLoop}>
            <path d="M12 4.00003V2.21003C12 1.76003 11.46 1.54003 11.15 1.86003L8.35 4.65003C8.15 4.85003 8.15 5.16003 8.35 5.36003L11.14 8.15003C11.46 8.46003 12 8.24003 12 7.79003V6.00003C15.31 6.00003 18 8.69003 18 12C18 12.79 17.85 13.56 17.56 14.25C17.41 14.61 17.52 15.02 17.79 15.29C18.3 15.8 19.16 15.62 19.43 14.95C19.8 14.04 20 13.04 20 12C20 7.58003 16.42 4.00003 12 4.00003ZM12 18C8.69 18 6 15.31 6 12C6 11.21 6.15 10.44 6.44 9.75003C6.59 9.39003 6.48 8.98003 6.21 8.71003C5.7 8.20003 4.84 8.38003 4.57 9.05003C4.2 9.96003 4 10.96 4 12C4 16.42 7.58 20 12 20V21.79C12 22.24 12.54 22.46 12.85 22.14L15.64 19.35C15.84 19.15 15.84 18.84 15.64 18.64L12.85 15.85C12.54 15.54 12 15.76 12 16.21V18V18Z" fill="#E1DDE7" fillOpacity="0.5" className="loop"/>
         </svg>
      </Container>
   )
}