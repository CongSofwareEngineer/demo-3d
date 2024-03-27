import BgFrameBanner from '@/components/BgFrameBanner'
import FrameBtn from '@/components/FrameBanner/frameBtn'
import VideoBanner from '@/components/VideoBanner'
import { images, videos } from '@/config/images'
import React from 'react'

const PageAboutUse = ({
  clickProfile = () => {},
  clickOurService = () => {},
  clickContactAs = () => {}
}) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        <VideoBanner url={videos.banner3} />
        <BgFrameBanner />
        <FrameBtn
          clickContactAs={clickContactAs}
          clickProfile={clickProfile}
          clickOurService={clickOurService}
        />
      </div>
    </div>
  )
}

export default PageAboutUse
