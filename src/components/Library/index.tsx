import { useContext } from "react";
import { TracksContext } from "../../contexts/TracksContext";
import Modal from 'react-modal'
import { ILibrary } from "../../types";
import { Track } from "../Track";
import { Container } from "./styles";
import close from '../../images/icons/close.svg'

export function Library({ isOpen, onRequestClose }: ILibrary) {
   const { tracks } = useContext(TracksContext)

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
         closeTimeoutMS={500}
      >
         <Container>
            <img 
               src={close} 
               alt="" 
               className="icon" 
               onClick={onRequestClose}
            />
            {tracks.map(t => 
               <Track track={t} key={t.id}/>
            )}
         </Container>
      </Modal>
   )
}