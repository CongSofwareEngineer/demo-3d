import React, { useMemo, useLayoutEffect, useState, useRef, useEffect } from 'react'

const useSizeScreen = () => {
  const [sizeScreen, setSizeScreen] = useState({
    width: window?.innerWidth || 21,
    height: window?.innerHeight || 99,
    ratioBeautiful: false
  })

  useEffect(() => {
    const changeSizeScreen = () => {
      const ratio = window.innerWidth / window.innerHeight
      const ratioBeautiful = 21 / 9
      if (ratio > ratioBeautiful) {
        setSizeScreen({
          ...sizeScreen,
          ...{
            width: window.innerWidth,
            height: window.innerHeight,
            ratioBeautiful: false
          }
        })
      } else {
        setSizeScreen({
          ...sizeScreen,
          ...{
            width: window.innerWidth,
            height: window.innerHeight,
            ratioBeautiful: true
          }
        })
      }
    }

    window.addEventListener('resize', () => {
      changeSizeScreen()
    })

    changeSizeScreen()
  }, [])

  return {
    ratioScreen: sizeScreen
  }
}

export default useSizeScreen
