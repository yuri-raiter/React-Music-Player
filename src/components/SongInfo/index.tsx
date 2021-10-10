import { useContext } from "react";
import { TracksContext } from "../../contexts/TracksContext";
import { Container } from "./styles";

export function SongInfo() {
   const { current } = useContext(TracksContext)
   const { album, name, author } = current

   return (
      <Container>
         <img src={album} alt="" />
         <div>
            <h1>{name}</h1>
            <h2>{author}</h2>
         </div>
      </Container>
   )
}