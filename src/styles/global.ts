import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   :root {
      --background: #1F2329;
      --black: #272C33;
      --white: #E1DDE7;
      --orange: #F05453;
   }
   
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }

   html {
      @media (max-width: 1080px) {
         font-size: 93.75%; // 15px
      }

      @media (max-width: 720px) {
         font-size: 87.5%; // 14px
      }
   }

   body {
      background: var(--background);
      font-family: 'Fira Sans', sans-serif;
   }

   h1, h2, h3, p {
      color: var(--white);
   }

   h1 {
      font-weight: 500;
   }

   h2 {
      font-weight: 400;
   }

   h3 {
      font-weight: 400;
   }

   .react-modal-overlay {
      background: rgba(0, 0, 0, 0.5);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
   }

   .react-modal-content {
      background: var(--black);
      outline: 0;
      height: 100vh;
      position: relative;
      transform: translateX(-200px);
      transition: all .5s ease;
      overflow-y: auto;

      &::-webkit-scrollbar {
         width: 0.7rem;
      }

      &::-webkit-scrollbar-track {
         background: var(--background);
      }

      &::-webkit-scrollbar-thumb {
         background: rgba(255, 255, 255, 0.5);
         border-radius: 1rem;
         transition: all .3s ease;
      }

      &::-webkit-scrollbar-thumb:hover {
         background: var(--white);
         cursor: pointer;
      }

      @media (min-width: 300px) {
         width: 100vw;
      }

      @media (min-width: 700px) {
         width: 50vw;
      }

      @media (min-width: 900px) {
         width: 30vw;
      }

      @media (min-width: 1400px) {
         width: 20vw;
      } 
   }

   .ReactModal__Content--after-open{
    transform: translateX(0%);
}

   .ReactModal__Content--before-close{
      transform: translateX(-110%);
   }
`