import BannerVideo from '@/app/page2/Components/bannerVideo';
import { images } from '@/config/images';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import FrameBtn from './frameBtn';
import SlideBanner from './slideBanner';
const ContainerFrame = styled.div`
    position: absolute !important;
    margin-left: 50%;
    transform: translate(-50%, 0%);
    width: max-content;
    bottom: 0;
  
`;
const BgBase = styled(Image)`
    min-height: 100vh !important; 
    position: relative !important;
    width: auto !important;
    height: auto !important;
    max-width: none !important; 
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
  const renderSlide = () => {
    return (
      <div className='absolute  inset-0 flex h-full gap-0 w-full overflow-hidden overflow-x-auto flex-col flex-wrap snap-x'>
        <div className='snap-center w-full h-full bg-green-200'/>
        <div className='snap-center w-full h-full bg-orange-200'/>
        <div className='snap-center w-full h-full bg-blue-400'/>
      </div>
    )
  }

  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      <ContainerFrame >
        <BgBase fill src={images.home.bgFrameBase}/>
        {/* {renderSlide()} */}
        <SlideBanner />
        <FrameBtn />
      </ContainerFrame>
    </div>
  )
}

export default Frame2
