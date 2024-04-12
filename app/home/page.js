'use client'

import VideoBanner from '@/components/VideoBanner'
import { QUEY_KEY } from '@/config/app'
import { images, videos } from '@/config/images'
import React from 'react'

const PageHome = () => {
  return (
    <div className="relative w-screen h-screen overflow-x-hidden ">
      <div className="ab text-me w-full h-full relative overflow-hidden ">
        <VideoBanner
          url={videos.bannerHome}
          poster={images.home.bannerPreload}
          typeCache={QUEY_KEY.preLoadHome}
        />
        {/* <BgFrameBanner />
        <FrameBtn /> */}
      </div>

    </div>
  )
}

export default PageHome
