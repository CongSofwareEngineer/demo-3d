import styled, { css, keyframes } from 'styled-components';
const opacity = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`
export const ImgCustom2 = styled.img`
  position: absolute;
  min-width: 100vw;
  position: absolute;

  bottom: 0;
  @media screen and (max-width: 1300px) {
   min-width: 120vw;
   left: -10vw;
  }  
`;

export const ImgCustom2Top = styled.img`
  position: absolute;
  min-width: 100vw;
  position: absolute;
  inset: 0;
  bottom: 0;
  @media screen and (max-width: 1300px) {
   min-width: 120vw;
   left: -10vw;
  } 
`;

export const VideoCustom = styled.video`
  position: absolute !important;
  inset: 0;
  object-fit: cover;
  ${(props) =>
    props.isLoad
      ? css`
        opacity: 1;
        animation: ${opacity} 2s  linear;
      `
      : css`
      opacity: 0;
      `
}
  ${(props) =>
    props.isScaleWidth
      ? css`
          width: 100vw;
          height: auto;
        `
      : css`
          height: 100vh;
          width: auto;
        `}
  
`;
