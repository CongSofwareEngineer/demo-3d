'use client';
import { images, videos } from '@/config/images';
import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import useModal from '@/hooks/useModal';
import useSizeScreen from '@/hooks/useSizeScreen';
import SvgOurService from './svgOurService';
import SvgOurService2 from './svgOurService2';

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
  const { ratioBeautiful } = useSizeScreen();

  return (
    <div className="relative w-screen h-screen overflow-auto  ">
      <div className="w-full h-full relative overflow-hidden">
        <VideoCustom
          muted
          autoPlay
          playsInline
          loop
          controls={false}
          preload="none"
          isScaleWidth={!ratioBeautiful}
        >
          <source src={videos.planet1}type="video/mp4"></source>
        </VideoCustom>
        <SvgOurService2 />

      </div>

    </div>
  );
};

export default Demo4;
