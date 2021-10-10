import { createContext, useContext, useRef, useState } from "react";
import { IAudioContext, IProvider } from "../types";
import { PlayContext } from "./IsPlayingContext";
import { TracksContext } from "./TracksContext";

export const AudioContext = createContext<IAudioContext>(
   {} as IAudioContext
)

export function AudioProvider({ children }: IProvider) {
   const audioRef = useRef<HTMLAudioElement>(null)

   const [timePercentage, setTimePercentage] = useState<string>('0')
   const [timeProgress, setTimeProgress] = useState<string>('0:00')
   const [currentTime, setCurrentTime] = useState<number>(0)
   const [duration, setDuration] = useState<number>(0)
   const [loop, setLoop] = useState<boolean>(false)
   const [shuffle, setShuffle] = useState<boolean>(false)

   const { autoPlay, setAutoPlay } = useContext(PlayContext)
   const { tracks, current, setCurrent } = useContext(TracksContext)
   const { track } = current

   function handleOnLoadedMetadata(e: React.SyntheticEvent<HTMLAudioElement, Event>) {
      setDuration(e.currentTarget.duration)
   }

   function handleCurrentTime(e: React.SyntheticEvent<HTMLAudioElement, Event>) {
      setCurrentTime(e.currentTarget.currentTime)
      const percentage = (currentTime * 100) / duration

      setTimePercentage(`${Math.trunc(percentage)}`)

      const time = currentTime / 60
      const minutes = Math.trunc(time)
      const seconds = ('0' + Math.trunc((time - minutes) * 60))

      setTimeProgress(`${minutes}:${seconds.slice(-2)}`)
   }

   function handleOnEnded() {
      tracks.forEach((t, index) => {
         if (t.id === current.id) {
            if (shuffle) {
               const i = Math.floor((Math.random() * tracks.length))
               setCurrent(tracks[i])
            }
            else {
               if (index === tracks.length - 1)
                  setCurrent(tracks[0])
               else
                  setCurrent(tracks[index + 1])
            }

            setAutoPlay(true)
         }
      })
   }

   return (
      <AudioContext.Provider value={{ audioRef, timePercentage, timeProgress, loop, shuffle, setTimePercentage, setLoop, setShuffle }}>
         {children}
         <audio
            ref={audioRef}
            src={track}
            autoPlay={autoPlay ? true : false}
            onTimeUpdate={e => handleCurrentTime(e)}
            onEnded={handleOnEnded}
            onLoadedMetadata={e => handleOnLoadedMetadata(e)}
            loop={loop}
         ></audio>
      </AudioContext.Provider>
   )
}