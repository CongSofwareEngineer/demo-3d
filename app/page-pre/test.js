'use client'
import React from 'react'

const LoadingFirst = () => {
  return (
    <div className='relative z-[13] w-screen h-screen flex justify-center items-center' >
      <video
        className='w-[50%] h-auto object-cover'
        muted
        autoPlay
        playsInline
        loop
        controls={false}
        preload="none"

      >
        <source src={'https://firebasestorage.googleapis.com/v0/b/tc-store-7c79f.appspot.com/o/tree-studio%2FloadingFristPage.webm?alt=media&token=c065ee03-1ef9-491e-a6f7-f69a27727772'} />
      </video>
    </div>
  )
}

export default LoadingFirst
