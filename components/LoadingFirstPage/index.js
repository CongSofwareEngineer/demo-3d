'use client'
import Image from 'next/image'
import { useLayoutEffect, useState } from 'react'

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
        <div className='fixed bg-white z-30 w-screen h-screen flex justify-center items-center' >
          {/* <video
            className='w-[100px] h-[100px] object-cover'
            muted
            autoPlay
            playsInline
            loop
            controls={false}
            preload="none"
          >
            <source src={videos.loadingFirstPage} />
          </video> */}
          <Image
            width={100}
            height={100}
            src={'/assets/gif/loadingFirstPage.gif'}
            alt='loadingFirstPage'
          />
        </div>
      )
      : <></>

  )
}

export default LoadingFirst
