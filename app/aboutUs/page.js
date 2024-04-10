'use client'

import VideoBanner from '@/components/VideoBanner'
import { images, videos } from '@/config/images'
import React from 'react'

const PageAboutUse = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        <VideoBanner poster={images.home.aboutUsPreload} url={videos.bannerAboutUs} />
      </div>
    </div>
  )
}

export default PageAboutUse
