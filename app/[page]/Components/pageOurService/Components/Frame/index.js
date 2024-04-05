import BgFrameBanner from '@/components/BgFrameBanner'
import FrameBtn from '@/components/FrameBanner/frameBtn'
import React from 'react'

const Frame = ({
  children,
  clickAboutUs = () => {},
  clickContactAs = () => {},
  clickProfile = () => {}
}) => {
  return (
    <>
      <BgFrameBanner />
      {children}
      <FrameBtn
        clickAboutUs={clickAboutUs}
        clickContactAs={clickContactAs}
        clickProfile={clickProfile}
      />
    </>
  )
}

export default Frame
