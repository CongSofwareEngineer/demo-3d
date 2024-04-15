import { OBSERVER_KEY, QUEY_KEY } from '@/config/app'
import { images } from '@/config/images'
import ObserverService from '@/utils/observer'
import Image from 'next/image'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import preloadContactAt from '@/public/assets/images/ContactAt/bannerContactAt.webp'
import preloadOurService from '@/public/assets/images/Home/banner2Preload.png'
import preloadPortfolio from '@/public/assets/images/Home/profilePreload.png'
import preloadHome from '@/public/assets/images/Home/bannerPreload.png'
import preloadAboutUs from '@/public/assets/images/Home/aboutUsPreload.png'
import { useQueryClient } from '@tanstack/react-query'

const BgBase2 = styled(Image)`
  min-height: 100% !important;
  min-width: 100% !important;
  position: fixed !important;
  width: auto !important;
  height: auto !important;
  inset: unset !important;
  bottom: 0 !important;
  max-width: none !important;
  max-width: none !important;
 
  z-index: 20;
  pointer-events: none; //disable work with mouse = no behavior 
`
const BgFrameBanner = ({ ref, className, callBackLoad = () => {}, ...props }) => {
  const query = useQueryClient()

  useEffect(() => {
    const data = {
      [QUEY_KEY.preLoadAboutAt]: preloadAboutUs,
      [QUEY_KEY.preLoadContactUs]: preloadContactAt,
      [QUEY_KEY.preLoadOurService]: preloadOurService,
      [QUEY_KEY.preLoadPortfolio]: preloadPortfolio,
      [QUEY_KEY.preLoadHome]: preloadHome
    }
    query.setQueryData(QUEY_KEY.dataPosterBanner, data)
  }, [])

  return (
    <BgBase2
      ref={ref}
      fill
      src={images.home.bgFrameBase}
      className={`bg-frame-banner ${className}`}
      alt='bg-frame-banner-main'
      onLoad={() => {
        callBackLoad()
        ObserverService.emit(OBSERVER_KEY.loadBgFrame)
      }}
      {...props}
    />
  )
}

export default React.memo(BgFrameBanner)
