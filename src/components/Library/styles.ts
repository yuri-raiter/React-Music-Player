import styled from 'styled-components'

export const Container = styled.div`
   padding: 4rem 1rem;
   
   .icon {
      position: absolute;
      right: 1rem;
      top: 1rem;
      border-radius: 50%;
      padding: 0.5em;
      transition: all .2s ease;
      cursor: pointer;

      &:hover {
         background: rgba(255, 255, 255, 0.1);
      }
   }
`