import VideoBanner from '@/components/VideoBanner'
import { images, videos } from '@/config/images'
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
const SVGCustom = styled.svg`
     min-height: 100vh ;
    min-width: 110vw ;
    position: absolute ;
     inset: unset ;
    bottom: 0 ;
    width: auto ;
    left: 50% ;
    right: 50% ;
    transform: translate(-50%, 0%) ;
  
`;
const BannerVideo = () => {
  const refVideo = useRef(null)
  const [dataVideo, setdataVideo] = useState({ w: 0, h: 0 })

  useEffect(() => {
    window.addEventListener('resize', () => {
      setdataVideo({
        w: refVideo.current.clientWidth,
        h: refVideo.current.clientHeight
      })
    })
    setdataVideo({
      w: refVideo.current.clientWidth,
      h: refVideo.current.clientHeight
    })
    console.log('====================================');
    console.log({ ref: refVideo.current });
    console.log('====================================');
  }, [])
  console.log('====================================');
  console.log({ dataVideo });
  console.log('====================================');

  const renderSVG = (second) => {
    return (
      <SVGCustom
        //   width={dataVideo.w}
        //     height={dataVideo.h}
        viewBox="0 0 2560 1097"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >

        <rect width="2560" height="1097" fill="url(#pattern0)"/>
        <rect width="2560" height="1097" fill="url(#pattern1)"/>
        <rect x={1800} y={400} width="500" height="1097" fill="url(#pattern2)"/>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_1220_6" transform="scale(0.000390625 0.000911577)"/>
          </pattern>
          <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image1_1220_6" transform="scale(0.000390625 0.000911577)"/>
          </pattern>
          <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image2_1220_6" transform="scale(0.00390625 0.000911577)"/>
          </pattern>
          <image id="image0_1220_6" width="2560" height="1097" />
          <image id="image1_1220_6" width="2560" height="1097" />
          <image href={images.home.banner2.gameArt} id="image2_1220_6" height="100" />
        </defs>
      </SVGCustom>

    )
  }
  return (
    <>
      <VideoBanner
        videoRef={refVideo}
        url={videos.banner2}
        poster={images.home.banner2Preload}
      />
      {renderSVG()}
    </>
  )
}

export default BannerVideo
