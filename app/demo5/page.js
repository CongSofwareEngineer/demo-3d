'use client';
import { images, videos } from '@/config/images';
import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import useModal from '@/hooks/useModal';
import useSizeScreen from '@/hooks/useSizeScreen';
import SvgOurService from './svgOurService';

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
    width: 100vw !important;
    position: absolute !important;
    max-width: fit-content !important;
     width: auto !important;
     left: 50% !important;
    right: 50% !important;
    transform: translate(-50%, 0%) !important;
 `;

const Demo4 = () => {
  const { openModal } = useModal();
  const { ratioScreen } = useSizeScreen();

  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        {/* <BgVideo src={images.bgVideo} fill quality={80} /> */}
        <VideoCustom
          src={videos.planet1}
          muted
          autoPlay
          playsInline
          loop
          controls={false}
          preload="auto"
          isScaleWidth={!ratioScreen.ratioBeautiful}
        />
        {/* <ImageCustom src={images.home.bgFrameBase} fill /> */}
        <SvgOurService />

      </div>
      {/* <SvgOurService /> */}
      {/* <ImageCustom src={images.frameFullMain} fill /> */}

    </div>
  );
};

export default Demo4;