import libraryIcon from '../../images/icons/library.svg'
import { ILibraryButton } from '../../types'
import { Container } from './styles'

export function LibraryButton({ handleOpenLibrary }: ILibraryButton) {
   return (
      <Container onClick={handleOpenLibrary}>
         <img src={libraryIcon} alt="" />
         <h2>Library</h2>
      </Container>
   )
}