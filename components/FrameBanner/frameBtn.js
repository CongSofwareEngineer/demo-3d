import { images } from '@/config/images'
import React from 'react'
import styled from 'styled-components';

const SVGCustom = styled.svg` 
  position: absolute;
  width: 100%;
  z-index: 99;
  bottom: 0;
  background: #323e3e80 !important;
  height: 19%;
`;

const Rects = styled.rect.attrs(() => ({ className: 'cursor-pointer' }))``

const FrameBtn = () => {
  return (
    <SVGCustom
      viewBox="0 0 2560 1097"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"

    >
      <Rects x={-3400} y={400} width="1900" height="650" fill="url(#pattern0frame)" />
      {/* <rect width="2560" height="252" fill="url(#pattern1frame)"/>
            <rect width="2560" height="252" fill="url(#pattern2frame)"/>
            <rect width="2560" height="252" fill="url(#pattern3frame)"/> */}
      <defs>
        <pattern
          id="pattern0frame"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_1265_3"
            transform="matrix(0.000370625 0 0 0.001 0 0)"
          />
        </pattern>
        <pattern id="pattern1frame" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1_1265_3" transform="matrix(0.000390625 0 0 0.00396825 0 -3.35317)"/>
        </pattern>

        {/* <pattern id="pattern2frame" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image2_1265_3" transform="matrix(0.000390625 0 0 0.00396825 0 -3.35317)"/>
          </pattern>
          <pattern id="pattern3frame" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image3_1265_3" transform="matrix(0.000390625 0 0 0.00396825 0 -3.35317)"/>
          </pattern> */}

        <image
          href={images.home.btnOurService}
          id="image0_1265_3"
          height="1097"
        />
        <image id="image1_1265_3" width="2560" height="1097"/>
        {/*
              <image id="image2_1265_3" width="2560" height="1097" />
              <image id="image3_1265_3" width="2560" height="1097" /> */}
      </defs>
    </SVGCustom>
  )
}

export default FrameBtn
