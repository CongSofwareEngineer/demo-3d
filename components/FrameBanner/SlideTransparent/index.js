import React from 'react';
import styled from 'styled-components';
import Banner2 from '../Banner2';

const SlideBanner = ({
  hoverGameArt
}) => {
  return (
    <ContainerSlide>
      <ItemSlide >
        <Banner2 noShowElement />
      </ItemSlide>
      <ItemSlide >
        <Banner2 noShowElement/>
      </ItemSlide>
      <ItemSlide >
        <Banner2 noShowElement/>
      </ItemSlide>
    </ContainerSlide>
  );
};

const ContainerSlide = styled.div`
  display: flex;
  position: absolute;
  inset: 0;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  flex-flow: wrap;
  flex-direction: column;
  scroll-snap-type: x mandatory;
  left: 50% ;
    right: 50% ;
    transform: translate(-50%, 0%) ;
  &::-webkit-scrollbar {
    display: none;
  }

`;

const ItemSlide = styled.div`
  scroll-snap-align: center;
  height: 100%;
  width: 100%;
`;

export default SlideBanner;
