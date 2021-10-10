import styled from 'styled-components'
import { IPlayerButtonsContainer } from '../../types'

export const Container = styled.div<IPlayerButtonsContainer>`
   width: auto;
   display: flex;
   align-items: center;
   justify-content: center;

   * {
      cursor: pointer;

      & + * {
         margin-left: 2rem;
      }
   }

   .shuffle {
      fill-opacity: ${props => props.shuffle === true ? 1 : 0.5};
      fill: ${props => props.shuffle === true 
         ? 'var(--orange)' : 'var(--white)'
      };
   }

   .loop {
      fill-opacity: ${props => props.loop === true ? 1 : 0.5};
      fill: ${props => props.loop === true 
         ? 'var(--orange)' : 'var(--white)'
      };
   }
`