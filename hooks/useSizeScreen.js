import React, { useMemo, useLayoutEffect, useState } from 'react'

const useSizeScreen = () => {
  const [sizeScreen, setSizeScreen] = useState({
    width: window?.innerWidth || 21,
    innerHeight: window?.innerHeight || 99
  })

  useLayoutEffect(() => {
    window.addEventListener('resize', () => {
      setSizeScreen({
        width: window?.innerWidth,
        innerHeight: window?.innerHeight
      })
    })
  }, [])

  const ratioScreen = useMemo(() => {
    const ratio = sizeScreen.width / sizeScreen.innerHeight
    const ratioBeautiful = 21 / 9
    if (ratio > ratioBeautiful) {
      return {
        ratio,
        isScaleWidth: true
      }
    }
    return {
      ratio,
      isScaleWidth: false
    }
  }, [sizeScreen])

  return { ratioScreen }
}

export default useSizeScreen
