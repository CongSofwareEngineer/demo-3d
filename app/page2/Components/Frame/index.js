import BgFrameBanner from '@/components/BgFrameBanner'
import FrameBtn from '@/components/FrameBanner/frameBtn'
import React from 'react'

const Frame = ({ children }) => {
  return (
    <>
      <BgFrameBanner />
      {children}
      <FrameBtn />
    </>
  )
}

export default Frame
