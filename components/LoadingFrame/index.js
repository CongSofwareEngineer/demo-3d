import { OBSERVER_KEY } from '@/config/app'
import ObserverService from '@/utils/observer'
import React, { useEffect, useLayoutEffect, useState } from 'react'

const LoadingFrame = () => {
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
  return (
    !loadBgFrame && !loadContentFrame && (
      <div className='z-[999999999] fixed w-screen h-full bg-black'>

      </div>
    )
  )
}

export default LoadingFrame
