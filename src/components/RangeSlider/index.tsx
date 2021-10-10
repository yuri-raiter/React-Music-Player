import { useContext, useEffect, useState } from "react";
import { AudioContext } from "../../contexts/AudioRefContext";
import { Container, Input } from "./styles";

export function RangeSlider() {
   const [duration, setDuration] = useState<string>('')

   const { audioRef, timePercentage, timeProgress, setTimePercentage } = useContext(AudioContext)
   const { current } = audioRef

   useEffect(() => {
      if (current?.duration) {
         const time = current.duration / 60
         const minutes = Math.trunc(time)
         const seconds = ('0' + Math.trunc((time - minutes) * 60))

         setDuration(`${minutes}:${seconds.slice(-2)}`)
      }
   }, [current?.duration])

   function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
      setTimePercentage(e.target.value)
      if (current)
         current.currentTime = (+e.target.value * current?.duration) / 100
   }

   return (
      <Container>
         <p className="left">{timeProgress}</p>
         <p className='right'>{duration}</p>
         <Input type='range'
            min='0'
            max='100'
            value={timePercentage}
            afterWidth={+timePercentage}
            onChange={(e) => handleOnChange(e)}
         />
      </Container>
   )
}