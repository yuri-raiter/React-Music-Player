import { ReactNode } from "react";

export interface ITracks {
   id: number
   name: string
   author: string
   album: string
   track: string
}

export interface ITracksContext {
   tracks: ITracks[]
   current: ITracks
   setCurrent: React.Dispatch<React.SetStateAction<ITracks>>
}

export interface IAudioContext extends IPlayerButtons{
   timePercentage: string
   timeProgress: string
   loop: boolean
   shuffle: boolean
   setTimePercentage: React.Dispatch<React.SetStateAction<string>>
   setLoop: React.Dispatch<React.SetStateAction<boolean>>
   setShuffle: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IPlayContext {
   isPlaying: boolean
   setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
   autoPlay: boolean
   setAutoPlay: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IProvider {
   children: ReactNode
}

export interface ILibrary {
   isOpen: boolean
   onRequestClose: () => void
}

export interface ITrack {
   track: ITracks
}

export interface ILibraryButton {
   handleOpenLibrary: () => void
}

export interface IPlayerButtons {
   audioRef: React.RefObject<HTMLAudioElement>
}

export interface IInputRangeSlider {
   afterWidth: number
}

export interface IPlayerButtonsContainer {
   loop: boolean
   shuffle: boolean
}