import { GlobalStyle } from './styles/global'
import { createServer } from 'miragejs'
import { library } from './utils/data'
import { TracksProvider } from './contexts/TracksContext'
import { Library } from './components/Library'
import { useState } from 'react'
import Modal from 'react-modal'

import { Main } from './components/Main'
import { LibraryButton } from './components/LibraryButton'
import { PlayProvider } from './contexts/IsPlayingContext'
import { AudioProvider } from './contexts/AudioRefContext'

createServer({
   routes() {
      this.namespace = 'api'

      this.get('library', () => library)
   }
})

Modal.setAppElement('#root');

export function App() {
   const [isLibraryOpen, setIsLibraryOpen] = useState(false)

   function handleOpenLibrary() {
      return setIsLibraryOpen(true)
   }

   function handleCloseLibrary() {
      return setIsLibraryOpen(false)
   }

   return (
      <div className="App">
         <TracksProvider>
            <LibraryButton handleOpenLibrary={handleOpenLibrary} />
            <PlayProvider>
               <AudioProvider>
                  <Main />
                  <Library isOpen={isLibraryOpen} onRequestClose={handleCloseLibrary} />
               </AudioProvider>
            </PlayProvider>
         </TracksProvider>
         <GlobalStyle />
      </div>
   );
}
