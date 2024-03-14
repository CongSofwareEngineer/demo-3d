import React, { useEffect, useRef } from 'react'
import styles from './videoBanner.module.scss'
import useSizeScreen from '@/hooks/useSizeScreen';

const VideoBanner = ({
  url,
  poster,
  callBack = () => {},
  videoRef = React.createRef(null)
}) => {
  const { ratioBeautiful } = useSizeScreen()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('canplaythrough', (event) => {
        callBack()
      })
    }
  }, [])

  return (
    <video
      ref={videoRef}
      muted
      autoPlay
      playsInline
      loop
      controls={false}
      preload="none"
      isScaleWidth={!ratioBeautiful}
      poster={poster}
      className={`${styles.videoBannerBase} ${!ratioBeautiful && styles.isScale} opacity-20`}
    >
      <source src={url} type="video/mp4"/>
    </video>
  )
}

export default VideoBanner
