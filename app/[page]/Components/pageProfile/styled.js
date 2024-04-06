import styled, { css, keyframes } from 'styled-components'
const dance = keyframes`
  0%, 100% {
    top: 0;
  }
  50% {
    top: 30px;
  } 
`
export const ContainerBanner = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-x: hidden; 
`
