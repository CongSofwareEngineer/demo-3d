'use client'

import React from 'react'
import { ImageBanner } from './styled'
import { images } from '@/config/images'

const PageContactAs = () => {
  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        {/* <VideoBanner url={videos.bannerAboutUs} /> */}
        <ImageBanner
          fill
          alt='banner-contact-at'
          src={images.contactAt.bannerContactAt}
        />
      </div>
    </div>
  )
}

export default PageContactAs
