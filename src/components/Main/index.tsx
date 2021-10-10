import { PlayerButtons } from "../PlayerButtons"
import { RangeSlider } from "../RangeSlider"
import { SongInfo } from "../SongInfo"
import { Container } from "./styles"

export function Main() {
   return (
      <Container>
         <SongInfo />
         <RangeSlider />
         <PlayerButtons />
      </Container>
   )
}