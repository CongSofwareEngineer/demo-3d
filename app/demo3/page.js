'use client';
import { images, videos } from '@/config/images';
import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import useModal from '@/hooks/useModal';
import useSizeScreen from '@/hooks/useSizeScreen';
// import SvgOurService from './svgOurService';
import dynamic from 'next/dynamic';
const SvgOurService = dynamic(() => import('./svgOurService'), { ssr: false })

const VideoCustom = styled.video`
  position: absolute !important;
  inset: 0;
  object-fit: cover;

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

const ImageCustom = styled(Image)`
   height: auto !important;
    min-height: 100vh !important;
    min-width: 110vw !important;
    position: absolute !important;
    max-width: fit-content !important;
    inset: unset !important;
    bottom: 0 !important;
    width: auto !important;
    left: 50% !important;
    right: 50% !important;
    transform: translate(-50%, 0%) !important;
 `;

const Demo3 = () => {
  const { openModal } = useModal();
  const { ratioBeautiful } = useSizeScreen();

  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        {/* <BgVideo src={images.bgVideo} fill quality={80} /> */}
        <VideoCustom
          muted
          autoPlay
          playsInline
          loop
          controls={false}
          preload="none"
          isScaleWidth={!ratioBeautiful}
          poster={images.home.bannerPreload}
        >
          <source src={videos.planet1} type="video/mp4"/>
        </VideoCustom>
        <SvgOurService />
      </div>

    </div>
  );
};

export default Demo3;
