import BgFrameBanner from '@/components/BgFrameBanner';
import FrameBtn from '@/components/FrameBanner/frameBtn';
import React from 'react';

const Frame = ({
  children,
  clickOurService = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {}
}) => {
  return (
    <>
      <BgFrameBanner />
      {children}
      <FrameBtn
        clickAboutUs={clickAboutUs}
        clickContactAs={clickContactAs}
        clickOurService={clickOurService}
      />
    </>
  );
};

export default Frame;
