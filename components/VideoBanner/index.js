import React, { useEffect, useState } from 'react'
import styles from './videoBanner.module.scss'
import styled, { css, keyframes } from 'styled-components'
import useSizeScreen from '@/hooks/useSizeScreen'
const opacity = keyframes`
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
`
const VideoCustom = styled.video`
  
  /* ${(props) =>
    props.isLoad
      ? css`
        opacity: 1;
        animation: ${opacity} 4s  linear;
       `
      : css`
      opacity: 0;
      `
} */
   
  
`

const VideoBanner = ({
  url,
  poster,
  callBack = () => {},
  videoRef = React.createRef(null),
  callBackLoaded = () => {}
}) => {
  const { ratioBeautiful } = useSizeScreen()
  const [loadingVideo, setLoadingVideo] = useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('canplaythrough', (event) => {
        callBack()
      })
    }
  }, [])

  return (
    <VideoCustom
      key={url}
      isLoad={loadingVideo}
      ref={videoRef}
      muted
      autoPlay
      playsInline
      loop
      controls={false}
      preload="none"
      isScaleWidth={!ratioBeautiful}
      poster={poster}
      onLoadedData={(e) => {
        callBackLoaded()
        // setLoadingVideo(true)
      }}
      className={`${styles.videoBannerBase} ${!ratioBeautiful && styles.isScale} `}
    >
      <source src={url} type="video/mp4"/>
    </VideoCustom>
  )
}

export default VideoBanner
