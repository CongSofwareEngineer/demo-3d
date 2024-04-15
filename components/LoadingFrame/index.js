import { OBSERVER_KEY, PAGE_EX } from '@/config/app'
import ObserverService from '@/utils/observer'
import { usePathname } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'

const LoadingFrame = () => {
  const patchName = usePathname()

  const [loadBgFrame, setLoadBgFrame] = useState(false)
  const [loadContentFrame, setLoadContentFrame] = useState(false)
  useEffect(() => {
    ObserverService.on(OBSERVER_KEY.loadBgFrame, () => setLoadBgFrame(true))
    ObserverService.on(OBSERVER_KEY.loadContentFrame, () => setLoadContentFrame(true))
    return () => {
      ObserverService.removeListener(OBSERVER_KEY.loadBgFrame)
      ObserverService.removeListener(OBSERVER_KEY.loadContentFrame)
    }
  }, [])

  const isRender = useMemo(() => {
    if (PAGE_EX[patchName?.slice(1)]) {
      if (!loadBgFrame) {
        return true
      }
    }
    return false
  }, [patchName, loadBgFrame])

  return (

    isRender
      ? (
        <div className='z-[12] fixed w-screen h-full bg-black'/>
      )
      : (
        <></>
      )
  )
}

export default LoadingFrame
