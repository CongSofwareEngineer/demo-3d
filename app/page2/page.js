'use client';
import { images, videos } from '@/config/images';
import React from 'react';
import useModal from '@/hooks/useModal';
import useSizeScreen from '@/hooks/useSizeScreen';
// import SvgOurService from './svgOurService';
import dynamic from 'next/dynamic';
import FrameBanner from '@/components/FrameBanner';
//  const FrameBanner = dynamic(() => import('@/components/FrameBanner'), { ssr: false })
const VideoBanner = dynamic(() => import('@/components/VideoBanner'), { ssr: false })

const Page2 = () => {
  const { openModal } = useModal();
  const { ratioBeautiful } = useSizeScreen();

  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        {/* <BgVideo src={images.bgVideo} fill quality={80} /> */}
        <VideoBanner
          url={videos.banner2}
          poster={images.home.banner2Preload}
        />
        <FrameBanner />
      </div>

    </div>
  );
};

export default Page2;
