'use client'
import BgFrameBanner from '@/components/BgFrameBanner'
import FrameBtn from '@/components/FrameBanner/frameBtn'
import MyImage from '@/components/MyImage'
import React from 'react'
import { ImageBanner } from './styled'
import { images } from '@/config/images'

const PageContactAs = ({
  clickProfile = () => {},
  clickOurService = () => {},
  clickAboutUs = () => {},
  clickPageHome = () => {}
}) => {
  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        {/* <VideoBanner url={videos.bannerAboutUs} /> */}
        <ImageBanner
          fill
          alt='banner-contact-at'
          src={images.contactAt.bannerContactAt}
        />
        <BgFrameBanner />
        <FrameBtn
          clickProfile={clickProfile}
          clickOurService={clickOurService}
          clickAboutUs={clickAboutUs}
          clickPageHome={clickPageHome}
        />
      </div>
    </div>
  )
}

export default PageContactAs
