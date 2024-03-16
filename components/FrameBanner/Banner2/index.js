import { images } from '@/config/images'
import React, { useState } from 'react'
import { isMobileOnly } from 'react-device-detect'
import styled from 'styled-components'

const Banner2 = ({ ref }) => {
  const [hoverGameArt, setHoverGameArt] = useState(false)

  const handleHover = () => {
    console.log('handleHover');
    !isMobileOnly && setHoverGameArt(true)
  }

  const handleUnHover = () => {
    console.log('handleUnHover');
    !isMobileOnly && setHoverGameArt(false)
  }

  const renderImgSvg = (id, url, urHover, isHover) => {
    return (
      <>
        <image href={url}
          id={isHover ? 'no-data' : id}
          height="100"
        />
        <image href={urHover}
          id={id}
          height="100"
        />
      </>
    )
  }

  return (
    <SVGCustom
      viewBox="0 0 2560 1097"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="2560" height="1097" fill="url(#pattern0)"/>
      <rect width="2560" height="1097" fill="url(#pattern1)"/>
      <rect
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleUnHover()}
        onClick={() => setHoverGameArt(!hoverGameArt)}
        className=' cursor-pointer'
        x={1770}
        y={420}
        width="420"
        height="170"
        fill="url(#pattern2)"
      />
      <rect x="1163" y="519" width="655" height="400" fill="url(#pattern3)"/>
      <rect x="618" y="499" width="545" height="325" fill="url(#pattern4)"/>
      <rect x="1335" y="456" width="583" height="460" fill="url(#pattern5)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1220_6" transform="scale(0.000390625 0.000911577)"/>
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1_1220_6" transform="scale(0.000390625 0.000911577)"/>
        </pattern>
        <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image2_1220_6"
            transform="scale(0.0037 0.009)"
          />
        </pattern>
        <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image3_1220_6" transform="matrix(0.001 0 0 0.0016375 0 -0.0878625)"/>
        </pattern>
        <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image4_1220_6" transform="matrix(0.001 0 0 0.00167692 0 -0.0600923)"/>
        </pattern>
        <pattern id="pattern5" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image5_1220_6" transform="matrix(0.001 0 0 0.00126739 0 -0.12419)"/>
        </pattern>
        <image id="image0_1220_6" width="2560" height="1097" />
        <image id="image1_1220_6" width="2560" height="1097" />
        {/* <image id="image2_1220_6" width="2560" height="1097" /> */}

        {renderImgSvg(
          'image2_1220_6',
          images.home.banner2.gameArt,
          images.home.banner2.gameArtClick,
          hoverGameArt
        )}
        {
          !hoverGameArt && (
            <image href={ images.home.banner2.tableGameArt} id="image5_1220_6" width="800" height="800" />

          )
        }

        <image id="image3_1220_6" width="1000" height="718" />
        <image id="image4_1220_6" width="1000" height="668" />

      </defs>
    </SVGCustom>
  )
}

const SVGCustom = styled.svg` 
  height: auto;
  width: auto;
  min-height: 100vh;
  min-width: 110vw;
  position: relative; 
  width: auto;
  left: 50%;
  right: 50%;
  transform: translate(-50%, 0%);
`;

export default Banner2
