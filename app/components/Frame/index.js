'use client'
import { images, videos } from '@/config/images'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
const ImgCustom = styled(Image)`
  position: fixed !important;
  inset: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
`
const Frame = () => {
  const frameButton = () => {
    return (
      <div className='fixed h-screen w-screen'>

        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <foreignObject width="100%" height="100%">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className='h-full w-full'
            >
              {/* Replace 'your_gif.gif' with the path to your animated .gif */}
              <img
                src={images.ourServices1}
                alt="Animated GIF"
                className='h-[80px] w-[100px] absolute bottom-10'
              />
              <img
                src={images.ourServices1}
                alt="Animated GIF"
                className='h-[80px] w-[100px] absolute bottom-10 right-10'
              />
              <img
                src={images.ourServices1}
                alt="Animated GIF"
                className='h-[80px] w-[100px]'
              />
            </div>
          </foreignObject>
        </svg>
      </div>

    )
  }
  return (
    <div className='relative w-screen h-screen'>
      <ImgCustom
        src={images.frameMain}
        fill
        quality={80}

      />
      {/* <ImgCustom
        src={images.frameDetail}
        fill
        quality={80}
      /> */}
      {/* {
        frameButton()
      } */}
      {frameButton()}
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
