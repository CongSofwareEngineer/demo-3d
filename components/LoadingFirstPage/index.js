'use client'
import Image from 'next/image'
import { useLayoutEffect, useState } from 'react'
import './styles.scss'
const LoadingFirst = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 2000)
  }, [])

  return (
    !isLoaded
      ? (
        <div className='fixed bg-white z-30 w-screen h-screen flex justify-center items-center select-none pointer-events-none' >
          <Image
            fill
            src={'/assets/gif/loadingFirstPage.gif'}
            alt='loading-First-Page'
            className={'img-loading-icon'}
            quality={100}
          />
        </div>
      )
      : <></>

  )
}

export default LoadingFirst
