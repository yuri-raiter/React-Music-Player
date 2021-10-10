import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: center;
   margin: 0.5rem 0 0 0.5rem;
   padding: 0.3rem 0.5rem;
   border-radius: 0.5rem;
   cursor: pointer;
   transition: all .2s ease;
   width: fit-content;

   &:hover {
      background: rgba(255, 255, 255, 0.1);
   }

   img {
      margin-right: 0.5rem;
   }

   h2 {
      font-size: 1.1rem;
   }
`