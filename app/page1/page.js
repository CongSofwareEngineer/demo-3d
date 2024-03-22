'use client';
import { images, videos } from '@/config/images';
import React from 'react';
import useModal from '@/hooks/useModal';
import useSizeScreen from '@/hooks/useSizeScreen';
// import SvgOurService from './svgOurService';
import dynamic from 'next/dynamic';
import DesBanner from './Components/DesBanner';
import FrameBanner from '@/components/FrameBanner';
import Frame from '@/components/Frame';
import BgFrameBanner from '@/components/BgFrameBanner';
import FrameBtn from '@/components/FrameBanner/frameBtn';
const VideoBanner = dynamic(() => import('@/components/VideoBanner'), { ssr: false })

const page1 = () => {
  const { openModal } = useModal();
  const { ratioBeautiful } = useSizeScreen();

  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        <VideoBanner
          url={videos.planet1}
          poster={images.home.bannerPreload}
        />
        <BgFrameBanner />
        <FrameBtn />
      </div>

    </div>
  );
};

export default page1;
