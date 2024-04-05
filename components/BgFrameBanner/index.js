import { OBSERVER_KEY } from '@/config/app'
import { images } from '@/config/images'
import ObserverService from '@/utils/observer'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const BgBase2 = styled(Image)`
  min-height: 100vh !important;
  position: fixed !important;
  width: auto !important;
  height: auto !important;
  inset: unset !important;
  bottom: 0 !important;
  max-width: none !important;
  max-width: none !important;
  margin-left: 50%;
  transform: translate(-50%, 0%);
  z-index: 10;
`
const BgFrameBanner = ({ ref, className, callBackLoad = () => {}, ...props }) => {
  return (
    <BgBase2
      ref={ref}
      fill
      src={images.home.bgFrameBase}
      className={`bg-frame-banner ${className}`}
      onLoad={() => {
        callBackLoad()
        ObserverService.emit(OBSERVER_KEY.loadBgFrame)
      }}
      {...props}
    />
  )
}

export default BgFrameBanner
