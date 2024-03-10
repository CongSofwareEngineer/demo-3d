import { useLayoutEffect, useState } from 'react'

const useSizeScreen = () => {
  const [sizeScreen, setSizeScreen] = useState({
    width: window?.innerWidth || 21,
    height: window?.innerHeight || 99,
    ratioBeautiful: false
  })

  useLayoutEffect(() => {
    const changeSizeScreen = () => {
      const ratio = window.innerWidth / window.innerHeight
      const ratioBeautiful = 21 / 9
      if (ratio > ratioBeautiful) {
        setSizeScreen({
          width: window.innerWidth,
          height: window.innerHeight,
          ratioBeautiful: false
        })
      } else {
        setSizeScreen({
          width: window.innerWidth,
          height: window.innerHeight,
          ratioBeautiful: true
        })
      }
    }

    window.addEventListener('resize', () => {
      changeSizeScreen()
    })

    changeSizeScreen()
    return () => window.removeEventListener('resize', () => {})
  }, [])

  return sizeScreen
}

export default useSizeScreen
