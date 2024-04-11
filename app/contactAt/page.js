'use client'

import React from 'react'
import { ImageBanner } from './styled'
import { images } from '@/config/images'
import { QUEY_KEY } from '@/config/app'
import { useQueryClient } from '@tanstack/react-query'
import useSizeScreen from '@/hooks/useSizeScreen'

const PageContactAs = () => {
  const query = useQueryClient()
  const { ratioBeautiful } = useSizeScreen()
  const getUrlPoster = () => {
    try {
      const dataCache = query.getQueryData(QUEY_KEY.dataPosterBanner)
      if (dataCache[QUEY_KEY.preLoadContactUs]) {
        return dataCache[QUEY_KEY.preLoadContactUs]
      }
      return {
        src: images.contactAt.bannerContactAt,
        blurDataURL: images.contactAt.bannerContactAt
      }
    } catch (error) {
      return {
        src: images.contactAt.bannerContactAt,
        blurDataURL: images.contactAt.bannerContactAt
      }
    }
  }

  return (
    <div className="relative w-screen h-screen overflow-hidden  ">
      <div className="w-full h-screen relative">

        <ImageBanner
          fill
          alt='banner-contact-at'
          src={getUrlPoster()?.src}
          blurDataURL={getUrlPoster()?.blurDataURL}
          loading='lazy'
        />

      </div>
    </div>
  )
}

export default PageContactAs
