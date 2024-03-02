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

const ImgCustom2 = styled.img`
  position: absolute !important;
  height: 100vh !important;
  width: auto !important;
  max-width: fit-content !important;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Frame = () => {
  const { openModal } = useModal()

  return (
    <div className='relative w-screen h-screen overflow-hidden  '>
      <ImgCustom2
        src={images.frameMain}
        // fill
        // quality={80}

      />
      {/* <ImgCustom
        src={images.frameMain}
        fill
        quality={80}

      />
      <SvgOurService/>
      <video
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
