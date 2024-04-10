'use client'
import { videos } from '@/config/images'
import React from 'react'

const LoadingFirst = () => {
  return (
    <div className='fixed bg-black z-[13] w-screen h-screen flex justify-center items-center' >
      <video
        className='w-[50%] h-auto object-cover'
        muted
        autoPlay
        playsInline
        loop
        controls={false}
        preload="none"

      >
        <source src={videos.loadingFirstPage} />
      </video>
    </div>
  )
}

export default LoadingFirst
