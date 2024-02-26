'use client'
import { images, videos } from '@/config/images'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import useModal from '@/hooks/useModal'

const ImgCustom = styled(Image)`
  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
`

const ImgCustom2 = styled.img`
    position: absolute;
    min-width: 100vw;
    position: absolute;
  
    bottom: 0;

`;

const ImgCustom2Top = styled.img`
    position: absolute;
    min-width: 100vw;
    position: absolute;
    inset: 0;
    bottom: 0;
`;

const Test = () => {
  const { openModal } = useModal()

  return (
    <div className='relative w-screen h-screen overflow-hidden  '>
      <ImgCustom2
        src={images.frameMain}
        // fill
        // quality={80}

      />
      <ImgCustom2Top src={images.frameMainTop}/>
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

export default Test