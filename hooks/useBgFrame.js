import { OBSERVER_KEY } from '@/config/app'
import ObserverService from '@/utils/observer'
import React, { useEffect, useState } from 'react'

const useBgFrame = () => {
  const [bgFrame, setBgFrame] = useState(null)

  const getWidth = () => {
    const bg = document.getElementsByClassName('bg-frame-banner')[0]
    if (bg) {
      setBgFrame(bg)
    }
  }

  useEffect(() => {
    ObserverService.on(OBSERVER_KEY.loadBgFrame, () => {
      getWidth()
    })
    setTimeout(() => {
      getWidth()
    }, 1500)
    return () => {
      ObserverService.removeListener(OBSERVER_KEY.loadBgFrame)
    }
  }, [])
  return {
    bgFrame
  }
}

export default useBgFrame
