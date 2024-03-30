import BgFrameBanner from '@/components/BgFrameBanner'
import FrameBtn from '@/components/FrameBanner/frameBtn'
import VideoBanner from '@/components/VideoBanner'
import { videos } from '@/config/images'
import React from 'react'

const PageContactAs = ({
  clickProfile = () => {},
  clickOurService = () => {},
  clickAboutUs = () => {}
}) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        <VideoBanner url={videos.bannerAboutUs} />
        <BgFrameBanner />
        <FrameBtn
          clickProfile={clickProfile}
          clickOurService={clickOurService}
          clickAboutUs={clickAboutUs}
        />
      </div>
    </div>
  )
}

export default PageContactAs
