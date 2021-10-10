import styled from 'styled-components'
import { IInputRangeSlider } from '../../types'


export const Container = styled.div`
   width: 70vw;
   position: relative;
   margin: 4rem 0 4rem 0;
   display: flex;
   align-items: center;
   justify-content: center;

   p {
      position: absolute;
   }

   .left {
      left: 0;
   }

   .right {
      right: 0;
   }

   @media (min-width: 300px) {
      p {
         font-size: 1.1rem;
      }
   }

   @media (min-width: 700px) {
      p {
         font-size: 1rem;
      }
   }

   @media (min-width: 900px) {
      p {
         font-size: 1rem;
      }
   }

   @media (min-width: 1400px) {
      p {
         font-size: 1rem;
      }
   } 
`

export const Input = styled.input<IInputRangeSlider>`
   -webkit-appearance: none;
   -moz-appearance: none;
   background: var(--white);
   height: 0.3rem;
   border-radius: 1rem;
   outline: none;
   border: 0;
   position: relative;
   cursor: pointer;

   &:after {
      content: '';
      position: absolute;
      background: var(--orange);
      border-radius: 1rem 0 0 1rem;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      width: ${props => props.afterWidth + '%'}
   }

   &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 1rem;
      width: 1rem;
      background: var(--orange);
      border-radius: 50%;
      cursor: pointer;
   }

   &::-moz-range-thumb {
      -moz-appearance: none;
      height: 1rem;
      width: 1rem;
      background: var(--orange);
      border-radius: 50%;
      cursor: pointer;
   }

   &::-ms-thumb {
      appearance: none;
      height: 1rem;
      width: 1rem;
      background: var(--orange);
      border-radius: 50%;
      cursor: pointer;
   }

   @media (min-width: 300px) {
      width: 80%;
   }

   @media (min-width: 700px) {
      width: 85%;
   }

   @media (min-width: 900px) {
      width: 85%;
   }

   @media (min-width: 1400px) {
      width: 90%;
   } 
`
