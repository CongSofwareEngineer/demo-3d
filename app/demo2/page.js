'use client';
import { images, videos } from '@/config/images';
import Image from 'next/image';
import React from 'react';
import styled, { css } from 'styled-components';
import useModal from '@/hooks/useModal';
import ImageEx from '@/components/ImageEx';
import useSizeScreen from '@/hooks/useSizeScreen';

const BgVideo = styled.img`
  position: absolute !important;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* height: 100vh; */
  max-width: fit-content;
  min-height: 100vh;
  min-width: 100vw;
`;

const ImgCustom2 = styled.img`
  position: absolute;
  min-width: 100vw;
  position: absolute;

  bottom: 0;
  @media screen and (max-width: 1300px) {
   min-width: 120vw;
   left: -10vw;
  } 
`;

const ImgCustom2Top = styled.img`
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
    height: 100% !important;
    width: auto !important;
    position:  absolute !important;
    max-width: fit-content !important   ;
    inset: unset !important;

    top: 50% !important ;   
    left: 50% !important ;  
    transform: translate(-50%, -50%); 
`;

const Demo2 = () => {
  const { openModal } = useModal();
  const { ratioScreen } = useSizeScreen();

  console.log({ ratioScreen });

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
      </div>
      <ImageCustom src={images.frameFullMain} fill />

    </div>
  );
};

export default Demo2;
