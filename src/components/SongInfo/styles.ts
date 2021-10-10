import styled from 'styled-components'

export const Container = styled.div`
   img {
      width: 25rem;
      border-radius: 1rem;
   }

   div {
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
         font-size: 1.5rem;
         margin: 0.5rem 0 0.3rem 0;
         letter-spacing: 0.1rem;
      }
      h2 {
         font-size: 1.1rem;
         opacity: 0.5;
      }
   }
`