'use client'

import React from 'react'
import { ImageBanner } from './styled'
import { images } from '@/config/images'
import { QUEY_KEY } from '@/config/app'
import { useQueryClient } from '@tanstack/react-query'

const PageContactAs = () => {
  const query = useQueryClient()
  const getUrlPoster = () => {
    try {
      const dataCache = query.getQueryData(QUEY_KEY.dataPosterBanner)
      if (dataCache[QUEY_KEY.preLoadContactUs]) {
        return dataCache[QUEY_KEY.preLoadContactUs]
      }
      return images.contactAt.bannerContactAt
    } catch (error) {
      return images.contactAt.bannerContactAt
    }
  }
  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-full relative">
        {/* <VideoBanner url={videos.bannerAboutUs} /> */}
        <ImageBanner
          fill
          alt='banner-contact-at'
          src={getUrlPoster()}
        />
      </div>
    </div>
  )
}

export default PageContactAs
