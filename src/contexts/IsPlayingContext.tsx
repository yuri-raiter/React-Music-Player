import { createContext, useState } from "react";
import { IPlayContext, IProvider } from "../types";

export const PlayContext = createContext<IPlayContext>(
   {} as IPlayContext
)

export function PlayProvider({ children }: IProvider) {
   const [isPlaying, setIsPlaying] = useState<boolean>(false)
   const [autoPlay, setAutoPlay] = useState<boolean>(false)

   return (
      <PlayContext.Provider value={{
         isPlaying, 
         setIsPlaying, 
         autoPlay, 
         setAutoPlay
      }}>
         { children }
      </PlayContext.Provider>
   )
}