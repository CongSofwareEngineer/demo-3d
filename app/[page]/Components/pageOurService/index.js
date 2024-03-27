import BgFrameBanner from '@/components/BgFrameBanner';
import FrameBtn from '@/components/FrameBanner/frameBtn';
import VideoBanner from '@/components/VideoBanner';
import { images, videos } from '@/config/images';
import React from 'react';

const PageOurService = ({
  clickProfile = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {}
}) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        <VideoBanner url={videos.planet1} poster={images.home.bannerPreload} />
        <BgFrameBanner />
        <FrameBtn
          clickContactAs={clickContactAs}
          clickProfile={clickProfile}
          clickAboutUs={clickAboutUs}
        />
      </div>
    </div>
  );
};

export default PageOurService;
