'use client'

import VideoBanner from '@/components/VideoBanner'
import { QUEY_KEY } from '@/config/app'
import { images, videos } from '@/config/images'
import React from 'react'

const PageAboutUseClient = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        <VideoBanner
          typeCache={QUEY_KEY.preLoadAboutAt}
          poster ={images.home.aboutUsPreload}
          url={videos.bannerAboutUs}
        />
      </div>
    </div>
  )
}

export default PageAboutUseClient
