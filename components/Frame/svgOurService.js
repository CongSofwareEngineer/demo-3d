import { images } from '@/config/images'
import useModal from '@/hooks/useModal'
import React from 'react'

const SvgOurService = () => {
  const { openModal } = useModal()

  const handleOpen = (text) => {
    console.log('====================================')
    console.log({ text })
    console.log('====================================')
    openModal({
      body: (
        <div>
          {text}
        </div>
      )
    })
  }
  return (
    <div className='absolute w-full bottom-0 z-10' >
      <svg width="100%" height="auto" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <rect y="179" width="1920" height="100%" fill="url(#pattern0)"/>
        <g clipPath="url(#clip0_35_9)">
          <rect onClick={() => handleOpen('our service')} className='hover' x="26" y="758" width="384" height="346" fill="url(#pattern1)"/>
          <rect className='hover' x="372" y="726" width="400" height="400" fill="url(#pattern2)"/>
          <rect className='hover' x="1494" y="758" width="400" height="400" fill="url(#pattern3)"/>
          <rect className='hover' x="760" y="704" width="400" height="400" fill="url(#pattern4)"/>
          <rect className='hover' x="1152" y="724" width="400" height="400" fill="url(#pattern5)"/>
        </g>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_35_9" transform="matrix(0.000520833 0 0 0.000925926 0.00108612 -0.333627)"/>
          </pattern>
          <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image1_35_9" transform="matrix(0.00281576 0 0 0.003125 -0.063151 0)"/>
          </pattern>
          <pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image2_35_9" transform="scale(0.0025)"/>
          </pattern>
          <pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image3_35_9" transform="scale(0.0025)"/>
          </pattern>
          <pattern id="pattern4" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image4_35_9" transform="scale(0.0025)"/>
          </pattern>
          <pattern id="pattern5" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image5_35_9" transform="scale(0.0025)"/>
          </pattern>
          <clipPath id="clip0_35_9">
            <rect width="1920" height="1080" fill="white"/>
          </clipPath>
          <image className='animation-zoom955-2 hover' id="image1_35_9" width="400" height="320" href={images.ourServices1} />
          <image className='animation-zoom955-2 hover-zoom25' id="image2_35_9" width="400" height="320" href={images.myPortfolio} />
          <image className='animation-zoom955-2 hover-zoom25' id="image3_35_9" width="400" height="320" href={images.aboutUs} />
          <image className='animation-zoom955-2 hover-zoom25' id="image4_35_9" width="400" height="320" href={images.email} />
          <image className='animation-zoom955-2 hover-zoom25' id="image5_35_9" width="400" height="320" href={images.workFlow} />
          <image id="image0_35_9" width="1920" height="1440" href={images.frameBottom} />

        </defs>
      </svg>
      {/* <image id="image0_33_2" width="400" height="320" href={images.ourServices1} /> */}

    </div>

  )
}

export default SvgOurService
