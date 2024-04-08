import React from 'react'
import VideoBanner from '../VideoBanner'

import BgFrameBanner from '../BgFrameBanner'
import FrameBtn from '../FrameBanner/frameBtn'
import { images, videos } from '@/config/images'

const FrameMain = ({
  children,
  clickProfile = () => {},
  clickAboutUs = () => {},
  clickContactAs = () => {},
  clickOurService = () => {}
}) => {
  return (
    <>
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
    </>
  )
}

export default FrameMain
