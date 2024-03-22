'use client';
import { images, videos } from '@/config/images';
import Image from 'next/image';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import useModal from '@/hooks/useModal';
import useSizeScreen from '@/hooks/useSizeScreen';
import { ImgCustom2, ImgCustom2Top, VideoCustom } from './styled';
import Frame from '@/app/page2/Components/Frame';

const Test = () => {
  const { openModal } = useModal();
  const { ratioBeautiful } = useSizeScreen()

  const [loadingVideo, setLoadingVideo] = useState(false)

  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        {/* <BgVideo src={images.bgVideo} fill quality={80} /> */}
        <VideoCustom
          isLoad={loadingVideo}
          src={videos.planet1}
          muted
          autoPlay
          playsInline
          loop
          controls={false}
          preload="auto"
          isScaleWidth={!ratioBeautiful}
          onLoadedData={() => setLoadingVideo(true)}
        />
      </div>
      {/* <ImgCustom2 src={images.frameMain} />
      <ImgCustom2Top src={images.frameMainTop} /> */}
      <Frame />

    </div>
  );
};

export default Test;
