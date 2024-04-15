'use client'

import VideoBanner from '@/components/VideoBanner'
import { images, videos } from '@/config/images'
import React, { useEffect } from 'react'
import Content from './Component/Content'
import './styles.scss'
import { useInView } from 'react-intersection-observer'
import { QUEY_KEY } from '@/config/app'

const PageProfile = () => {
  const { ref: refBanner, inView: inViewBanner } = useInView({ threshold: 0.2 })

  useEffect(() => {
    const banner = document.getElementsByClassName('banner-video')[0]

    if (banner) {
      if (inViewBanner) {
        banner.classList.add('in-viewport-content')
      } else {
        banner.classList.remove('in-viewport-content')
        banner.classList.add('banner-base')
      }
    }
  }, [inViewBanner])

  return (

    <div className='w-full h-screen overflow-x-hidden snap-mandatory snap-y'>

      <div className='  w-full snap-start h-screen relative  ' >
        <VideoBanner
          typeCache={QUEY_KEY.preLoadPortfolio}
          className={'banner-video'}
          videoRef={refBanner}
          poster={images.home.profilePreload}
          url={videos.bannerProfile}
        />

      </ div>
      <Content />
    </div>

  )
}

export default PageProfile
