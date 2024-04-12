import BgFrameBanner from '@/components/BgFrameBanner'
import FrameBtn from '@/components/FrameBanner/frameBtn'
import React from 'react'

const Frame = ({
  children,
  clickAboutUs = () => {},
  clickContactAs = () => {},
  clickProfile = () => {},
  clickPageHome = () => {}
}) => {
  return (
    <>
      <BgFrameBanner />
      {children}
      <FrameBtn
        clickAboutUs={clickAboutUs}
        clickContactAs={clickContactAs}
        clickProfile={clickProfile}
        clickPageHome={clickPageHome}
      />
    </>
  )
}

export default Frame
