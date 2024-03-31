import BgFrameBanner from '@/components/BgFrameBanner';
import FrameBtn from '@/components/FrameBanner/frameBtn';
import MyImage from '@/components/MyImage';
import VideoBanner from '@/components/VideoBanner';
import { images, videos } from '@/config/images';
import React, { useState } from 'react';
const arr = []
for (let index = 0; index < 9; index++) {
  arr.push('')
}
const PageProfile = ({
  clickOurService = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {}
}) => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden ">
      <div className="w-full h-full relative overflow-hidden ">
        <VideoBanner url={videos.bannerProfile} />
        <BgFrameBanner />
        <FrameBtn
          clickContactAs={clickContactAs}
          clickOurService={clickOurService}
          clickAboutUs={clickAboutUs}
        />
      </div>

    </div>
  );
};

export default PageProfile;
