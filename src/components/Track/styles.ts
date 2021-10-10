import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   padding: 0.5rem;
   transition: all .2s ease;
   cursor: pointer;

   &:hover {
      background: rgba(255, 255, 255, 0.1);
   }

   & + div {
      margin-top: 1.5rem;
   }

   img {
      border-radius: 1rem;
   }

   div {
      margin-left: 1rem;

      h2 {
         color: ${props => props.color}
      }

      h3 {
         opacity: 0.5;
      }
   }

   @media (min-width: 300px) {
      img {
         width: 8rem;
      }

      div {
         h2 {
            font-size: 1.7rem;
         }

         h3 {
            font-size: 1.1rem;
         }
      }
   }

   @media (min-width: 700px) {
      img {
         width: 6rem;
      }

      div {
         h2 {
            font-size: 1.5rem;
         }

         h3 {
            font-size: 1rem;
         }
      }
   }

   @media (min-width: 900px) {
      img {
         width: 4rem;
      }

      div {
         h2 {
            font-size: 1.1rem;
         }

         h3 {
            font-size: 0.9rem;
         }
      }
   }

   @media (min-width: 1400px) {
      img {
         width: 3rem;
      }

      div {
         h2 {
            font-size: 1rem;
         }

         h3 {
            font-size: 0.8rem;
         }
      }
   } 
`