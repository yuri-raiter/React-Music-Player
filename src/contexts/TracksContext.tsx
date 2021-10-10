import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IProvider, ITracksContext, ITracks } from "../types";

export const TracksContext = createContext<ITracksContext>(
   {} as ITracksContext
)

export function TracksProvider({ children }: IProvider) {
   const [tracks, setTracks] = useState<ITracks[]>([])
   const [current, setCurrent] = useState<ITracks>(
      {} as ITracks
   )

   useEffect(() => {
      api.get('library')
         .then(res => {
            setTracks(res.data)
            return res
         })
         .then(res => setCurrent(res.data[0]))
   }, [])

   return (
      <TracksContext.Provider value={{ tracks, current, setCurrent }}>
         {children}
      </TracksContext.Provider>
   )
}