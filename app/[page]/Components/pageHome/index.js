import BgFrameBanner from '@/components/BgFrameBanner';
import FrameBtn from '@/components/FrameBanner/frameBtn';
import VideoBanner from '@/components/VideoBanner';
import { images, videos } from '@/config/images';
import React from 'react';

const PageHome = ({
  clickProfile = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {},
  clickOurService = () => {}

}) => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden ">
      <div className="ab text-me w-full h-full relative overflow-hidden ">
        <VideoBanner
          url={videos.bannerHome}
          poster={images.home.bannerPreload}
        />
        <BgFrameBanner />
        <FrameBtn
          clickContactAs={clickContactAs}
          clickProfile={clickProfile}
          clickAboutUs={clickAboutUs}
          clickOurService={clickOurService}
        />
      </div>

    </div>
  );
};

export default PageHome;
