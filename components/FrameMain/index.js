import React from 'react'
import BgFrameBanner from '../BgFrameBanner'
// import FrameBtn from '../FrameBanner/frameBtn'
import FrameBtnByImage from '../FrameBanner/frameBtnByImage'
import { usePathname } from 'next/navigation'
import { PAGE_EX } from '@/config/app'

const FrameMain = () => {
  const patchName = usePathname()

  const render = () => {
    return (
      <>
        <BgFrameBanner />
        <FrameBtnByImage />
      </>
    )
  }

  return PAGE_EX[patchName?.slice(1)] && render()
}

export default FrameMain
