import { images } from '@/config/images';
import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components';
import FrameBtn from './frameBtn';
import SlideBanner from './slideBanner';

const BgBase2 = styled(Image)`
    min-height: 100vh !important; 
    position: absolute !important;
    width: auto !important;
    height: auto !important;
    inset: unset !important;
    bottom: 0 !important;
    max-width: none !important; 
    max-width: none !important;
    margin-left: 50%;
    transform: translate(-50%, 0%);
`;

const SVGCustom = styled.svg` 
  position: absolute;
  width: 100%;
  z-index: 99;
  bottom: 0;
  background: #323e3e80 !important;
  height: 19%;
`;

const Rects = styled.rect.attrs(() => ({ className: 'cursor-pointer' }))``
const Frame2 = () => {
  const [hoverGameArt, setHoverGameArt] = useState(false)

  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      {/* <ContainerFrame >
        <BgBase fill src={images.home.bgFrameBase}/>
        {renderSlide()}
        <SlideBanner />
        <FrameBtn />
      </ContainerFrame> */}
      <SlideBanner />
      <BgBase2 fill src={images.home.bgFrameBase}/>
      <SlideBanner />
      <FrameBtn />
    </div>
  )
}

export default Frame2
