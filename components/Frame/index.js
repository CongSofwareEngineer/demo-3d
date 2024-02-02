'use client'
import { images, videos } from '@/config/images'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import SvgOurService from './svgOurService'
import useModal from '@/hooks/useModal'

const ImgCustom = styled(Image)`
  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
`
const Frame = () => {
  const { openModal } = useModal()

  return (
    <div className='relative w-screen h-screen'>
      {/* <ImgCustom
        src={images.frameMain}
        fill
        quality={80}

      /> */}
      <SvgOurService/>
      {/* <video
        src={videos.planet1}
        muted
        autoPlay
        playsInline
        loop
        controls={false}
        preload='auto'
        className='w-screen h-screen'
        style={{ objectFit: 'fill' }}
      /> */}
    </div>
  )
}

export default Frame
