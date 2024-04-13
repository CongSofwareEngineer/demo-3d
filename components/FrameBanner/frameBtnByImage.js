import { images } from '@/config/images'
import useSizeScreen from '@/hooks/useSizeScreen'
import Image from 'next/image'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import styled from 'styled-components'

const ImageCustom = styled(Image)`
  position: relative !important;
  max-height:100% !important;
  height: 90% !important;
  width: auto !important;
  max-width: none !important;
`

const ImageOurService = ({ src }) => {
  return (
    <div className='relative h-[72%]  top-[23%] left-[-11%] '>
      <ImageCustom
        src={src}
        fill
      />
    </div>
  )
}

const ImageProfile = ({ src }) => {
  return (
    <div className='relative h-[72%]  top-[9%] left-[-13%] '>
      <ImageCustom
        src={src}
        fill
      />
    </div>
  )
}

const ImageTree = ({ src }) => {
  return (
    <div className='relative h-[72%]  top-[-10%] left-[-4.3%] '>
      <ImageCustom
        src={src}
        fill
      />
    </div>
  )
}

const ImageAboutAt = ({ src }) => {
  return (
    <div className='relative h-[72%]  top-[23%] '>
      <ImageCustom
        src={src}
        fill
      />
    </div>
  )
}

const ImageContact = ({ src }) => {
  return (
    <div className='relative h-[72%]  top-[23%] '>
      <ImageCustom
        src={src}
        fill
      />
    </div>
  )
}
const FrameBtnByImage = () => {
  const [widthBgFrame, setWidthBgFrame] = useState(10000)

  useEffect(() => {
    const getWidth = () => {
      const bg = document.getElementsByClassName('bg-frame-banner')[0]
      if (bg) {
        setWidthBgFrame(bg.clientWidth)
      }
    }
    window.addEventListener('resize', () => {
      getWidth()
    })
    setTimeout(() => {
      getWidth()
    }, 500)
  }, [])
  console.log('====================================')
  console.log({ widthBgFrame })
  console.log('====================================')
  return (
    <div className={'pl-[100px] fixed z-[11] gap-3 bottom-0   h-[19%] flex items-center justify-around'} style={{ width: widthBgFrame }}>
      <ImageOurService src={images.home.btnOurService} />

      <ImageProfile src={images.home.btnPortFltoClick} />

      <ImageTree src={images.home.btnTree} />

      <ImageAboutAt src={images.home.btnAboutUs} />

      <ImageContact src={images.home.btnContact} />
    </div>
  )
}
export default FrameBtnByImage
